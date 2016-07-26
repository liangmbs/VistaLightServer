var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;

var sessionSchema = mongoose.Schema;


var sessionSchema = new Schema({
        session_id : {type: String, unique: true},
        player_id: String,
        game_id: String,
        client_start_time: Date,
        client_end_time: Date,
        run_counter: Number,
        version: Number,
        condition: String,
        details: { bg: String },
}); 

sessionSchema.plugin(timestamps);

var Session = mongoose.model('session', sessionSchema);

module.exports = Session;