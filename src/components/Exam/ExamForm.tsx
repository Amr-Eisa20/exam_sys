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
import { FormProvider } from "react-hook-form";

interface ExamFormProps {
  exam?: Exam;
}

const ExamForm: React.FC<ExamFormProps> = ({ exam }) => {
  const router = useRouter();
  const methods = useExamForm(exam);

  const onSubmit = (data: Exam) => {
    const examData = { ...data, id: data.id || uuidv4() };
    saveExam(examData);
    router.push("/exams");
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          {/* Exam Title */}
          <div>
            <label className="mb-1 text-black">Exam Title</label>
            <Input {...methods.register("title", { required: true })} />
          </div>

          {/* Exam Description */}
          <div>
            <label className="mb-1 text-black">Exam Description</label>
            <Textarea {...methods.register("description")} />
          </div>

          {/* Questions */}
          <div>
            <h2 className="text-2xl text-black space-y-4">Questions</h2>
            {methods.questionFields.map((field, index) => (
              <QuestionForm
                key={field.id}
                questionIndex={index}
                removeQuestion={methods.removeQuestion}
              />
            ))}
            <button
              type="button"
              onClick={() =>
                methods.appendQuestion({
                  id: uuidv4(),
                  title: "",
                  description: "",
                  answers: [],
                })
              }
              className="mt-2 p-2 bg-blue-500 text-white border rounded-md"
            >
              Add Question
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!methods.formState.isValid}
              className={`p-2 text-white border rounded-md ${
                methods.formState.isValid ? "bg-blue-500" : "bg-gray-500"
              }`}
            >
              Submit Exam
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ExamForm;
