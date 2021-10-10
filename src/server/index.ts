import express from 'express';
import { Express } from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import fs from 'fs';
import path from 'path';

export const server = express();

export const init = async (server: Express) => {
    const router = express.Router();

    await dotenv.config();
    console.log('dotenv configuration');

    // save detail log as file
    server.use(logger('combined', {
        stream: fs.createWriteStream(path.join(__dirname, '../../logs/access.log'), { flags: 'a' })
    }));

    // stream logs in cli
    server.use(logger('dev'));

    server.use('/api/v1', router);

    router.get("/", (req, res, next) => {
        res.send("Hello");
    })
}