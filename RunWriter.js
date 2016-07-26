var jsonfile = require('jsonfile'); 
var Run = require('./Model/RunSchema')
/*
module.exports = {
    WriteRun: function(runs){
        //write to the database
        var obj = new Run ();
        obj.session_id = runs[0].session_id;
        for(var i = 0; i < runs.length; i = i+2){
            switch (i){
                case 0:
                    obj.run_0.run_id = runs[i].data.run_id;     
                    obj.run_0.start_client_time = runs[i].data.client_time;      
                    obj.run_0.end_client_time = runs[i+1].data.client_time;       
                    obj.run_0.start_current_time =
                    runs[i].data.details.current_time;     
                    obj.run_0.end_current_time =
                    runs[i+1].data.details.current_time         
                    obj.run_0.action_count =
                    runs[i+1].data.action_count;   
                    obj.run_0.map = runs[i].data.details.map; 
                    obj.run_0.give_recommendation =
                    runs[i].data.details.give_recommendation;
                    obj.run_0.with_justification =
                    runs[i].data.details.with_justification;    
                    obj.run_0.budget = 
                    runs[i+1].data.details.budget;    
                    obj.run_0.welfare = 
                    runs[i+1].data.details.welfare;   
                    obj.run_0.dock_utilization = 
                    runs[i+1].data.details.dock_utilization;    
                    break;
                case 2:
                    obj.run_1.run_id = runs[i].data.run_id;     
                    obj.run_1.start_client_time = runs[i].data.client_time;      
                    obj.run_1.end_client_time = runs[i+1].data.client_time;       
                    obj.run_1.start_current_time =
                    runs[i].data.details.current_time;     
                    obj.run_1.end_current_time =
                    runs[i+1].data.details.current_time         
                    obj.run_1.action_count =
                    runs[i+1].data.action_count;   
                    obj.run_1.map = runs[i].data.details.map; 
                    obj.run_1.give_recommendation =
                    runs[i].data.details.give_recommendation;
                    obj.run_1.with_justification =
                    runs[i].data.details.with_justification;    
                    obj.run_1.budget = 
                    runs[i+1].data.details.budget;    
                    obj.run_1.welfare = 
                    runs[i+1].data.details.welfare;   
                    obj.run_1.dock_utilization = 
                    runs[i+1].data.details.dock_utilization;    
                    break;  
                case 4:
                    obj.run_2.run_id = runs[i].data.run_id;     
                    obj.run_2.start_client_time = runs[i].data.client_time;      
                    obj.run_2.end_client_time = runs[i+1].data.client_time;       
                    obj.run_2.start_current_time =
                    runs[i].data.details.current_time;     
                    obj.run_2.end_current_time =
                    runs[i+1].data.details.current_time         
                    obj.run_2.action_count =
                    runs[i+1].data.action_count;   
                    obj.run_2.map = runs[i].data.details.map; 
                    obj.run_2.give_recommendation =
                    runs[i].data.details.give_recommendation;
                    obj.run_2.with_justification =
                    runs[i].data.details.with_justification;    
                    obj.run_2.budget = 
                    runs[i+1].data.details.budget;    
                    obj.run_2.welfare = 
                    runs[i+1].data.details.welfare;  
                    obj.run_2.dock_utilization = 
                    runs[i+1].data.details.dock_utilization;    
                    break;
                case 6:
                    obj.run_3.run_id = runs[i].data.run_id;     
                    obj.run_3.start_client_time = runs[i].data.client_time;      
                    obj.run_3.end_client_time = runs[i+1].data.client_time;       
                    obj.run_3.start_current_time =
                    runs[i].data.details.current_time;     
                    obj.run_3.end_current_time =
                    runs[i+1].data.details.current_time         
                    obj.run_3.action_count =
                    runs[i+1].data.action_count;   
                    obj.run_3.map = runs[i].data.details.map; 
                    obj.run_3.give_recommendation =
                    runs[i].data.details.give_recommendation;
                    obj.run_3.with_justification =
                    runs[i].data.details.with_justification;    
                    obj.run_3.budget = 
                    runs[i+1].data.details.budget;    
                    obj.run_3.welfare = 
                    runs[i+1].data.details.welfare;   
                    obj.run_3.dock_utilization = 
                    runs[i+1].data.details.dock_utilization;    
                    break;
            }             
        }
        
        //save to the database
        obj.save(function(err){
            if (err) throw err;
            
            console.log("new Run has been created");
        });
    }
}

*/
module.exports = {
    WriteRun: function(runs){
        for(var i =0; i< runs.length; i++){
            var obj = new Run();
            obj.session_id = runs[i].data.session_id;
            obj.run_id = runs[i].data.run_id;
            obj.run_seqno = runs[i].data.run_seqno;
            obj.client_time = Date(runs[i].data.client_time);
            obj.details = runs[i].data.details;
            
            
            obj.save(function(err){
                if (err) throw err;

                console.log("new Run has been created");
            });
        }
    }
}

