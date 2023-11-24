import { Reaction } from "../models/index.js";
import CrudRepository from "./crud-repository";

export default class ReactionRepository extends CrudRepository {
    constructor(){
        super(Reaction);
    }
}