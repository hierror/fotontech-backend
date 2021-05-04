import * as PouchDB from 'pouchdb';
import * as books from '../data/books.json';

const pouch = new PouchDB('library');

pouch
    .info()
    .then((info) => {
        console.log('Connected to the database');

        if (Number(info.doc_count) === 0) {
            for (const book of books) {
                pouch.put(book);
            }
        }
    })
    .catch((err) => {
        console.error(err);

        throw new Error('Can\t connect to the database');
    });

export default pouch;
