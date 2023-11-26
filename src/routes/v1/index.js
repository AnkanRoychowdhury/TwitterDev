import express from 'express';
import { createTweet } from '../../controllers/tweet-controller.js';
import { toggleReact } from '../../controllers/reaction-controller.js';
import { createComment } from '../../controllers/comment-controller.js';

const router = express.Router();

router.post('/tweets', createTweet);
router.post('/reactions/toggle', toggleReact);
router.post('/comments', createComment);

export default router;