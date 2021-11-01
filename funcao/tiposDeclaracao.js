console.log(soma(3, 4)) // Isso funcionará pois no JS primeiro se carrega as funções
                        // E só depois o código. Por isso funciona mesmo escrito antes.
conso

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) // Aqui nesse caso só funciona se for escrito depois pois é 
                        // Function expression

// named function expression
const mult = function mult (x,y) {
    return x * y
}
console.log(mult(3, 4))
 