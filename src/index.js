import express from 'express';
import { PORT } from './config/serverConfig.js';
import { DBConnect } from './config/dbConfig.js';
import apiRoutes from './routes/index.js'
import bodyParser from 'body-parser';
import { UserRepository, TweetRepository } from './repository/index.js';
import ReactionService from './services/reaction-service.js';

const setupAndStartServer = async () => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.use('/api',apiRoutes);

    app.listen(PORT, async () => {
        console.log(`SERVER RUNNING ON PORT: ${PORT}`);
        await DBConnect();
        const userRepo = new UserRepository();
        const tweetRepo = new TweetRepository();
        const tweets = await tweetRepo.getAll(0,10);
        const users = await userRepo.getAll();
        const reactService = new ReactionService();
        await reactService.toggleReaction(tweets[1].id, 'Tweet', users[1].id);
    });
}

setupAndStartServer();