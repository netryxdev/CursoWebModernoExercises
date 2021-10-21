//hoisting significar içar, jogar pra cima
//Ocorre ao decalrar a variável com var.
console.log('a =', a)
var a = 2
console.log('a =', a) 

//içamento do hoisting não acontece quandoa variável for declarada com let 
console.log('b =', b)
let b = 2
console.log('b =', b)