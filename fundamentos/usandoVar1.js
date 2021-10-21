{
    {
        {
            var sera = 'Será??'
            console.log(sera)
        }

    }
}

console.log(sera) //A variável do tipo VAR é de escopo global, 
                    //logo visível fora ou dentro de um bloco
function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)