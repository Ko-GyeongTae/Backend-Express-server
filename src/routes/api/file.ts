import express from 'express';

const router = express.Router();

router.post('/upload', async (req, res) => {
    res.send('file upload');
});

router.post('/file/:fid', async(req, res) => {
    res.send('file: ' + req.params.fid);
})

export default router;