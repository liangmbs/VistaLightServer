var Session = require('./Model/SessionSchema')



module.exports = {
    WriteSession : function(session_begin, session_end){
        //Create new session        
        var obj = new Session({      
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
        });
        
        
        //save new session
        obj.save(function(err){
            if (err) throw err;
                             
            console.log('session created');
        })
    } 
}