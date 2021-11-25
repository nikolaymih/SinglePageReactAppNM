export interface IUser {
    _id: string,
    name: string,
    image: string,
    userText: string,
    userNumber: number
}

export interface IUserArray extends Array<IUser> { }