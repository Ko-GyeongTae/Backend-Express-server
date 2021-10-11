import express from 'express';

const router = express.Router();

router.get('/:pid', async (req, res) => {
    res.send('post router');
});

router.post('/', async (req, res) => {
    res.send('create');
});

router.put('/:pid', async (req, res) => {
    res.send('update');
});

router.delete('/:pid', async (req, res) => {
    res.send('delete');
});

router.get('/list', async (req, res) => {
    res.send('list')
});

export default router;