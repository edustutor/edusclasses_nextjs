"use client";

import { ClassItem } from "@/types";
import { motion } from "framer-motion";
import { BookOpen, Calendar, GraduationCap, Users, Wallet } from "lucide-react";
import Image from "next/image";

interface ClassCardProps {
    item: ClassItem;
}

export function ClassCard({ item }: ClassCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
        >
            <div className="relative h-48 w-full overflow-hidden shrink-0">
                <Image
                    src={item.imageUrl}
                    alt={item.courseTitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                    <span className="inline-block rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                        {item.syllabus}
                    </span>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="mb-3 flex items-center justify-between">
                    <span className="flex items-center text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        {item.classType === "INDIVIDUAL" ? "Individual Class" : "Group Class"}
                    </span>
                </div>

                <h3 className="mb-2 text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {item.courseTitle}
                </h3>

                <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">{item.teacherName}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        <span>Grade {item.grade}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>{item.medium}</span>
                    </div>
                </div>

                {/* Schedule Chips or Individual Messages */}
                {item.classType === "INDIVIDUAL" ? (
                    <div className="mb-4 flex items-start gap-2 text-xs text-purple-700 bg-purple-50 p-2 rounded-lg">
                        <Calendar className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>No fixed timetable. You can flexibly fix the timetable.</span>
                    </div>
                ) : (
                    item.schedule && item.schedule.length > 0 && (
                        <div className="mb-4 flex flex-wrap gap-2">
                            {item.schedule.map((s, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-1 rounded-full bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-700"
                                >
                                    <Calendar className="h-3 w-3" />
                                    <span>
                                        {s.day} {s.time}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )
                )}

                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-1.5 text-gray-900 font-bold">
                        <Wallet className="h-4 w-4 text-gray-400" />
                        <span>
                            {item.fee.currency} {item.fee.amount.toLocaleString()}
                            <span className="text-xs font-normal text-gray-500 ml-1">
                                {item.classType === "INDIVIDUAL" ? "/Hr" : "/Month"}
                            </span>
                        </span>
                    </div>
                    <a
                        href="https://signup.edustutor.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Enroll Now
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
