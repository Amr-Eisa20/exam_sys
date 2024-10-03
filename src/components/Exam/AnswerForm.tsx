"use client";

import React from "react";
import {
  Control,
  Controller,
  useWatch,
  UseFormSetValue,
} from "react-hook-form";
import { Exam } from "@/interface";
import Input from "../Ui/Input";
import Textarea from "../Ui/Textarea";

interface AnswerFormProps {
  control: Control<Exam>;
  setValue: UseFormSetValue<Exam>;
  questionIndex: number;
  answerIndex: number;
  removeAnswer: (index: number) => void;
  answerFields: any[];
}

const AnswerForm: React.FC<AnswerFormProps> = ({
  control,
  setValue,
  questionIndex,
  answerIndex,
  removeAnswer,
  answerFields,
}) => {
  const answers = useWatch({
    control,
    name: `questions.${questionIndex}.answers`,
  });

  // Function to handle making an answer correct and others incorrect
  const handleIsCorrectChange = (index: number) => {
    answers.forEach((_, idx) => {
      setValue(
        `questions.${questionIndex}.answers.${idx}.isCorrect`,
        idx === index
      );
    });
  };

  return (
    <div className="border p-2 my-2">
      {/* Answer Title */}
      <div className="pb-4">
        <label className="text-black">Answer Title</label>
        <Controller
          name={`questions.${questionIndex}.answers.${answerIndex}.title`}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input {...field} />}
        />
      </div>

      {/* Answer Description */}
      <div>
        <label className="text-black">Answer Description</label>
        <Controller
          name={`questions.${questionIndex}.answers.${answerIndex}.description`}
          control={control}
          render={({ field }) => <Textarea {...field} />}
        />
      </div>

      {/* Is Correct Radio Button */}
      <div className="flex justify-between items-center my-2">
        <div>
          <input
            type="radio"
            checked={answers[answerIndex]?.isCorrect || false}
            onChange={() => handleIsCorrectChange(answerIndex)}
            className="text-blue-500 focus:ring-blue-300 focus:ring-1 focus:outline-none rounded-md"
          />
          <label className="text-black ml-2">Correct Answer</label>
        </div>
        {/* Remove Answer */}
        <button
          type="button"
          onClick={() => removeAnswer(answerIndex)}
          className="mt-2 p-2 bg-red-500 text-white border rounded-md"
        >
          Remove Answer
        </button>
      </div>
    </div>
  );
};

export default AnswerForm;
