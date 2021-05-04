import { NextFunction, Request, Response, Router } from 'express';
import { ValidationError, Validator } from 'express-json-validator-middleware';
import { ResJSON, ResStatus } from './types/resjson';
import BookSchema from './schemas/book.schema';
import { createNewBook, findOneBook } from './controllers/book.controller';

const { validate } = new Validator({ allErrors: true });

const router = Router();

router.route('/books').post(validate({ body: BookSchema }), createNewBook);

router.route('/books/:book_id').get(findOneBook);

// Request made to non-existent resource
router.use((req, res): void => {
    res.status(404).end();
});

// Error handler for validation errors
router.use(
    (error: Error, request: Request, res: Response, next: NextFunction) => {
        if (error instanceof ValidationError) {
            const errors: unknown = error.validationErrors;

            const payload: ResJSON = {
                status: ResStatus.Fail,
                message: `Fields validation failed`,
                body: [errors]
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
