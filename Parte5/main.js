const GAME_MENU = 0
const GAME_PLAYING = 1
const GAME_DEATH = 2

let gameState = GAME_MENU
let font = new Font()

let pad = Pads.get()
let oldpad = pad

let images = {
    "parado": new Image("assets/1.png", RAM),
    "andar1": new Image("assets/2.png", RAM),
    "andar2": new Image("assets/3.png", RAM),
    "morte": new Image("assets/4.png", RAM),
    "cacto": new Image("assets/cacto.png", RAM),
}

class Player {
   y = 300

   subindo = false
   timer = Timer.new()
   Draw() {
     const time = Timer.getTime(this.timer)
     console.log(time)

     if (this.subindo == false) {
        if (Pads.check(pad, Pads.CROSS)) {
            this.subindo = true
        } else {
            if (this.y < 300) {
            this.y = this.y + 11
            }
        }
     } else {
        if (player.y < 175) {
            this.subindo = false
        } else {
            this.y = this.y - 11
        }
     }

     if (time < 500) {
        images.andar1.draw(100, this.y)
     } else if (time >= 500 && time <= 1000) {
        images.andar2.draw(100, this.y)
     } else {
        Timer.setTime(this.timer, 0)
        images.andar1.draw(100, this.y)
     }
   }
}

let player = new Player()
while (true) {
    Screen.clear()
    Draw.rect(0, 0, 640, 448, Color.new(255, 255, 255))

    oldpad = pad // Vai salvar o estado do controle do frame anterior
    pad = Pads.get() // Ele pega o estado atual do controle
    if (gameState == GAME_MENU) {
        images.parado.draw(100, 300)
        font.print(10, 50, "Aperte X para iniciar!")
        if (Pads.check(pad, Pads.CROSS) && !Pads.check(oldpad, Pads.CROSS)) {
            gameState = GAME_PLAYING
        }
    }
    else if(gameState == GAME_PLAYING) {
        player.Draw()
    }
    Screen.flip()
}
