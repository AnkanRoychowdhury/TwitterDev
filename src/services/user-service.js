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

    async signIn (email,plainPassword) {
        try {
            /**
             * Step 1 => Fetch the user using email
             * Step 2 => Compare incoming plain password with stores encrypted password
             */
            const user = await this.userRepository.getUserByEmail(email);
            const matchPassword = this.#checkPassword(plainPassword,user.password);
            if(!matchPassword){
                throw new AppError(
                    'EmailNotFound',
                    'Please check your email & password',
                    "User doesn't exist with the given email & password",
                    StatusCodes.NOT_FOUND
                );
            }
        } catch (error) {
            if(error.name == 'EmailNotFound'){
                throw error;
            }
            throw error;
        }
    }

    #checkPassword (userInputPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(userInputPassword, encryptedPassword);
        } catch (error) {
            throw error;
        }
    }

    async isAdmin(userId){
        try {
            const response = await this.userRepository.isAdmin(userId);
            if(!response){
                throw new AppError(
                    "AuthorizationIssue",
                    "Not Authorized",
                    "User is not authorized as Admin",
                    StatusCodes.UNAUTHORIZED
                );
            }
            return response;
        } catch (error) {
            throw error;
        }
    }

}