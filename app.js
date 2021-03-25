const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(5000);

app.get('/', (req, res) => {
    res.send('get');
});

//get//
//users, uses
// - ip, username
//posts, post
// - text, link, image
//banner
// - image, username
//pinned
// - text, username

//post//
//user
//post
//banner
//pinnned