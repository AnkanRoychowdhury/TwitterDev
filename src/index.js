import express from 'express';
import { PORT } from './config/serverConfig.js';
import { DBConnect } from './config/dbConfig.js';
import TweetService from './services/tweet-service.js';

const setupAndStartServer = async () => {

    const app = express();

    app.listen(PORT, async () => {
        console.log(`SERVER RUNNING ON PORT: ${PORT}`);
        await DBConnect();
    });
}

setupAndStartServer();