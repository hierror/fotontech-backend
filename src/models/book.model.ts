import Book from '../types/book';
import db from '../db';
import id from '../utils/ids';

export const createBookDocument = async (
    book: Book
): Promise<PouchDB.Core.Response> => {
    let response;

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
