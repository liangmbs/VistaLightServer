var AWS = require('aws-sdk');

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
    
    //save session to AWS
    SessionWriter.WriteSession(sessions[0], sessions[1]);
    
    RunWriter.WriteRun(runs);
    
    ActionWriter.WriteAction(actions);
});


