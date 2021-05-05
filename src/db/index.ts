import * as PouchDB from 'pouchdb';
import * as PouchDBFind from 'pouchdb-find';
import * as books from '../data/books.json';

PouchDB.plugin(PouchDBFind);

const pouch = new PouchDB('library');

pouch
    .info()
    .then((info) => {
        console.log('Connected to the database');

        // Populates the database with books
        if (Number(info.doc_count) === 0) {
            for (const book of books) {
                pouch.put(book);
            }
        }

        // Create a new index to use on the queries
        pouch.createIndex({
            index: { fields: ['name'] }
        });
    })
    .catch((err) => {
        console.error(err);

        throw new Error('Can\t connect to the database');
    });

export default pouch;
