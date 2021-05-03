import { Router } from 'express';

const router = Router();

router.route('/books');

router.route('/books/:book_id');

// Request made to non-existent resource
router.use((req, res): void => {
    res.status(404).end();
});

export default router;
