// A constante pessoa aponta para um endereço de memória -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// Pessoa irá -> 456 -> {...}
//pessoa = { nome: "Ana"}

 Object.freeze(pessoa)

 pessoa.nome = 'Maria'
 pessoa.end = "Rua ABC"
 delete pessoa.nome

 console.log(pessoa.nome)
 console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: "joao" })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)