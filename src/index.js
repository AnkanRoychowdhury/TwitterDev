import express from 'express';
import { PORT } from './config/serverConfig.js';
import { DBConnect } from './config/dbConfig.js';
import apiRoutes from './routes/index.js'
import bodyParser from 'body-parser';

const setupAndStartServer = async () => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.use('/api',apiRoutes);

    app.listen(PORT, async () => {
        console.log(`SERVER RUNNING ON PORT: ${PORT}`);
        await DBConnect();
    });
}

setupAndStartServer();