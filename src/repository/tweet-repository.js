const Tweet = require('../models/tweet');

class TweetRepository {

    async createTweet(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getTweet(tweetId){
        try {
            const tweet = await Tweet.findById(tweetId);
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

    async updateTweet(tweetId, data){
        try {
            const tweet = await Tweet.findByIdAndUpdate(tweetId, data, {new: true});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteTweet(tweetId){
        try {
            const response = await Tweet.findByIdAndRemove(tweetId);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository;