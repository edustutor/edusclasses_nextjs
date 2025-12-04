import { ClassItem } from "@/types";

const DATA_URL = "https://raw.githubusercontent.com/edustutor/edusclasscodes/refs/heads/main/EDUScourses.json";

export async function fetchClasses(): Promise<ClassItem[]> {
    try {
        const res = await fetch(DATA_URL, {
            next: { revalidate: 300 }, // Cache for 5 minutes
        });


        if (!res.ok) {
            throw new Error("Failed to fetch class data");
        }

        const data: ClassItem[] = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching classes:", error);
        return [];
    }
}
