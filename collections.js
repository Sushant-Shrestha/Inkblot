var mongoose = require('mongoose');

  mongoose.connection.on('open', function (ref) {
    console.log('Collection List: ');
    //trying to get collection names
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        console.log(names); // [{ name: 'dbname.myCollection' }]
        module.exports.Collection = names;
    });
})