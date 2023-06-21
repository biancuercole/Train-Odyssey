export default class Nivel1 extends Phaser.Scene {
  constructor() {
    super("nivel1");
  }

  init() {
    this.velocidadBackground = 0.5;
    this.velocidadParallax = 2;
  }

  create() {
    //valores para fondo
    const width = 2000;
    const height = 600;

    this.cursors = this.input.keyboard.createCursorKeys();
    //agregar fondo y parallax
    this.fondo = this.add.tileSprite(0, 0, width, height, 'background');
    this.fondo.setOrigin(0, 0);
    this.parallax = this.add.tileSprite(0, 0, width, height, "parallax");
    this.parallax.setOrigin(0, 0);
    //agregar interfaz
    this.add.image(1000, 300, "interfaz");
    this.add.image(20, 20, "moneda");
    this.add.image(1300, 300, "vidas");
    this.add.image(1605, 300, "distancia");

    this.add.image(950, 295, "pinza");
    //agregar sprite de tren y sacar gravedad
    this.tren = this.physics.add.sprite(950, 300, 'trenSheet');
    this.tren.body.allowGravity = false;

    this.time.addEvent ({
    delay: 15000, //cada cuanto ocurre el event
    callback: this.agregarMoneda, //es la funcion que se ejecuta cuando ocurre este evento
    callbackScope: this,
    loop: true,
      });  

    this.grupoMoneda = this.physics.add.group({allowGravity: false});
  }

  update() {
    if (this.cursors.right.isDown) {
      //inicia la animacion del tren 
      this.tren.anims.play('right', true);
      //inicia movimiento de background y parallax
      this.fondo.tilePositionX += this.velocidadBackground;
      this.parallax.tilePositionX += this.velocidadParallax;
      this.grupoMoneda.setVelocityX(-100);
    } else {
      //frena animación de tren
      this.tren.anims.stop('right');
      this.grupoMoneda.setVelocityX(-0);
    }
  }

  agregarMoneda() {
    if(this.cursors.right.isDown) {
    let moneda = this.grupoMoneda.create(800, 200, "moneda");
    } 
  }
}

