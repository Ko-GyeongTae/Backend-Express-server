import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
    res.send('auth router');
});

router.post('/login', async (req, res) => {
    res.send('login');
});

router.post('/signup', async (req, res) => {
    res.send('signup');
});

router.get('/logout', async (req, res) => {
    res.send('logout');
});

router.put('/token', async (req, res) => {
    res.send('refresh token');
})

export default router;