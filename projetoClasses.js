class ataquePersonagem{
    constructor(tipoPersonagem, armaPersonagem){
    this.tipoPersonagem = tipoPersonagem
    this.armaPersonagem = armaPersonagem
    }
    atacar() {
        console.log(`O personagem ${this.tipoPersonagem} atacou usando ${this.armaPersonagem}`)
    }
}

const guerreiro = new ataquePersonagem("Gurreiro", "Espada")
const monge = new ataquePersonagem("Monge", "Artes Marciais")
const mago = new ataquePersonagem("Mago", "Magia")
const ninja = new ataquePersonagem("Ninja", "Shuriken")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()