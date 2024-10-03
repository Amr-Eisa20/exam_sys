import { useForm, useFieldArray } from "react-hook-form";
import { Exam } from "@/interface";

export const useExamForm = (defaultValues?: Exam) => {
  const { control, handleSubmit, formState } = useForm<Exam>({
    defaultValues,
    mode: "onChange",
  });

  const {
    fields: questionFields,
    append: appendQuestion,
    remove: removeQuestion,
  } = useFieldArray({
    control,
    name: "questions",
  });

  return {
    control,
    handleSubmit,
    formState,
    questionFields,
    appendQuestion,
    removeQuestion,
  };
};
