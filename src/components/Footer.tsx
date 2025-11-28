import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-12">
                    {/* Logo and Description */}
                    <div className="col-span-1 md:col-span-5 flex flex-col items-center md:items-start">
                        <Link href="https://www.edus.lk" target="_blank" rel="noopener noreferrer" className="mb-4 inline-block">
                            <Image
                                src="/EDUS-Tutor-Logo1.webp"
                                alt="EDUS Logo"
                                width={300}
                                height={100}
                                className="h-16 md:h-20 w-auto"
                            />
                        </Link>
                        <p className="mb-6 max-w-sm text-sm text-gray-300 leading-relaxed text-center md:text-justify">
                            <span className="font-semibold text-white">EDUS</span> is a leading Online Live Learning Institute for students from Grade 1 to G.C.E A/L. EDUS provides quality assured online live classes to students across Sri Lanka, ensuring student&apos;s academic success.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1 md:col-span-3">
                        <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="https://wiki.edustutor.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Resource Vault
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://edustutor.com/gallery/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://edustutor.com/tutorapply"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Apply as a Tutor
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://signup.edustutor.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Register as a Student
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="col-span-1 md:col-span-4">
                        <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                <Link
                                    href="tel:+94114477488"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    +94 114 477 488
                                </Link>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                <Link
                                    href="mailto:hello@edus.lk"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    hello@edus.lk
                                </Link>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0 mt-1" />
                                <span className="text-gray-300">
                                    #95, KKS Road, Jaffna, Sri Lanka
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                    <p className="text-center text-sm text-gray-400">
                        Copyright © {new Date().getFullYear()} EDUS Lanka (PVT) Ltd. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
