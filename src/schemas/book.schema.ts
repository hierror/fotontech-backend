const BookSchema: any = {
    type: 'object',
    required: ['name', 'author', 'description'],
    properties: {
        name: {
            type: 'string',
            description: 'Name of the book'
        },
        author: {
            type: 'string',
            description: 'Author of the book'
        },
        description: {
            type: 'string',
            description: 'Detailed description of the book'
        }
    }
};

export default BookSchema;
