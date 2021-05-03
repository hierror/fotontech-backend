import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import { json, urlencoded } from 'body-parser';

const app = express();

app.disable('x-powered-by');

app.use(morgan('dev'));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

export const start = (): void => {
    const port = process.env.PORT;

    app.listen(port, () => {
        console.log('Server running on port', port);
    });
};
