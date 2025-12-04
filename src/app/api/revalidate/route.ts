import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        // Get the secret from the request
        const authHeader = request.headers.get('authorization');
        const secret = process.env.REVALIDATE_SECRET;

        // Verify the secret
        if (!secret || authHeader !== `Bearer ${secret}`) {
            return NextResponse.json(
                { message: 'Unauthorized - Invalid or missing secret' },
                { status: 401 }
            );
        }

        // Revalidate the home page and all data
        revalidatePath('/', 'layout');

        console.log('✅ Cache revalidated successfully at:', new Date().toISOString());

        return NextResponse.json({
            revalidated: true,
            timestamp: new Date().toISOString(),
            message: 'Cache cleared - fresh data will be fetched'
        });
    } catch (err) {
        console.error('❌ Revalidation error:', err);
        return NextResponse.json(
            {
                message: 'Error revalidating cache',
                error: String(err)
            },
            { status: 500 }
        );
    }
}

// Optional: Allow GET requests to check if the endpoint is working
export async function GET() {
    return NextResponse.json({
        message: 'Revalidation endpoint is active',
        usage: 'Send POST request with Authorization: Bearer <REVALIDATE_SECRET>'
    });
}
