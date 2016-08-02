var express     = require('express');
var bodyRarser  = require('body-parser');

var app = express();

app.use(express.static(__dirname +'/public'))

app.get('/', function(req, res){
    res.sendFile('index.html',{root: './public/html'})
})

app.post('/creatuser', function(req, res){
    
})

app.listen(process.env.PORT || 3000, function(){
    console.log('Server up and running!')
})