export default class Nivel1 extends Phaser.Scene {
  constructor() {
    super("nivel1");
  }

  create() {
    this.add.image(400, 300, "fondo");
    this.add.text(400, 300, "nivel1");
  }

  update() {}
}
