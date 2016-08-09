var jsonfile = require('jsonfile'); 

var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});


var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Action";


module.exports = {
    
    WriteAction: function(actions){
        for(var i = 0; i< actions.length; i++){
            var params = {
                    TableName: table,
                    Item:{
                        "run_id": actions[i].data.run_id,
                        "action_seqno" : actions[i].data.action_seqno,
                        "type" : actions[i].data.type,
                        "client_time" : Date(actions[i].data.client_time),
                        "details": actions[i].data.details
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
}

