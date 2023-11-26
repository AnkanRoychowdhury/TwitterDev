import mongoose from 'mongoose';
import { SALT, SECRET_KEY } from '../config/serverConfig.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true});

userSchema.pre('save', function(next) {
    const user = this;
    const encryptedPassword = bcrypt.hashSync(user.password,SALT);
    user.password = encryptedPassword;
    next();
});

userSchema.methods.comparePassword = function compare(password){
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.generateJWT = function generate() {
    return jwt.sign({id: this._id, email: this.email}, SECRET_KEY,{
        expiresIn: '1h'
    });
}

const User = mongoose.model('User', userSchema);

export default User;
