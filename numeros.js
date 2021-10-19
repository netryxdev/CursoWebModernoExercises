const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // isInteger = Para indicar que é um número inteiro;
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // O valor '2' serve para decidir quantas casas decimais serão mostradas após a vírgula.
console.log(media.toString()) // Para transformar o número em string!
console.log(media.toString(2)) // Para transformar em binário!
console.log(typeof media) // Para informar o tipo do dado
                          //NaN = Not a Number.
                          