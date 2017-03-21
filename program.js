console.log(process.argv);
var fs=require('fs');

var buffer=fs.readFileSync('D:/David Cortes/Documentos/Capacitacion Angular/bower.json')
var r=buffer.toString();
r=r.split('\n');
console.log(process.argv, r);
console.log("Hello.jpg", r);
