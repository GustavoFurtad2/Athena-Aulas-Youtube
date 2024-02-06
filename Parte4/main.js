/* POO (Progamação Orientada a Objetos) - A criar um objeto

 CARRO vs TRATOR

 Carro: Acelera, Vira, Para
 Trator: Acelera, Vira, Para, Levanta e Abaixa a escavadeira

 Rico: Ele tem dinheiro
 Pobre: ele não tem dinheiro

*/

class Carro {
    nome = "Carro"
    x = 100
    y = 100
    vx = 2 // Velocidade X

    constructor(nome, velocidade) {
       this.nome = nome
       this.vx = velocidade
    }

    verNome() {
        return this.nome
    }

    acelerar() {
        this.x = this.x + this.vx
    }

    desenhar() {
        Draw.rect(this.x, this.y, 40, 20, Color.new(0, 255, 0))
    }
}

let gol = new Carro("Gol", 3)

console.log(gol.verNome())

while (true) {
    Screen.clear()
    gol.acelerar()
    gol.desenhar()
    Screen.flip()
}
