import { Reaction } from "../models/index.js";
import CrudRepository from "./crud-repository.js";

export default class ReactionRepository extends CrudRepository {
    constructor(){
        super(Reaction);
    }

    async findByUserReactable(data){
        try {
            const react = await Reaction.findOne(data);
            return react;
        } catch (error) {
            throw error;
        }
    }
}