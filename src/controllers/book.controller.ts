import { Request, Response } from 'express';
import { createBookDocument } from '../models/book.model';
import Book from '../types/book';
import { ResJSON, ResStatus } from '../types/resjson';

export const createNewBook = async (
    req: Request,
    res: Response
): Promise<void> => {
    const book: Book = req.body;
    const payload: PouchDB.Core.Response = await createBookDocument(book);

    const response: ResJSON = {
        status: ResStatus.Success,
        message: 'Created a new book document succesfully',
        body: [payload]
    };

    res.status(200).json(response);
};

export const findAllBooks = (req: Request, res: Response): void => {};

export const findOneBook = (bookId: number): void => {};
