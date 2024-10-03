import { useForm, useFieldArray } from "react-hook-form";
import { Exam } from "@/interface";

export const useExamForm = (defaultValues?: Exam) => {
  const methods = useForm<Exam>({
    defaultValues,
    mode: "onChange",
  });

  const { control } = methods;

  const {
    fields: questionFields,
    append: appendQuestion,
    remove: removeQuestion,
  } = useFieldArray({
    control,
    name: "questions",
  });

  return {
    ...methods,
    questionFields,
    appendQuestion,
    removeQuestion,
  };
};
