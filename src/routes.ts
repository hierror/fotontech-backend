import { NextFunction, Request, Response, Router } from 'express';
import { ValidationError, Validator } from 'express-json-validator-middleware';
import { ResJSON, ResStatus } from './types/resjson';
import BookSchema from './schemas/book.schema';

const { validate } = new Validator({ allErrors: true });

const router = Router();

router.route('/books').post(validate({ body: BookSchema }));

router.route('/books/:book_id');

// Request made to non-existent resource
router.use((req, res): void => {
    res.status(404).end();
});

router.use(
    (error: Error, request: Request, res: Response, next: NextFunction) => {
        if (error instanceof ValidationError) {
            const payload: ResJSON = {
                status: ResStatus.Fail,
                message: error.message,
                body: [error.validationErrors]
            };

            res.status(400).json(payload);
        } else {
            // Pass error on if not a validation error
            next(error);
        }
    }
);

export default router;
