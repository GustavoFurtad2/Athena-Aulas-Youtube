class Animation {
    frame = 0
    frames = []
    timer = Timer.new()
    fps

    constructor(frames, fps) {
        this.frames = frames
        this.fps = 1000 / fps
    }

    draw(x, y) {
        if (Timer.getTime(this.timer) >= this.fps) {
            this.frame++
            if (this.frame > this.frames.length - 1) {
                this.frame = 0
            }
            Timer.setTime(this.timer, 0)
        }

        this.frames[this.frame].draw(x, y)
    }
}

let nave = new Animation([
    new Image("assets/nave/1.png"),
    new Image("assets/nave/2.png"),
    new Image("assets/nave/3.png")
], 8)

let tiros = [] // armazenar os tiros

class Tiro {
    x = 0
    y = 0
    speed = 0

    constructor(x, y, speed) {
        this.x = x
        this.y = y
        this.speed = speed
    }

    draw() {
        this.y = this.y - this.speed
        Draw.rect(this.x, this.y, 5, 35, Color.new(0, 0, 255))
    }
}

let Pad = Pads.get()
let OldPad = Pad

while (true) {
    Screen.clear()
    OldPad = Pad
    Pad = Pads.get()

    if (Pads.check(Pad, Pads.CROSS) & !Pads.check(OldPad, Pads.CROSS)) {
       tiros[tiros.length + 1] = new Tiro(320, 340, 10)
       tiros[tiros.length + 1] = new Tiro(360, 340, 10)
    }
    nave.draw(300, 350)
    tiros.forEach(
        function(tiro) {
            tiro.draw()
        }
    )
    Screen.flip()
}
