// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// config files
var db = require('../../config/db');


// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
mongoose.connect(db.url); 

// define our nerd model
// module.exports allows us to pass this to other files when it is called

module.exports = mongoose.model('Nerd', {
    name : {type : String, default: ''}
});

// module.exports = mongoose.model('Nerd2', {
//     name : {type : String, default: ''}
// });