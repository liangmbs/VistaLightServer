
var path = require('path');
var SessionDataFile = path.join(__dirname, '/Session.json');
var ActionDataFile = path.join(__dirname, '/Action.json');
var RunDataFile = path.join(__dirname, '/Run.json')
var file = path.join(__dirname, '/h9.json');


var Parser = require("./Parser.js");
var SessionWriter = require("./SessionWriter.js");
var RunWriter = require("./RunWriter.js")

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
    SessionWriter.WriteSession(SessionDataFile, sessions[0], sessions[1]);
    RunWriter.WriteRun(RunDataFile, runs);
    //Writer.WriteActions(actions);
});




    
