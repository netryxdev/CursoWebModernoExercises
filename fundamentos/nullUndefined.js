let valor // Aqui será undefined = Nunca foi inicializada (não inicializada)
console.log(valor) 

valor = null // Ausência de valor
console.log(valor) // Lembre-se usar null quando quiser zerar uma variável para não apontar para nada
//console.log(valor.toString())// Isso aqui dará um erro! se você tentar modificar o tipo do dado de nulo

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribur undefined !
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
