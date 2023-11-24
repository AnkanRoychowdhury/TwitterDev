import AppError from "../utils/error-handler.js";
import { StatusCodes } from "http-status-codes";


export default class CrudRepository {
    constructor(model){
        this.model = model;
    }

    async create (data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log(error);
            throw new AppError(
                'RepositoryError',
                'Unable to create',
                'Unable to create please try later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async update (id,data) {
        try {
            const result = await this.model.findByIdAndUpdate(id,data, {new : true});
            return result;
        } catch (error) {
            console.log(error);
            throw new AppError(
                'RepositoryError',
                'Unable to update',
                'Unable to update please try later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async destroy (id) {
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log(error);
            throw new AppError(
                'RepositoryError',
                'Unable to delete',
                'Unable to delete please try later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async get (id) {
        try {
            const result = await this.model.findById(id);
            if(result == null){
                throw new AppError(
                    'ItemNotFoundError',
                    'Given Id not associated to any item',
                    'Issue found to fetch data',
                    StatusCodes.NOT_FOUND
                );
            }
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getAll () {
        try {
            const result = await this.model.find({});
            return result;
        } catch (error) {
            console.log(error);
            throw new AppError(
                'RepositoryError',
                'Unable to get all the details',
                'Unable to get please try later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

