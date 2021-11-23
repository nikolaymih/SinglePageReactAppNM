import User from '../model/user.model';
import { FilterQuery } from 'mongoose';
import { IUserInfo } from '../interfaces/user.interface';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        min: 4,
        max: 8
    },
    wordsPerSentence: {
        min: 4,
        max: 16
    }
})

export const userCreateInfoService = async (userInput: IUserInfo) => {
    return User.create(userInput);
}

export const userGetInfoService = async (query: FilterQuery<IUserInfo>) => {
    let userInfo = await User.find(query).lean();

    const userText = lorem.generateSentences(5);
    const userNumber = Math.floor(Math.random() * (750 - 555 + 1) + 555);

    let userAllInformation = {
        ...userInfo[0],
        userText,
        userNumber
    };

    return userAllInformation;
}