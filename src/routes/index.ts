import express from 'express';
import apiRouter from './api';

const router = express.Router();

router.use('/v1', apiRouter);

export default router;