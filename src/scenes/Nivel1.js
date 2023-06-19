export default class Nivel1 extends Phaser.Scene {
  constructor() {
    super("nivel1");
  }

  create() {

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
    this.tren = this.physics.add.sprite(1000, 400, 'trenSheet');
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('playerSheet', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });
    this.add.text(400, 300, "nivel1");
  }

  update() {
      if (this.input.keyboard.isDown(Phaser.Input.Keyboard.KeyCodes.RIGHT)) {
          this.player.anims.play('right', true);
      }
  }
}

