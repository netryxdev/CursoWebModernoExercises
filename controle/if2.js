function teste1(num) {
    if(num > 7)  //Quando quisermos colocar várias sentenças no mesmo bloco, é necessário o uso de chaves no IF no javascript, pois caso contrário, ele só lerá a primeira linha abaixo do IF.
        console.log(num)
        console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // Cuidado com o ';', não usar ele com as estruturas de controle como IF por exemplo.
        console.log(num)
    }
}

teste2(6)
teste2(8)