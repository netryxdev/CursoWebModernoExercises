const sequencia = {
    _valor: 1, //convenção que essa variável será privada (info entre DEVs)
    get valor() { return this._valor++ },
    set valor(valor) {
        if(alor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)