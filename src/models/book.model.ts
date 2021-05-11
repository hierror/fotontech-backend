import { Book, Books } from '../types/Book';
import db from '../db';
import id from '../utils/nanoid';

export const createBookDocument = async (
  book: Book
): Promise<PouchDB.Core.Response> => {
  let response: PouchDB.Core.Response;

  try {
    const document: Book = {
      _id: id(),
      ...book,
      img: '',
      createdAt: new Date().toISOString()
    };

    response = await db.put(document);
  } catch (err) {
    throw Error("Can't create a new book row in the database");
  }

  return response;
};

export const findAllBooksDocuments = async (): Promise<Books | []> => {
  let response: PouchDB.Find.FindResponse<Record<string, unknown>>;
  let books: Books;

  try {
    const options: PouchDB.Find.FindRequest<Record<string, unknown>> = {
      selector: {
        name: { $gte: null }
      },
      fields: ['_id', 'name', 'author', 'description', 'img'],
      sort: ['name']
    };

    response = await db.find(options);

    // Unfortunately, I need to typecast the response to unknown before typecasting to an array of Books
    books = <Books>(<unknown>response.docs);
  } catch (err) {
    console.log(err);

    throw new Error(
      `Couldn't retrieve all the books in the database due to error`
    );
  }

  return books;
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
      description: response.description,
      img: response.img
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
