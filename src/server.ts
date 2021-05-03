import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import { json, urlencoded } from 'body-parser';
import router from './routes';

const app = express();

app.disable('x-powered-by');

app.use(morgan('dev'));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api', router);

export const start = (): void => {
    const port = process.env.PORT;

    app.listen(port, () => {
        console.log('Server running on port', port);
    });
};
