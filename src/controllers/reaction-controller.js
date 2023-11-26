import ReactionService from "../services/reaction-service.js";
import { StatusCodes } from 'http-status-codes';

const reactionService = new ReactionService();

export const toggleReact = async(req,res) => {
    try {
        const response = await reactionService.toggleReaction(req.query.modelId,req.query.modelType,req.body.userId);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: 'Liked',
            err: {}
        });
    } catch (error) {
        res.status(error.statusCode).json({
            data: {},
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}