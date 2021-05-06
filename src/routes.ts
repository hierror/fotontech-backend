import { NextFunction, Request, Response, Router } from 'express';
import { ValidationError } from 'jsonschema';
import { ResJSON, ResStatus } from './types/resjson';
import { validateBook } from './utils/validators';
import {
    createNewBook,
    findAllBooks,
    findOneBook
} from './controllers/book.controller';

const router = Router();

router.route('/books').get(findAllBooks).post(validateBook, createNewBook);

router.route('/books/:book_id').get(findOneBook);

// Request made to non-existent resource
router.use((req, res): void => {
    res.status(404).end();
});

// Error handler for validation errors
router.use(
    (error: Error, request: Request, res: Response, next: NextFunction) => {
        if (error instanceof ValidationError) {
            const payload: ResJSON = {
                status: ResStatus.Fail,
                message: `Validation Error: property ${error.path[0]} ${error.message}`
            };

            return res.status(400).json(payload);
        } else {
            // Pass error on if not a validation error
            next(error);
        }
    }
);

// Default error handler
router.use((error: Error, request: Request, res: Response) => {
    console.error(error.stack);

    const payload: ResJSON = {
        status: ResStatus.Error,
        message: error.message || 'Internal Server Error',
        body: [error || null]
    };

    res.status(500).json(payload);
});

export default router;
