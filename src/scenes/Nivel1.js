export default class Nivel1 extends Phaser.Scene {
  constructor() {
    super("nivel1");
  }

  create() {
    this.add.image(400, 300, "fondo");
    this.add.text(400, 300, "nivel1");
    const width = 2000;
    const height = 600;
    this.cursors = this.input.keyboard.createCursorKeys();

    const fondo = this.add.tileSprite(0, 0, width, height, 'nivel1');
    fondo.setOrigin(0, 0);
    const velocidadDesplazamiento = 2;
    this.update = () => {
      if (this.cursors.right.isDown) {
      fondo.tilePositionX += velocidadDesplazamiento;
      }
    };

  }

  update() {}
}
