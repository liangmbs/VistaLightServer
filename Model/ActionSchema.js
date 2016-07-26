var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;


var actionSchema = new Schema({
    run_id: String,
    action_seqno: Number,
    type: Number,
    client_time: Date,
    details: Schema.Types.Mixed,

});


actionSchema.plugin(timestamps);


var Action = mongoose.model('Action', actionSchema);

module.exports = Action;