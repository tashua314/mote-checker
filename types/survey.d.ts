export type Question = {
  questionIndex: number;
  text: string;
  rating: number;
}

export type Category = {
  categoryIndex: number;
  name: string;
  questions: Question[];
}
