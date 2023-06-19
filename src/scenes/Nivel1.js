export default class Nivel1 extends Phaser.Scene {
  constructor() {
    super("nivel1");
  }

  init() {
    this.velocidadDesplazamiento = 2;
    this.isTeclaDerechaActiva = false;
  }

  create() {
    const width = 2000;
    const height = 600;
    this.cursors = this.input.keyboard.createCursorKeys();

    this.fondo = this.add.tileSprite(0, 0, width, height, 'nivel1');
    this.fondo.setOrigin(0, 0);
    this.tren = this.physics.add.sprite(1000, 300, 'trenSheet');
    this.tren.body.allowGravity = false;
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('trenSheet', { start: 0, end: 3 }),
      frameRate: 4,
      repeat: -1
    });
    this.add.text(400, 300, "nivel1");

    this.input.keyboard.on('keydown-RIGHT', () => {
      this.isTeclaDerechaActiva = true;
    });

    this.input.keyboard.on('keyup-RIGHT', () => {
      this.isTeclaDerechaActiva = false;
      this.tren.anims.stop('right');
    });
  }

  update() {
    if (this.isTeclaDerechaActiva) {
      this.tren.anims.play('right', true);
      this.fondo.tilePositionX += this.velocidadDesplazamiento;
    }
  }
}
