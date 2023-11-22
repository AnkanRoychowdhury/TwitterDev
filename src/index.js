const express = require('express');
const { PORT } = require('./config/serverConfig');
const DBConnect = require('./config/dbConfig');
const HashtagRepository = require('./repository/hashtag-repository');
const TweetService = require('./services/tweet-service');


const setupAndStartServer = async () => {

    const app = express();

    app.listen(PORT, async () => {
        console.log(`SERVER RUNNING ON PORT: ${PORT}`);
        await DBConnect();
        // const tags = ['Trend', 'Java'];
        // const hashtagRepository = new HashtagRepository();
        // let res = await hashtagRepository.findTagByName(tags);
        // console.log(res)
        // res = res.map(tags => tags.title)
        // console.log(res)
        // const res = await hashtagRepository.bulkCreateHashtag(data);
        // console.log(res);
    });
}

setupAndStartServer();