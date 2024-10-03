"use client";
import React from "react";
import { useFieldArray, useFormContext, Controller } from "react-hook-form";
import AnswerForm from "./AnswerForm";
import { v4 as uuidv4 } from "uuid";
import { Exam, QuestionFormProps } from "@/interface";
import Input from "../Ui/Input";
import Textarea from "../Ui/Textarea";

const QuestionForm: React.FC<QuestionFormProps> = ({
  questionIndex,
  removeQuestion,
}) => {
  const { control } = useFormContext<Exam>();

  const {
    fields: answerFields,
    append: appendAnswer,
    remove: removeAnswer,
  } = useFieldArray({
    control,
    name: `questions.${questionIndex}.answers`,
  });

  return (
    <div className="border p-4 my-4">
      {/* Question Title */}
      <div className="pb-4">
        <label className="text-black">Question Title</label>
        <Controller
          name={`questions.${questionIndex}.title`}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input {...field} />}
        />
      </div>

      {/* Question Description */}
      <div>
        <label className="text-black">Question Description</label>
        <Controller
          name={`questions.${questionIndex}.description`}
          control={control}
          render={({ field }) => <Textarea {...field} />}
        />
      </div>

      {/* Answers */}
      <div className="my-2">
        <h3 className="text-2xl text-black space-y-4">Answers</h3>
        {answerFields.map((field, index) => (
          <AnswerForm
            key={field.id}
            questionIndex={questionIndex}
            answerIndex={index}
            removeAnswer={removeAnswer}
          />
        ))}
        <button
          type="button"
          onClick={() =>
            appendAnswer({
              id: uuidv4(),
              title: "",
              description: "",
              isCorrect: false,
            })
          }
          className="mt-2 p-2 bg-blue-500 text-white border rounded-md"
        >
          Add Answer
        </button>
      </div>

      {/* Remove Question */}
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={() => removeQuestion(questionIndex)}
          className="mt-2 p-2 bg-red-500 text-white border rounded-md"
        >
          Remove Question
        </button>
      </div>
    </div>
  );
};

export default QuestionForm;
