import express from 'express';
import { Express } from 'express';
import dotenv from 'dotenv';

export const server = express();

export const init = async (server: Express) => {
    const router = express.Router();

    await dotenv.config();
    console.log('dotenv configuration');

    await server.use('/api/v1', router);
    console.log('use default route: /api/v1');

}