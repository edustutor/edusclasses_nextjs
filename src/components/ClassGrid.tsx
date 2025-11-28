"use client";

import { ClassItem, FilterState } from "@/types";
import { useState, useMemo } from "react";
import { ClassCard } from "./ClassCard";
import { FilterBar } from "./FilterBar";
import { motion, AnimatePresence } from "framer-motion";
import { Frown } from "lucide-react";

interface ClassGridProps {
    initialData: ClassItem[];
}

const GRADE_ORDER = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "A/L"
];

export function ClassGrid({ initialData }: ClassGridProps) {
    const [filters, setFilters] = useState<FilterState>({
        grade: "",
        syllabus: "",
        medium: "",
        classType: "",
        search: "",
    });

    const handleFilterChange = (key: keyof FilterState, value: string) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    // Extract unique values for filters
    const uniqueValues = useMemo(() => {
        const grades = Array.from(new Set(initialData.map((item) => item.grade))).sort((a, b) => {
            const indexA = GRADE_ORDER.indexOf(a);
            const indexB = GRADE_ORDER.indexOf(b);
            if (indexA !== -1 && indexB !== -1) return indexA - indexB;
            if (indexA !== -1) return -1;
            if (indexB !== -1) return 1;
            return a.localeCompare(b);
        });
        const syllabuses = Array.from(new Set(initialData.map((item) => item.syllabus))).sort();
        const mediums = Array.from(new Set(initialData.map((item) => item.medium))).sort();
        const classTypes = Array.from(new Set(initialData.map((item) => item.classType))).sort();
        return { grades, syllabuses, mediums, classTypes };
    }, [initialData]);

    // Filter and Sort logic
    const filteredData = useMemo(() => {
        const filtered = initialData.filter((item) => {
            const matchesGrade = !filters.grade || item.grade.trim() === filters.grade;
            const matchesSyllabus = !filters.syllabus || item.syllabus.trim() === filters.syllabus;
            const matchesMedium = !filters.medium || item.medium.trim() === filters.medium;
            const matchesType = !filters.classType || item.classType.trim() === filters.classType;

            return matchesGrade && matchesSyllabus && matchesMedium && matchesType;
        });

        // Sort by Class Type (Group first), then by Grade Order
        return filtered.sort((a, b) => {
            // 1. Sort by Class Type (GROUP before INDIVIDUAL)
            if (a.classType === "GROUP" && b.classType !== "GROUP") return -1;
            if (a.classType !== "GROUP" && b.classType === "GROUP") return 1;

            // 2. Sort by Grade
            const indexA = GRADE_ORDER.indexOf(a.grade);
            const indexB = GRADE_ORDER.indexOf(b.grade);
            let gradeComparison = 0;

            if (indexA !== -1 && indexB !== -1) {
                gradeComparison = indexA - indexB;
            } else if (indexA !== -1) {
                gradeComparison = -1;
            } else if (indexB !== -1) {
                gradeComparison = 1;
            } else {
                gradeComparison = a.grade.localeCompare(b.grade);
            }

            return gradeComparison;
        });

    }, [initialData, filters]);

    return (
        <div className="min-h-screen bg-gray-50">
            <FilterBar
                filters={filters}
                onFilterChange={handleFilterChange}
                grades={uniqueValues.grades}
                syllabuses={uniqueValues.syllabuses}
                mediums={uniqueValues.mediums}
                classTypes={uniqueValues.classTypes}
            />

            <main className="container mx-auto px-4 py-8">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Available Classes
                        <span className="ml-2 text-sm font-normal text-gray-500">
                            ({filteredData.length} results)
                        </span>
                    </h2>
                </div>

                {filteredData.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center py-20 text-center"
                    >
                        <div className="mb-6 rounded-full bg-blue-50 p-6">
                            <Frown className="h-12 w-12 text-blue-500" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-gray-900">
                            Class Not Found?
                        </h3>
                        <p className="mb-6 max-w-md text-gray-600">
                            If your class is not showing here, don't worry! We can arrange a
                            teacher for your specific needs.
                        </p>

                        <div className="flex flex-col items-center gap-4 sm:flex-row">
                            <a
                                href="https://wa.me/94704141333"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-600"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 0 00-3.48-8.413Z" />
                                </svg>
                                WhatsApp Us
                            </a>
                            <a
                                href="tel:+94704141333"
                                className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                            >
                                Call +94 70 414 1333
                            </a>
                        </div>

                        <p className="mt-4 text-sm text-gray-500">
                            Our student consultants are ready to guide you.
                        </p>

                        <button
                            onClick={() =>
                                setFilters({
                                    grade: "",
                                    syllabus: "",
                                    medium: "",
                                    classType: "",
                                    search: "",
                                })
                            }
                            className="mt-8 text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </motion.div>
                ) : (
                    <div
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {filteredData.map((item) => (
                            <ClassCard key={item.classCode} item={item} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
