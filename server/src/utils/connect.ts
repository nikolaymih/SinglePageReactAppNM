import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

const uri = config.get<string>('dbUri');

export default async () => {
    try {
        await mongoose.connect(uri);
        logger.info('Db successfully connected');
    } catch (error) {
        logger.info('Error connecting to db');
    }
}