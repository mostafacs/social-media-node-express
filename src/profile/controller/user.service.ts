import User, {IUser} from '../models/user'
import user from "../models/user";

export default class UserService {

    static async createNewUser(form: IUser) {

        const alreadyExists = await User.findOne({email: form.email});
        if (alreadyExists) {
            throw new Error('User with email ('+ form.email +') already exists.');
        }

        const newUser = new User(form);
        await newUser.save();
    }
}