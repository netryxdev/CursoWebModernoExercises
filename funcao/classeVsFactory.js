class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`) // Se não usasse o this no constructor e aqui, a variável ''nome'' não seria recohecida

    }

}

const p1 = new Pessoa("João")
p1.falar()

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa("João")
p2.falar
