const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    code: String,
    longUrl: String,
    shorturl: String
});

const Url = mongoose.model('Url', urlSchema);
exports.urlSchema = urlSchema;
exports.Url = Url;