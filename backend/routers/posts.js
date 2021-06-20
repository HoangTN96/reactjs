import express from 'express';
import {GetPosts} from '../controllers/posts.js';

const router = express.Router();

router.get('/',GetPosts);

export default router;