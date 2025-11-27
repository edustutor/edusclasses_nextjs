import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="mb-4 flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                                <GraduationCap className="h-5 w-5" />
                            </div>
                            <span className="text-xl font-bold text-gray-900">EDUS Classes</span>
                        </Link>
                        <p className="mb-6 max-w-sm text-sm text-gray-500">
                            Empowering students with quality education. Find the best classes,
                            expert teachers, and resources to excel in your academic journey.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-pink-600 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                                <Link href="#" className="hover:text-blue-600 transition-colors">
                                    Find Classes
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-blue-600 transition-colors">
                                    Our Teachers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-blue-600 transition-colors">
                                    Success Stories
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-blue-600 transition-colors">
                                    Become a Teacher
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">Support</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                                <Link href="#" className="hover:text-blue-600 transition-colors">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-blue-600 transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-blue-600 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-blue-600 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-100 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} EDUS Classes. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
