const Twitter = require('twitter');
const twitterService = require('../service/twitter.service');

const _oauth = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY || '',
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || ''
};
const tRequest = new Twitter(_oauth);

const timeline = (req, res) => {
    tRequest.get('https://api.twitter.com/1.1/statuses/user_timeline.json', {
        screen_name: req.query.name,
        count: 10,
        page: 1
    }, (error, tweets, response) => {
        res.send(twitterService.convertData(tweets));
    });
};

module.exports = (app) => {
    app.get('/api/timeline', (req, res) => {
        res.set('Content-Type', 'application/json');
        timeline(req, res);
    });
};