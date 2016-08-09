var jsonfile = require('jsonfile'); 
var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Run";

module.exports = {
    WriteRun: function(runs){
        for(var i =0; i< runs.length; i++){
            
            
            var params = {
                    TableName: table,
                    Item:{
                        "session_id": runs[i].data.session_id,
                        "run_seqno" : runs[i].data.run_seqno,
                        "client_time" : Date(runs[i].data.client_time),
                        "details": runs[i].data.details
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

