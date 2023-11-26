import { Comment } from "../models/index.js";
import CrudRepository from "./crud-repository.js";

export default class CommentRepository extends CrudRepository {
    constructor(){
        super(Comment);
    }
}