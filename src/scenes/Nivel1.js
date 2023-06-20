export default class Nivel1 extends Phaser.Scene {
  constructor() {
    super("nivel1");
  }

  init() {
    this.velocidadBackground = 0.5;
    this.velocidadParallax = 2;
    this.isTeclaDerechaActiva = false;
  }

  create() {
    const width = 2000;
    const height = 600;
    this.cursors = this.input.keyboard.createCursorKeys();

    this.fondo = this.add.tileSprite(0, 0, width, height, 'background');
    this.fondo.setOrigin(0, 0);
    this.parallax = this.add.tileSprite(0, 0, width, height, "parallax");
    this.parallax.setOrigin(0, 0);

    this.tren = this.physics.add.sprite(1000, 300, 'trenSheet');
    this.tren.body.allowGravity = false;
  }

  update() {
    if (this.cursors.right.isDown) {
      this.tren.anims.play('right', true);
      this.fondo.tilePositionX += this.velocidadBackground;
      this.parallax.tilePositionX += this.velocidadParallax;
    } else {
      this.tren.anims.stop('right');
    }
  }
}
