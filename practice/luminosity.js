var num = [0.2126, 0.7152, 0.0722];
var lum = 0;
for(var i = 2; i < process.argv.length; i++){
    lum += num[i-2] * Number(process.argv[i]);
    
    
}
console.log(lum)