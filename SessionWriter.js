var AWS = require("aws-sdk");


AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
    WriteSession : function(session_begin, session_end){
        
        var table = "Session";
        var params = {
            TableName: table,
            Item:{
                    session_id : session_begin.data.session_id,  
                    player_id : session_begin.data.player_id, 
                    game_id : session_begin.data.game_id, 
                    client_start_time : Date(session_begin.data.client_time), 
                    client_end_time : Date(session_end.data.client_time),
                    run_counter : session_end.data.run_count,
                    version : session_begin.data.version,  
                    condition : session_begin.data.condition, 
                    details : { 
                        bg : session_begin.data.details.bg
                    }
                }
            };
        
        console.log("Adding a new item...");
        docClient.put(params, function(err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("Added item:", JSON.stringify(data, null, 2));
            }
        });    
    } 
}