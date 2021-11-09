const obj = { a: 1, b: 2, c: 3, soma() { return a+ b + c } } 
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a:1, b: 2, c: 3}"))esses formatos não funcionará pois as chaves precisam estar entre aspas simples ' '. e os objetos em aspas duplas ""

//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) Nesses formatos não funcionará pois as chaves precisam estar entre aspas simples ' '
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3 }')) // Aqui funcionará perfeitamente!
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) // Strings nessecitam estar entre "string" Aspas duplas! Aqui funcionará perfeitamente!

// Utilizar site jsonlint.com para verificaar se tal elemento é mesmo um JSON.
