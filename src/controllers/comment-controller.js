import CommentService from "../services/comment-service.js";
import { StatusCodes } from 'http-status-codes'

const commentService = new CommentService();

export const createComment = async(req,res) => {
    try {
        const response = await commentService.createComment(req.query.modelId, req.query.modelType, req.body.userId, req.body.content);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully created the Comment',
            err: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Unable to create comment',
            err: error
        });
    }
}