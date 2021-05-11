import { Request, Response } from 'express';
import {
  createBookDocument,
  findAllBooksDocuments,
  findBookDocument
} from '../models/book.model';
import { Book, Books } from '../types/Book';
import { ResJSON, ResStatus } from '../types/ResJSON';

export const createNewBook = async (
  req: Request,
  res: Response
): Promise<unknown> => {
  const book: Book = req.body;
  const payload: PouchDB.Core.Response = await createBookDocument(book);

  const response: ResJSON = {
    status: ResStatus.Success,
    message: 'Created a new book document succesfully',
    body: [payload]
  };

  return res.status(200).json(response);
};

export const findAllBooks = async (
  req: Request,
  res: Response
): Promise<unknown> => {
  const payload: Books | [] = await findAllBooksDocuments();

  let response: ResJSON;

  if (payload.length === 0) {
    response = {
      status: ResStatus.Fail,
      message: `There isn't any book registered on the database`,
      body: []
    };

    return res.status(404).json(response);
  }

  response = {
    status: ResStatus.Success,
    message: `Found all books successfully`,
    body: [...payload]
  };

  return res.status(200).json(response);
};

export const findOneBook = async (
  req: Request,
  res: Response
): Promise<unknown> => {
  const bookId: string = req.params.book_id;
  const payload: Book | undefined = await findBookDocument(bookId);

  let response: ResJSON;

  if (payload === undefined) {
    response = {
      status: ResStatus.Fail,
      message: `This book hasn't been registered`,
      body: []
    };

    return res.status(404).json(response);
  }

  response = {
    status: ResStatus.Success,
    message: `Found a book document with id ${bookId} succesfully`,
    body: [payload]
  };

  return res.status(200).json(response);
};
