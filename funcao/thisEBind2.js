function pessoa() {
    this.idade = 0
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //Dessa forma só funcionará se você usara função bind para chamar o objeto pessoa através do this que está de fora da função setInterval
}

new pessoa

//Ou você pode fazer tambem dessa forma:

/*
const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this), 1000) */





