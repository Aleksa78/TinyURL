const express = require('express');
const router = express.Router();

const {Url} = require('../models/url');

router.get('/:url', async (req, res) => {
  
    const url = await Url.findOne({ code: req.params.url });

    if (url)  res.redirect(url.longUrl);
    else
      return res.status(404).send('No url found');
    
 
  
});

module.exports = router;