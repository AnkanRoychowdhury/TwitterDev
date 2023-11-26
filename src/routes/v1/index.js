import express from 'express';
import { createTweet, getTweet } from '../../controllers/tweet-controller.js';
import { toggleReact } from '../../controllers/reaction-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { signIn, signUp } from '../../controllers/user-controller.js';
import { validateUserAuth } from '../../middlewares/auth-request-validator.js';
import { authenticate } from '../../middlewares/authenticate.js';

const router = express.Router();

router.post('/tweets', authenticate, createTweet);
router.get('/tweets/:id', getTweet)

router.post('/signup', signUp);
router.post('/signin', validateUserAuth, signIn);

router.post('/reactions/toggle', authenticate, toggleReact);
router.post('/comments', authenticate, createComment);

export default router;