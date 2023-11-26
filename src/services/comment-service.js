import { CommentRepository, TweetRepository } from "../repository/index.js";

export default class CommentService {
    constructor(){
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async createComment(modelId,modelType,userId,content){
        try {
            if(modelType == 'Tweet'){
                var commentAble = await this.tweetRepository.get(modelId);
            } 
            else if(modelType == 'Comment'){
                var commentAble = await this.commentRepository.get(modelId);
            }
            else {
                throw {error: "Error in toggle"};
            }
            const comment = await this.commentRepository.create({
                content: content,
                userId: userId,
                onModel: modelType,
                commentedOn: modelId,
                comments: []
            });
            commentAble.comments.push(comment);
            await commentAble.save();
            return comment;
        } catch (error) {
            throw error;
        }
    }
}