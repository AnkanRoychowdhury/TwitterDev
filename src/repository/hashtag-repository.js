import { Hashtag } from "../models/index.js";
export default class HashtagRepository {
    
    async bulkCreateHashtag(data){
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async findTagByName(titleList){
        try {
            const hashtags = await Hashtag.find({
                title: titleList
            });
            return hashtags;
        } catch (error) {
            console.log(error);
        }
    }

    async updateHashtag(hashtagId, data){
        try {
            const hashtag = await Hashtag.findByIdAndUpdate(hashtagId, data, {new: true});
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteHashtag(hashtagId){
        try {
            const response = await Hashtag.findByIdAndRemove(hashtagId);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}