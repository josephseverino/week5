//console.log('HELLO WORLD')



// var num = 0;
// for(var i = 2; i < process.argv.length; i++){
//     num += Number(process.argv[i])
// }

// console.log(num)

// var fs = require('fs');

// var file = process.argv[2];


// var countLines = fs.readFileSync(file);

// console.log(countLines.toString().split('\n').length-1)

var fs = require('fs');

var file = process.argv[2];


fs.readFile(file, function(
    err,data){
        var countLines = fs.readFileSync(file);

        console.log(countLines.toString().split('\n').length-1)
    });

