import TweetService from "../services/tweet-service.js";
import { StatusCodes } from 'http-status-codes'

const tweetService = new TweetService();

export const createTweet = async(req,res) => {
    try {
        const response = await tweetService.createTweet(req.body);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully created the tweet',
            err: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Unable to create tweet',
            err: error
        });
    }
}

export const getTweet = async(req,res) => {
    try {
        const response = await tweetService.getTweet(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched the tweet',
            err: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Unable to fetch tweet',
            err: error
        });
    }
}