const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    code: String,
    longUrl: String,
    shortUrl: String,
    date: {type: String, default: Date.now}
});

const Url = mongoose.model('Url', urlSchema);

exports.urlSchema = urlSchema;
exports.Url = Url;