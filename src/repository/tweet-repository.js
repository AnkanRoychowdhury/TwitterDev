import { Tweet } from "../models/index.js";
import CrudRepository from "./crud-repository.js";

export default class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }

    async createTweet(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getTweets(offset, limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getTweetWithComments(tweetId){
        try {
            const tweet = await Tweet.findById(tweetId).populate({path: 'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}