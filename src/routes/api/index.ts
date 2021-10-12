import express from 'express';
import postRouter from './post';
import authRouter from './auth';
import fileRouter from './file';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/post', postRouter);
router.use('/file', fileRouter);

export default router;