import Link from "next/link";
import Image from "next/image";

export function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="https://edus.lk" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/1.png"
                        alt="EDUS Logo"
                        width={300}
                        height={80}
                        className="h-20 w-auto"
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                    <Link href="https://edus.lk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                        Home
                    </Link>
                    <Link href="/" className="text-blue-600">
                        Classes
                    </Link>
                    <Link href="https://edus.lk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                        Teachers
                    </Link>
                    <Link href="https://edus.lk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                        About Us
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
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
