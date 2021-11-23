import mongoose from 'mongoose';
import { IUserInfo } from '../interfaces/user.interface';

const userSchema = new mongoose.Schema<IUserInfo>({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
})

export default mongoose.model<IUserInfo>('userSchema', userSchema);