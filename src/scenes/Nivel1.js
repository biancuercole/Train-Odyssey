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
    //valores para fondo
    const width = 2000;
    const height = 600;
    //inicializar input de teclado
    this.cursors = this.input.keyboard.createCursorKeys();
    //agregar fondo y parallax
    this.fondo = this.add.tileSprite(0, 0, width, height, 'background');
    this.fondo.setOrigin(0, 0);
    this.parallax = this.add.tileSprite(0, 0, width, height, "parallax");
    this.parallax.setOrigin(0, 0);
    //agregar interfaz
    this.add.image(1000, 300, "interfaz");
    this.add.image(1005, 300, "moneda");
    this.add.image(1300, 300, "vidas");
    this.add.image(1605, 300, "distancia");
    this.add.image(1000, 300, "obstaculo3");
    this.add.image(950, 300, "pinza");
    //agregar sprite de tren y sacar gravedad
    this.tren = this.physics.add.sprite(950, 300, 'trenSheet');
    this.tren.body.allowGravity = false;
  }

  update() {
    if (this.cursors.right.isDown) {
      //inicia la animacion del tren 
      this.tren.anims.play('right', true);
      //inicia movimiento de background y parallax
      this.fondo.tilePositionX += this.velocidadBackground;
      this.parallax.tilePositionX += this.velocidadParallax;
    } else {
      //frena animación de tren
      this.tren.anims.stop('right');
    }
  }
}
