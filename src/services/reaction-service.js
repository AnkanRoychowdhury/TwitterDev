import { ReactionRepository, TweetRepository } from "../repository/index.js";
import AppError from "../utils/error-handler.js";

export default class ReactionService {
    constructor(){
        this.reactionRepository = new ReactionRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleReaction(modelId, modelType, userId){
        if(modelType == 'Tweet'){
            var reactable = await this.tweetRepository.find(modelId);
        } 
        else if(modelType == 'Comment'){
            //todo
        }
        else {
            throw {error: "Error in toggle"};
        }
        const exists = await this.reactionRepository.findByUserReactable({
            user: userId,
            onModel: modelType,
            reactable: modelId
        });
        if(exists){
            reactable.reacts.pull(exists.id);
            await reactable.save();
            await exists.deleteOne();
            var isAdded = false;
        }
        else {
            const newReact = await this.reactionRepository.create({
                user: userId,
                onModel: modelType,
                reactable: modelId
            });
            reactable.reacts.push(newReact);
            await reactable.save();

            var isAdded = true;
        }
        return isAdded;
    }
}