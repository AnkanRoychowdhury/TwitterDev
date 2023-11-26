
import { StatusCodes } from 'http-status-codes';

export const validateUserAuth = (req,res,next) => {
    if(!req.body.email || !req.body.password){
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: 'Please Check your email & password',
            err: 'Email or password missing in the request'
        })
    }
    next();
}