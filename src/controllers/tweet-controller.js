import TweetService from "../services/tweet-service.js";
import { StatusCodes } from 'http-status-codes'
import upload from "../config/file-upload-s3-config.js";

const singleUploader = upload.single('image');

const tweetService = new TweetService();

export const createTweet = async(req,res) => {
    try {
        singleUploader(req,res, async function (err, data) {
            if(err) {
                return res.status(500).json({
                    error: err
                });
            }
            const payload = {... req.body};
            payload.image = req.file.location;
            const response = await tweetService.createTweet(payload);
            return res.status(StatusCodes.CREATED).json({
                data: response,
                success: true,
                message: 'Successfully created the tweet',
                err: {}
            });
        })
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