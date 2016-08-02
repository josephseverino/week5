var express     = require('express');
var bodyParser   = require('body-parser');
var morgan      = require('morgan');

var app = express();
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(morgan());

app.use(express.static(__dirname +'/public'))

app.get('/', function(req, res){
    console.log('Homepage is rendered');
    res.sendFile('index.html', {root: './public/html'})
})

app.get('/canary', function(req, res){
 
    res.sendFile('canary.html', {root: './public/html'})
})

app.get('/cape', function(req, res){
    
    res.sendFile('cape.html', {root: './public/html'})
})

app.get('/strait', function(req, res){
   
    res.sendFile('strait.html', {root: './public/html'})
})

app.get('/guam', function(req, res){
   
    res.sendFile('guam.html', {root: './public/html'})
})

app.get('/phillipines', function(req, res){
   
    res.sendFile('phillipines.html', {root: './public/html'})
})


app.get( function(req, res){
    console.log(req.query);
    console.log('hello world');
    res.sendFile('default.html', {root: './public/html'})
    
})


app.post('/nextlocation', function(req, res){
    
})

app.listen( process.env.PORT || 3000, function(){
    console.log('Server is running');
})

