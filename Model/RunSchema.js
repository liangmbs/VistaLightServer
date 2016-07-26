var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

/*
var runSchema = new Schema({
            session_id: String,
            run_0: {
                run_id: String,
                start_client_time: Date,
                end_client_time: Date,
                start_current_time: Date,
                end_current_time: Date,
                action_count: Number,
                map : String,
                give_recommendation: Boolean,
                with_justification: Boolean,
                budget: Number,
                welfare: Number,
                dock_utilizatiom: Number
            },
            "run_1": {
                run_id: String,
                start_client_time: Date,
                end_client_time: Date,
                start_current_time: Date,
                end_current_time: Date,
                action_count: Number,
                map : String,
                give_recommendation: Boolean,
                with_justification: Boolean,
                budget: Number,
                welfare: Number,
                dock_utilizatiom: Number
            },
            "run_2": {
                run_id: String,
                start_client_time: Date,
                end_client_time: Date,
                start_current_time: Date,
                end_current_time: Date,
                action_count: Number,
                map : String,
                give_recommendation: Boolean,
                with_justification: Boolean,
                budget: Number,
                welfare: Number,
                dock_utilizatiom: Number
            },
            "run_3": {
                run_id: String,
                start_client_time: Date,
                end_client_time: Date,
                start_current_time: Date,
                end_current_time: Date,
                action_count: Number,
                map : String,
                give_recommendation: Boolean,
                with_justification: Boolean,
                budget: Number,
                welfare: Number,
                dock_utilizatiom: Number
            }
});

*/

var runSchema = new Schema({
    session_id: String,
    run_id: String,
    run_seqno: Number,
    client_time: Date,
    details: Schema.Types.Mixed,

    
})
runSchema.plugin(timestamps);


var Run = mongoose.model('Run', runSchema);

module.exports = Run;