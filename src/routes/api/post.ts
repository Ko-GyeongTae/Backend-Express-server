import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
    res.send('list');
});

router.get('/:pid', async (req, res) => {
    res.send('post: ' + req.params.pid);
})

router.post('/', async (req, res) => {
    res.send('create');
});

router.put('/:pid', async (req, res) => {
    res.send('update');
});

router.delete('/:pid', async (req, res) => {
    res.send('delete');
});

export default router;