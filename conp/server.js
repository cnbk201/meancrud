var name = "test";
var home = "asdf";
//
var fun = require('./fun.js')(name);
//
var fun2 = require('./fun2.js');
//
var fun3 = require('./fun3.js');

//
fun2.sayHelloInEnglish();
fun2.sayHelloInSpanish();
//
fun3.sayHelloInEnglish();
fun3.sayHelloInSpanish();
