const mongoose = require("mongoose");

const URI = process.env.CONNECTION_URI;
const DB_NAME = process.env.DB_NAME;

const DBConnect = async () => {
    try {
        const connection = await mongoose.connect(`${URI}${DB_NAME}`);
        if(connection.STATES.connected){
            console.log('Database Connected Successfully');
        }
    } catch (error) {
        throw {error};
    }
}

module.exports = DBConnect;