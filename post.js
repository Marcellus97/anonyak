const express = require('express');
const { send } = require('node:process');
const router = express.Router();

router.get('/posts', (req, res) => {
    res.send('post posts');
});

router.get('/post', (req, res) => {
    res.send('post post');
});

router.get('/users', (req, res) => {
    res.send('post users');   
});

router.get('/user', (req, res) => {
    res.send('post user');   
});

router.get('/banner', (req, res) => {
    res.send('post banner');   
});

router.get('/pinnned', (req, res) => {
    res.send('post pinned');   
});