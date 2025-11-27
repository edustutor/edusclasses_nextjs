import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                        <GraduationCap className="h-5 w-5" />
                    </div>
                    <span className="text-xl font-bold text-gray-900">EDUS Classes</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                    <Link href="#" className="hover:text-blue-600 transition-colors">
                        Home
                    </Link>
                    <Link href="#" className="text-blue-600">
                        Classes
                    </Link>
                    <Link href="#" className="hover:text-blue-600 transition-colors">
                        Teachers
                    </Link>
                    <Link href="#" className="hover:text-blue-600 transition-colors">
                        About Us
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="hidden sm:block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        Log in
                    </Link>
                    <Link
                        href="#"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </header>
    );
}
