const router = require('express').Router();
const Twitter = require('twitter');
 
const client = new Twitter({
  consumer_key: process.env.CK,
  consumer_secret: process.env.CS,
  access_token_key: process.env.ATK,
  access_token_secret: process.env.ATS
});

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

module.exports = router;
