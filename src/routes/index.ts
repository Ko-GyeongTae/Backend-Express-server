import express from 'express';
import postRouter from './post';
import authRouter from './auth';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/post', postRouter);