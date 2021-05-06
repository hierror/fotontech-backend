import { NextFunction, Request, Response } from 'express';
import BookSchema from '../schemas/book.schema';
import { validate } from 'jsonschema';
import { Book } from '../types/book';

export const validateBook = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const book: Book = req.body;

    const result = validate(book, BookSchema);

    if (result.errors.length > 0) {
        const error = result.errors[0];

        throw error;
    } else {
        next();
    }
};
