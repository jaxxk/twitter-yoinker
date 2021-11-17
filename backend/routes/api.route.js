const router = require('express').Router();
const Twitter = require('twitter');
 
const client = new Twitter({
  consumer_key:process.env.TWITTER_CONSUMER_API_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_API_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET
});

router.get('/trends', async (req, res, next) => {
  const id = req.query.woeid;
  const trends = await client.get('trends/place.json', {
    id,
  })
  res.send(trends);
});

module.exports = router;
