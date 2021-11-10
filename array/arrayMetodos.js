const pilotos = ['Vettel', 'Alonso', 'Raiokkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro!
              // O método pop remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeito elemento do array!
console.log(pilotos)

pilotos.unshift('Hamilton') // Coloca no primeiro elemento do array
console.log(pilotos)

// Splice pode adcionar e remover elementos

// adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // Massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir de determinado elemento
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Não inclui o índice 4
console.log(algunsPilotos2)
