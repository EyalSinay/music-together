const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    continentName: { type: String },
    englishCountryName: { type: String },
    englishBody: [{ type: String }],
    hebrewCountryName: { type: String },
    hebrewBody: [{ type: String }],
    arabicCountryName: { type: String },
    arabicBody: [{ type: String }],
    songsList: [
        {
            songName: { String, default: "" },
            songArtist: { type: String, default: "" },
            songPath: { type: String, default: "" },
            imgPath: String,
            like: Number,
            dislike: Number,
        }
    ]
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;