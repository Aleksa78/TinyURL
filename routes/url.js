const express = require('express');
const router = express.Router();
const { Url } = require('../models/url');
const validUrl = require('valid-url');
const shortId = require('short-id');
const config = require('config');

router.get('/admin', async (req, res) => {
  
  const longUrl = await (await Url.find().select('longUrl -_id'));
  res.send(longUrl);

});

router.post('/shortUrl', async (req, res)=>{
  console.log(req.body);
    const longUrl = req.body.post;
    
    
    const baseUrl = config.get('baseUrl');

    if(!validUrl.isUri(baseUrl)) return res.status(400).send(" Invalid  base url.");
    const code = shortId.generate();
   
    if (validUrl.isUri(longUrl)) {
      
        try {
          let url = await Url.findOne({ longUrl });
    
          if (url) {
            res.send(url);
          } else {
            const shortUrl = baseUrl + '/' + code;
    
            url = new Url({
              longUrl,
              shortUrl,
              code
            });
    
            await url.save();
    
            res.send(url);
          }
        } catch (err) {
          console.error(err);
          res.status(500).send('Internal server error.');
        }
      } else {
        res.status(400).send('Invalid long url.');
      }

});



module.exports = router;