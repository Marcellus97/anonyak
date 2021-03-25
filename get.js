const express = require('express');
const { send } = require('node:process');
const router = express.Router();

router.get('/posts', (req, res) => {
    res.send('posts');
});

router.get('/post', (req, res) => {
    res.send('post');
});

router.get('/users', (req, res) => {
    res.send('users');   
});

router.get('/user', (req, res) => {
    res.send('user');   
});

router.get('/banner', (req, res) => {
    res.send('banner');   
});

router.get('/pinnned', (req, res) => {
    res.send('pinned');   
});