"use client";

import React, { useState, useEffect } from "react";
import ExamForm from "./ExamForm";
import { getExams } from "@/utils";
import { Exam } from "@/interface";

interface ExamEditorProps {
  id: string;
}

const ExamEditor: React.FC<ExamEditorProps> = ({ id }) => {
  const [exam, setExam] = useState<Exam | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch exams from localStorage
    const exams = getExams();
    const foundExam = exams.find((e) => e.id === id) || null;
    setExam(foundExam);
    setLoading(false);
  }, [id]);

  if (loading) {
    // Show a loading state to prevent hydration mismatch
    return <div>Loading...</div>;
  }

  if (!exam) {
    return <div>Exam not found.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl text-black mb-6">Details Exam</h2>
      <ExamForm exam={exam} />
    </div>
  );
};

export default ExamEditor;
