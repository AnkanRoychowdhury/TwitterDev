import { User } from "../models/index.js";
import CrudRepository from "./crud-repository.js";

export default class UserRepository extends CrudRepository {
    constructor(){
        super(User);
    }
}