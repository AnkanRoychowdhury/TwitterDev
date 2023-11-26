import express from 'express';
import passport from 'passport';
import { PORT } from './config/serverConfig.js';
import { DBConnect } from './config/dbConfig.js';
import apiRoutes from './routes/index.js'
import bodyParser from 'body-parser';
import { passportAuth } from './middlewares/jwt-middleware.js';

const setupAndStartServer = async () => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use(passport.initialize());
    passportAuth(passport);
    
    app.use('/api',apiRoutes);

    app.listen(PORT, async () => {
        console.log(`SERVER RUNNING ON PORT: ${PORT}`);
        await DBConnect();
    });
}

setupAndStartServer();