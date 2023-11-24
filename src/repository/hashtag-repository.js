import { Hashtag } from "../models/index.js";
import CrudRepository from './crud-repository.js';
export default class HashtagRepository extends CrudRepository {

    constructor(){
        super(Hashtag);
    }
    
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
}