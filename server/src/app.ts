import express, { Application } from 'express';
import config from 'config';
import dbConnect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';
import cors from 'cors';

const port: number = config.get<number>('port');

const app: Application = express();

app.use(cors({
    origin: config.get<string>('origin')
}));

app.use(express.json());

try {
    app.listen(port, () => {
        logger.info(`The server has started listening on port ${port}`);
        
        dbConnect();

        routes(app);
    })
} catch (error) {
    logger.info('Error starting the server occurred');
}
