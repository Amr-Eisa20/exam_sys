export interface Answer {
  id: string;
  title: string;
  isCorrect: boolean;
  description?: string;
}

export interface Question {
  id: string;
  title: string;
  answers: Answer[];
  description?: string;
}

export interface Exam {
  id: string;
  title: string;
  questions: Question[];
  description?: string;
}
