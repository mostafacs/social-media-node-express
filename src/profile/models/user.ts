import mongoose, {Schema} from 'mongoose';


module.exports = mongoose.model('User', new Schema<any>({
    username: {type: String, index: true, unique: true, required: true},
    password: {type: String, index: true, required: true},
    email: {type: String, unique: true, index: true, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String},
    address: {}
}));
