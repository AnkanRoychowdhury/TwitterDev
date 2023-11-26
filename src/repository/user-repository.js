import { User } from "../models/index.js";
import AppError from "../utils/error-handler.js";
import CrudRepository from "./crud-repository.js";

export default class UserRepository extends CrudRepository {
    constructor(){
        super(User);
    }

    async createUser(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            if(error.name == 'MongoServerError'){
                throw new AppError(
                    'ExistingUserError',
                    'User is already exist',
                    'Provided email already exist please login or signup using other email',
                    StatusCodes.OK
                );
            }
            console.log(error)
        }
    }

    async find(data){
        try {
            const user = await User.findOne(data);
            return user;
        } catch (error) {
            throw error;
        }
    }
}