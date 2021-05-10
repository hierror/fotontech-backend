export interface Book {
  _id?: string;
  name: string;
  author: string;
  description: string;
  img?: string;
  createdAt?: string;
}

export type Books = Book[];
