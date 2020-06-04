const express = require('express');
const DataModel = require('../models/UserData.js');
const router = express.Router();

// router.get('/', (req, resp) => {
//     DataModel.find({}, (err, data) => {
//         if(err) {
//             resp.json({ error: "Cannot connect to the server"});
//         } else {
//             resp.json(data);
//         }
//     });
// });

router.post('/', (req, resp) => {
    const newData = {
        sex: req.body.sex,
        age: req.body.age,
        career: req.body.career,
        webcam: req.body.webcam,
        inkblot: {
            one: req.body.one,
            two: req.body.two,
            three: req.body.three,
            four: req.body.four,
            five: req.body.five,
            six: req.body.six,
            seven: req.body.seven,
            eight: req.body.eight,
            nine: req.body.nine,
            ten: req.body.ten
        }
    }

    DataModel.create(newData, (err, data) => {
        if(err){
            resp.json({ error: 'Unable to connect to the server'});
        } else {
            resp.json({ message: 'Data addded succesfully'});
        }
    })
});

module.exports = router;