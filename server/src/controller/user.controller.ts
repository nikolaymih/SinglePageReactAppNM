import { Request, Response } from 'express';
import { userCreateInfoService, userGetInfoService } from '../service/user.service';

export const userCreateInfoHandler = async (req: Request, res: Response) => {
    const userInput = req.body;
    const userName: string = req.path.substring(1).split('.')[0];

    const userCreated = await userCreateInfoService({...userInput, name: userName });

    return res.status(201).send(userCreated); 
}

export const userGetInfoHandler = async (req: Request, res: Response) => {
    const userName: string = req.path.substring(1).split('.')[0];

    const userInfo = await userGetInfoService({name: userName});

    res.status(200).send([userInfo]);
}