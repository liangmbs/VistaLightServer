var jsonfile = require('jsonfile');



module.exports = { 
    parsing : function (file, callback){
        jsonfile.readFile(file, function(err, obj) {
            callback && callback(obj)

        })

    }, 
    
    
};






/*
RunWriter.writeRun(data);

ActionWriter.writeAction(data);
*/