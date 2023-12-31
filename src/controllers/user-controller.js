import UserService from "../services/user-service.js";
import { StatusCodes } from 'http-status-codes';

const userService = new UserService();

export const signUp = async(req,res) => {
    try {
        const response = await userService.signUp({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        return res.status(StatusCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully Signed Up',
            err: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: error.message,
            err: error.explanation
        })
    }
}

export const signIn = async(req,res) => {
    try {
        const response = await userService.signIn(req.body.email,req.body.password);
        return res.status(StatusCodes.OK).json({
            data: response,
            message: 'Successfully Logged In',
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            message: error.message,
            success: false,
            err: error.explanation
        });
    }
}