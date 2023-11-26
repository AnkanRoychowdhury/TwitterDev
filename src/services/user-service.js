import bcrypt from 'bcrypt';
import { UserRepository } from '../repository/index.js';
import { StatusCodes } from 'http-status-codes';
import AppError from '../utils/error-handler.js';

export default class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signUp (data) {
        try {
            const user = await this.userRepository.createUser(data);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async signIn (email,userInputPassword) {
        try {
            const user = await this.getUserByEmail(email);
            if(!user){
                throw new AppError(
                    'UserNotFound',
                    'No user found',
                    "User doesn't exist with the given email & password",
                    StatusCodes.UNAUTHORIZED
                );
            }
            const matchPassword = user.comparePassword(userInputPassword);
            if(!matchPassword){
                throw new AppError(
                    'EmailNotFound',
                    'Wrong Password',
                    "Please check your email & password",
                    StatusCodes.UNAUTHORIZED
                );
            }
            const token = user.generateJWT();
            return token;
        } catch (error) {
            if(error.name == 'EmailNotFound'){
                throw error;
            }
            throw error;
        }
    }

    async getUserByEmail(email){
        try {
            const user = await this.userRepository.find({email});
            return user;
        } catch (error) {
            throw error;
        }
    }

}