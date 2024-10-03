"use client";
import React from "react";
import { useExamForm } from "@/hooks";
import QuestionForm from "./QuestionForm";
import { Exam } from "@/interface";
import { saveExam } from "@/utils";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import Input from "../Ui/Input";
import Textarea from "../Ui/Textarea";

interface ExamFormProps {
  exam?: Exam;
}

const ExamForm: React.FC<ExamFormProps> = ({ exam }) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { isValid },
    questionFields,
    appendQuestion,
    removeQuestion,
  } = useExamForm(exam);

  const onSubmit = (data: Exam) => {
    const examData = { ...data, id: data.id || uuidv4() };
    saveExam(examData);
    router.push("/exams");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4">
        {/* Exam Title */}
        <div>
          <label className="mb-1 text-black">Exam Title</label>
          <Input {...control.register("title", { required: true })} />
        </div>

        {/* Exam Description */}
        <div>
          <label className="mb-1 text-black">Exam Description</label>
          <Textarea {...control.register("description")} />
        </div>

        {/* Questions */}
        <div>
          <h2 className="text-2xl text-black space-y-4">Questions</h2>
          {questionFields.map((field, index) => (
            <QuestionForm
              key={field.id}
              control={control}
              questionIndex={index}
              removeQuestion={removeQuestion}
            />
          ))}
          <button
            type="button"
            onClick={() =>
              appendQuestion({
                id: uuidv4(),
                title: "",
                answers: [],
              })
            }
            className="mt-2 p-2 bg-blue-500 text-white border rounded-md "
          >
            Add Question
          </button>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={!isValid}
            className={`p-2 text-white border rounded-md ${
              isValid ? "bg-blue-500" : "bg-gray-500"
            }`}
          >
            Submit Exam
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExamForm;
