import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Exam } from "@/interface";

const STORAGE_KEY = "exams";

export const getExams = (): Exam[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveExam = (exam: Exam) => {
  const exams = getExams();
  const index = exams.findIndex((e) => e.id === exam.id);
  if (index > -1) {
    exams[index] = exam;
  } else {
    exams.push(exam);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(exams));
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
