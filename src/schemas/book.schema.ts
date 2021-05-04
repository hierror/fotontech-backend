const BookSchema: any = {
    type: 'object',
    required: ['name', 'author', 'description'],
    properties: {
        bookName: {
            type: 'string',
            description: 'Name of the book'
        },
        bookAuthor: {
            type: 'string',
            description: 'Author of the book'
        },
        bookDescription: {
            type: 'string',
            description: 'Description of the book'
        }
    }
};

export default BookSchema;
