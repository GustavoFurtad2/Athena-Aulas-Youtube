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

        console.log(this.frame)
        this.frames[this.frame].draw(x, y)
    }
}

let nave = new Animation([
    new Image("assets/nave/1.png"),
    new Image("assets/nave/2.png"),
    new Image("assets/nave/3.png")
], 8)

while (true) {
    Screen.clear()
    nave.draw(100, 100)
    Screen.flip()
}
