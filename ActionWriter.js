var jsonfile = require('jsonfile');

module.exports = {
    WriteAction : function(file , actions){
        var obj = [];
        
        for(var action in actions){
            
            obj.push({action.data.run_id,
            action.data.action_type
            action.data.client_time
            details: action.data.details});
        }
        
        
        
        jsonfile.writeFile(file, obj, {space : 2}, function(err){
          console.error(err)  
        })
    }, 

}