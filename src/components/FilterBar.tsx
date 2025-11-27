"use client";

import { FilterState } from "@/types";
import { Search, X } from "lucide-react";
import { ChangeEvent } from "react";

interface FilterBarProps {
    filters: FilterState;
    onFilterChange: (key: keyof FilterState, value: string) => void;
    grades: string[];
    syllabuses: string[];
    mediums: string[];
    classTypes: string[];
}

export function FilterBar({
    filters,
    onFilterChange,
    grades,
    syllabuses,
    mediums,
    classTypes,
}: FilterBarProps) {
    const handleChange = (key: keyof FilterState) => (
        e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        onFilterChange(key, e.target.value);
    };

    const clearFilters = () => {
        onFilterChange("grade", "");
        onFilterChange("syllabus", "");
        onFilterChange("medium", "");
        onFilterChange("classType", "");
        onFilterChange("search", "");
    };

    const hasActiveFilters =
        filters.grade ||
        filters.syllabus ||
        filters.medium ||
        filters.classType ||
        filters.search; // This line will be removed from the condition for the clear button

    return (
        <div className="sticky top-16 z-30 w-full border-b border-gray-200 bg-white/80 px-4 py-4 backdrop-blur-md transition-all duration-300">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap">

                    {/* Filters */}
                    <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:w-auto">
                        <select
                            value={filters.grade}
                            onChange={(e) => onFilterChange("grade", e.target.value)}
                            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-lg md:text-base font-medium text-gray-700 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-blue-300"
                        >
                            <option value="">All Grades</option>
                            {grades.map((g) => (
                                <option key={g} value={g}>
                                    Grade {g}
                                </option>
                            ))}
                        </select>

                        <select
                            value={filters.syllabus}
                            onChange={(e) => onFilterChange("syllabus", e.target.value)}
                            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-lg md:text-base font-medium text-gray-700 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-blue-300"
                        >
                            <option value="">All Syllabuses</option>
                            {syllabuses.map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>

                        <select
                            value={filters.medium}
                            onChange={(e) => onFilterChange("medium", e.target.value)}
                            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-lg md:text-base font-medium text-gray-700 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-blue-300"
                        >
                            <option value="">All Mediums</option>
                            {mediums.map((m) => (
                                <option key={m} value={m}>
                                    {m}
                                </option>
                            ))}
                        </select>

                        <select
                            value={filters.classType}
                            onChange={(e) => onFilterChange("classType", e.target.value)}
                            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-lg md:text-base font-medium text-gray-700 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-blue-300"
                        >
                            <option value="">All Types</option>
                            {classTypes.map((t) => (
                                <option key={t} value={t}>
                                    {t === "INDIVIDUAL" ? "Individual Class" : "Group Class"}
                                </option>
                            ))}
                        </select>

                        {hasActiveFilters && (
                            <button
                                onClick={clearFilters}
                                className="flex items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-lg md:text-base font-medium text-red-600 transition-colors hover:bg-red-100 active:bg-red-200"
                            >
                                <X className="h-4 w-4" />
                                Clear
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
