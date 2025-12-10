import Link from "next/link";
import Image from "next/image";

export function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white shadow-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="https://edustutor.com" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/EDUS-Tutor-Logo.webp"
                        alt="EDUS Logo"
                        width={300}
                        height={80}
                        className="h-10 md:h-12 w-auto"
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                    <Link href="https://edustutor.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                        Home
                    </Link>
                    <Link href="/" className="text-blue-600">
                        Classes
                    </Link>
                    <Link href="https://edustutor.com/blogs/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                        Blogs
                    </Link>
                    <Link href="https://edustutor.com/contact-us/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="https://app.edustutor.com/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
                    >
                        Login
                    </Link>
                    <Link
                        href="https://signup.edustutor.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                        Enroll Now
                    </Link>
                </div>
            </div>
        </header>
    );
}
