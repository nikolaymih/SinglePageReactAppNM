import { Application, Request, Response } from 'express';
import { userCreateInfoHandler, userGetInfoHandler} from './controller/user.controller';

export default (app: Application): void => {
    app.get('/', (req: Request, res: Response) => {
        return res.send('okay');
    }); 

    app.post('/apple.com', userCreateInfoHandler);

    app.get('/apple.com', userGetInfoHandler);

    app.post('/google.com', userCreateInfoHandler);

    app.get('/google.com', userGetInfoHandler);
}
