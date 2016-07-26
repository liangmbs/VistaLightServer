var jsonfile = require('jsonfile'); 
var Action = require('./Model/ActionSchema');

module.exports = {
    
    WriteAction: function(actions){
        for(var i = 0; i< actions.length; i++){
            var obj = new Action();

            obj.run_id = actions[i].data.run_id;
            obj.action_seqno = actions[i].data.action_seqno;
            obj.type = actions[i].data.type;
            obj.client_time = Date(actions[i].data.client_time);
            obj.details = actions[i].data.details;
            
            obj.save(function(err){
            if (err) throw err;
            
            console.log("new action has been created");
            });
        }
    }
}

