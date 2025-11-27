import { ClassGrid } from "@/components/ClassGrid";
import { fetchClasses } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EDUS Classes - Find the Best Tutors & Classes",
  description:
    "Explore a wide range of classes for Cambridge, Edexcel, and National syllabuses. Find expert teachers and enroll today.",
  openGraph: {
    title: "EDUS Classes - Find the Best Tutors & Classes",
    description:
      "Explore a wide range of classes for Cambridge, Edexcel, and National syllabuses. Find expert teachers and enroll today.",
    type: "website",
  },
};

export default async function Home() {
  const classes = await fetchClasses();

  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-blue-600 py-12 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Find Your Perfect Class
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100">
            Browse through our extensive collection of classes for all grades and syllabuses.
            Start your learning journey with expert guidance.
          </p>
        </div>
      </div>
      <ClassGrid initialData={classes} />
    </div>
  );
}
