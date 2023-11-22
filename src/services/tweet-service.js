const HashtagRepository = require("../repository/hashtag-repository");
const TweetRepository = require("../repository/tweet-repository");


class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async createTweet(data){
        const tags = this.#generateTags(data.content);
        const tweet = await this.tweetRepository.createTweet(data);
        let alreadyPresentTags = await this.hashtagRepository.findTagByName(tags);
        let titleOfPresentTags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]}
        });
        await this.hashtagRepository.bulkCreateHashtag(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        });
        return tweet;
    }

    #generateTags(content){
        try {
            let tags = content.match(/#[a-zA-Z0-9_]+/g);
            tags = tags.map((tag) => tag.substring(1));
            return tags;
        } catch (error) {
            console.log('Unable to generate tags');
        }
    }
}

module.exports = TweetService;