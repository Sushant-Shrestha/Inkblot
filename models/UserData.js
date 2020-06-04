const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    sex: String,
    age: Number,
    career: String,
    webcam: Boolean,
    inkblot: {
        one: String,
        two: String,
        three: String,
        four: String,
        five: String,
        six: String,
        seven: String,
        eight: String,
        nine: String,
        ten: String
    }
});

module.exports = mongoose.model('Data', dataSchema, 'datas');