var jsonfile = require('jsonfile');

module.exports = {
    WriteSession : function(file , session_begin, session_end){
        var obj = {      
            "session_id" : session_begin.data.session_id,  
            "player_id" : session_begin.data.player_id, 
            "game_id" : session_begin.data.game_id, 
            "client_start_time" : session_begin.data.client_time, 
            "client_end_time" : session_end.data.client_time,
            "run_counter" : session_end.data.run_count,
            "version" : session_begin.data.version,  
            "condition" : session_begin.data.condition, 
            "details" : { 
                "bg" : session_begin.data.details.bg,
            }
        };
        jsonfile.writeFile(file, obj, {space : 2}, function(err){
          console.error(err)  
        })
    }, 

}