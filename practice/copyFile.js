var fs = require('fs');

var originalFile = process.argv[2];
var newFile      = process.argv[3];

fs.readFile(originalFile, function(err,
    data){
    //console.log(err,data)
    fs.writeFile(newFile, data, function(
        err,data){
            console.log(err,data)
        });
});

