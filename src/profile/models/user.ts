import mongoose, {Schema} from 'mongoose';

export interface IUser extends mongoose.Document{
    username: string;
    email: string;
    password: string;
    birthDate: string;
    firstName: string;
    lastName: string;
}

export default mongoose.model<IUser>('User', new Schema<any>({
    username: {type: String, index: true, unique: true, required: true},
    password: {type: String, index: true, required: true},
    email: {type: String, unique: true, index: true, required: true},
    birthDate: {type: Date, index: true, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String},
    address: {}
}));
