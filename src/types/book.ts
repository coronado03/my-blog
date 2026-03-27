export type Book = {
  title: string;
  author: string;
  progress: number;
  status: 'Reading' | 'Done' | 'Queue';
  year: number;
};
