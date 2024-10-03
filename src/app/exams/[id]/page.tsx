import React from "react";
import ExamEditor from "@/components/Exam/ExamEditor";

interface ExamEditorPageProps {
  params: { id: string };
}

const ExamEditorPage: React.FC<ExamEditorPageProps> = ({ params }) => {
  return (
    <div className="container">
      <ExamEditor id={params.id} />
    </div>
  );
};

export default ExamEditorPage;
