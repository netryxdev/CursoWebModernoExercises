const escola = "Cod3r"

console.log(escola.charAt(4))//Exclui todas as letras até a letra nº 4, ou seja, "r", lembrando que se conta a partir do 0 que seria a letra C
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//Mostra o código equivalente da letra(caractére) na tabela ask ou unicode
console.log(escola.indexOf('3'))//"existe o valor 3 na constante escola?" Sim, existe e ele é apontado no console.

console.log(escola.substring(1))// Escreve a partir dp índice "1"
console.log(escola.substring(0, 3))// Aqui seria o "contrário" ele ta indo do índice 0 até o índice 3 e excluindo o resto adiante

console.log('Escola '.concat(escola).concat("!"))//Um tipo de forma para concatenar strings pode usar o "+" no lugar de concat tbm.
console.log(escola.replace(3, 'e'))//substitui o item "3" por 'e' na constante

console.log('Ana,Maria,Pedro'.split(','))// comando split transforma em array
