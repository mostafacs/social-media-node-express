import User, {IUser} from '../models/user'
import * as jwt from 'jsonwebtoken'
import * as crypto from 'crypto';
import {Config} from "../../utils/config";

export default class UserService {

    static async createNewUser(form: IUser) {
        const alreadyExists = await User.findOne({email: form.email});
        if (alreadyExists) {
            throw new Error('User with email ('+ form.email +') already exists.');
        }
        const newUser = new User(form);
        newUser.password = crypto.createHash('md5').update(form.password).digest('hex');
        await newUser.save();
    }

    static async login(email: string, password: string) {
        const passwordEncoded = crypto.createHash('md5').update(password).digest('hex');
        const user = await User.findOne({email, password: passwordEncoded});
        if(!user) {
            throw new Error('Invalid email or password');
        }
        return jwt.sign({id: user._id, email: user.email}, Config.secret, {algorithm: 'HS256', expiresIn: '1h'});
    }

}