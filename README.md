# NodeJs ReactJs Heroku simple APP

Here is simple example how to bind node and react and deploy it on heroku automatically via
our github repository.
This App get twitts from twitter api by username and represents them

You can trz it here:
* [Yuriy app](https://rometool..)

## Getting Started

To try it in your local mashine copy and run this line on your terminal window
```
git clone https://github.com/travel78/testapp.git
```
then run
```
npm install
```
in main folder and client folder
and once more important step
go to
```
server/contoller/twitter.controller.js
```
and fill these empty fields below with your credentials
```
    consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY || '',
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || ''
```
So let it start: type client folder run npm build and npm start in main folfer
and go to localhost:5000