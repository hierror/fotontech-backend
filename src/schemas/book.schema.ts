import { Schema } from 'jsonschema';

const BookSchema: Schema = {
    id: '/BookSchema',
    type: 'object',
    required: ['name', 'author', 'description'],
    properties: {
        name: {
            type: 'string',
            description: 'Title of the book',
            minLength: 1
        },
        author: {
            type: 'string',
            description: 'Author of the book',
            minLength: 3
        },
        description: {
            type: 'string',
            description: 'Detailed description of the book',
            minLength: 50,
            maxLength: 500
        }
    }
};

export default BookSchema;
