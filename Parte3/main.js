let font = new Font()

// array: botar itens
// json: botar itens e poder nomear eles

let player = {
  "x": 100,
  "y": 100,
}

let pad = Pads.get();
while (true) {
  Screen.clear()

  /*
  O Pads.get vai retornar as informações dos controles do momento
  */

  pad = Pads.get();
  if (Pads.check(pad, Pads.LEFT)) {
    player.x--;
  }
  if (Pads.check(pad, Pads.RIGHT)) {
    player.x++;
  }
  if (Pads.check(pad, Pads.UP)) {
    player.y--;
  }
  if (Pads.check(pad, Pads.DOWN)) {
    player.y++;
  }
  font.print(500, 20, "X: " + player.x)
  font.print(500, 50, "Y: " + player.y)
  Draw.rect(player.x, player.y, 10, 10, Color.new(255, 255, 255))
  Screen.flip()
}
