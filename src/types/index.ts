export interface Fee {
    amount: number;
    currency: string;
}

export interface ScheduleItem {
    day: string;
    time: string;
}

export interface ClassItem {
    classCode: string;
    classType: string;
    syllabus: string;
    grade: string;
    medium: string;
    teacherName: string;
    courseTitle: string;
    fee: Fee;
    imageUrl: string;
    schedule?: ScheduleItem[];
}

export type FilterState = {
    grade: string;
    syllabus: string;
    medium: string;
    classType: string;
    search: string;
};
