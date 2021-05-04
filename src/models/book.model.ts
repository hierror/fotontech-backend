import Book from '../types/book';
import db from '../db';
import id from '../utils/ids';

export const createBookDocument = async (
    book: Book
): Promise<PouchDB.Core.Response> => {
    let response: PouchDB.Core.Response;

    try {
        const document: Book = {
            _id: id(),
            ...book,
            createdAt: new Date().toISOString()
        };

        response = await db.put(document);
    } catch (err) {
        throw Error("Can't create a new book row in the database");
    }

    return response;
};

export const findBookDocument = async (
    bookId: string
): Promise<Book | undefined> => {
    let response: PouchDB.Core.Document<Book>;
    let book: Book;

    try {
        response = await db.get(bookId);

        book = {
            _id: response._id,
            name: response.name,
            author: response.author,
            description: response.description
        };
    } catch (err) {
        if (err.reason === 'missing') {
            return undefined;
        }

        throw new Error(
            `Couldn't find the book with id ${bookId} the database due to error`
        );
    }

    return book;
};
