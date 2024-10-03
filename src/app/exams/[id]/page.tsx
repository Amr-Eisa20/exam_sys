"use client";
import React from "react";
import ExamForm from "@/components/Exam/ExamForm";
import { getExams } from "@/utils";
import { Exam } from "@/interface";

interface ExamEditorPageProps {
  params: { id: string };
}

const ExamEditorPage: React.FC<ExamEditorPageProps> = ({ params }) => {
  const exams = getExams();

  const exam = exams.find((e) => e.id === params.id) as Exam | undefined;

  if (!exam) {
    return <div>Exam not found.</div>;
  }

  return (
    <div className="container">
      <h2 className="text-2xl text-black mb-6">Details Exam</h2>
      <ExamForm exam={exam} />
    </div>
  );
};

export default ExamEditorPage;
