var mongoose = require('mongoose');
var db = mongoose.connection;

var http = require('http');


var path = require('path');
var file = path.join(__dirname, '/h9.json');


var Parser = require("./Parser.js");
var SessionWriter = require("./SessionWriter.js");
var RunWriter = require("./RunWriter.js");
var ActionWriter = require("./ActionWriter.js");

var sessions = [];
var runs = [];
var actions = [];

Parser.parsing(file, function(obj){
    console.log("starting for loop");
    for(var i = 0; i < obj.length; i++){
            switch (obj[i].type){
                case "session_begin":
                    sessions.push(obj[i])
                    break;
                case "session_end":
                    sessions.push(obj[i])
                    break;
                case "run_begin":
                    runs.push(obj[i])
                    break;
                case "run_end":
                    runs.push(obj[i])
                    break;
                case "action":
                    actions.push(obj[i])
                    break;                 
            }
    }
    
    //save session to mongoDB
    SessionWriter.WriteSession(sessions[0], sessions[1]);
    
    RunWriter.WriteRun(runs);
    
    ActionWriter.WriteAction(actions);
});

//create a server
http.createServer(function (req, res) {  
  pages.index(req, res);
}).listen(8888, '127.0.0.1');


// mongodb connection

var dbURI = 'mongodb://localhost/ConnectionTest'; 
mongoose.connect(dbURI); 
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 

