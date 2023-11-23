import mongoose from 'mongoose'

const URI = process.env.CONNECTION_URI;
const DB_NAME = process.env.DB_NAME;

export const DBConnect = async () => {
    try {
        const connection = await mongoose.connect(`${URI}${DB_NAME}`);
        if(connection.STATES.connected){
            console.log('Database Connected Successfully');
        }
    } catch (error) {
        throw {error};
    }
}