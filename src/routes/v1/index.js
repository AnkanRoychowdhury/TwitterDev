import express from 'express';
import { createTweet, getTweet } from '../../controllers/tweet-controller.js';
import { toggleReact } from '../../controllers/reaction-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { signUp } from '../../controllers/user-controller.js';

const router = express.Router();

router.post('/tweets', createTweet);
router.get('/tweets/:id', getTweet)

router.post('/signup', signUp);

router.post('/reactions/toggle', toggleReact);
router.post('/comments', createComment);

export default router;