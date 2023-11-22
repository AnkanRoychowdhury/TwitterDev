const express = require('express');
const { PORT } = require('./config/serverConfig');
const DBConnect = require('./config/dbConfig');


const setupAndStartServer = async () => {

    const app = express();

    app.listen(PORT, async () => {
        console.log(`SERVER RUNNING ON PORT: ${PORT}`);
        await DBConnect();
    });
}

setupAndStartServer();