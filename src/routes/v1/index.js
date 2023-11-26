import express from 'express';
import { createTweet } from '../../controllers/tweet-controller.js';
import { toggleReact } from '../../controllers/reaction-controller.js';

const router = express.Router();

router.post('/tweets', createTweet);
router.post('/reactions/toggle', toggleReact);

export default router;