const express = require('express');
const DataModel = require('../models/UserData.js');
const router = express.Router();

router.get('/all', (req, resp) => {
    DataModel.find({}, (err, data) => {
        if(err) {
            resp.json({ error: "Cannot connect to the server"});
        } else {
            resp.json(data);
        }
    });
});

router.post('/', (req, resp) => {
    const newData = {
        sex: req.body.userData.sex,
        age: req.body.userData.age,
        career: req.body.userData.career,
        webcam: req.body.userData.webcam,
        inkblot: {
            one: req.body.userData.one,
            two: req.body.userData.two,
            three: req.body.userData.three,
            four: req.body.userData.four,
            five: req.body.userData.five,
            six: req.body.userData.six,
            seven: req.body.userData.seven,
            eight: req.body.userData.eight,
            nine: req.body.userData.nine,
            ten: req.body.userData.ten
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