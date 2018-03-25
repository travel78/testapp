const express = require('express');
const path = require('path');
const twitterController = require('./controller/twitter.controller');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

twitterController(app);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});


