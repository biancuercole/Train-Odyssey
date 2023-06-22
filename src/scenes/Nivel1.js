export default class Nivel1 extends Phaser.Scene {
  constructor() {
    super("nivel1");
  }

  init() {
    this.velocidadBackground = 0.5;
    this.velocidadParallax = 2;
    this.contadorMonedas = 0
  }

  create() {
    

    //agregar fondo y parallax
    const width = 2000;
    const height = 600;
    this.fondo = this.add.tileSprite(0, 0, width, height, 'background');
    this.fondo.setOrigin(0, 0);
    this.parallax = this.add.tileSprite(0, 0, width, height, "parallax");
    this.parallax.setOrigin(0, 0);

    //agregar interfaz
    this.add.image(1000, 300, "interfaz");
    this.add.image(20, 20, "moneda");
    this.add.image(1300, 300, "vidas");
    this.add.image(1605, 300, "distancia");

    //pinza
    this.pinza = this.physics.add.sprite(432, 450, "pinza");
    this.pinza.body.allowGravity = false;

    //monedas 
    this.grupoMoneda = this.physics.add.group({allowGravity: false});
    this.time.addEvent ({
    delay: 1000,
    callback: this.agregarMoneda, 
    callbackScope: this,
    loop: true,
    });  
    
    //agregar sprite de tren y sacar gravedad
    this.tren = this.physics.add.sprite(950, 300, 'trenSheet');
    this.tren.body.allowGravity = false;

    this.cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.overlap(this.pinza, this.grupoMoneda, this.colectarMoneda, null, this);
  }

  update() {
    if (this.cursors.right.isDown) {
      //inicia la animacion del tren 
      this.tren.anims.play('right', true);
      //inicia movimiento de background y parallax
      this.fondo.tilePositionX += this.velocidadBackground;
      this.parallax.tilePositionX += this.velocidadParallax;
      this.grupoMoneda.setVelocityX(-100);

    } else if (this.cursors.right.isUp){
      //frena animación de tren
      this.tren.anims.stop('right');
      this.grupoMoneda.setVelocityX(-0);
    }    
    const limiteSuperior = 320;
    const limiteInferior = 420;
    const pinzaY = this.pinza.y;
    const isPinzaEnLimiteSuperior = pinzaY <= limiteSuperior;
    const isPinzaEnLimiteInferior = pinzaY >= limiteInferior;

    if (isPinzaEnLimiteSuperior) {
      this.pinza.y = limiteSuperior;
      this.pinza.setVelocityY(0);
    } else if (isPinzaEnLimiteInferior) {
      this.pinza.y = limiteInferior;
      this.pinza.setVelocityY(0);
    }

    if (this.cursors.space.isDown) {
      if (isPinzaEnLimiteInferior || !this.isPinzaEnMovimiento) {
        this.pinza.setVelocityY(-100);
        this.isPinzaEnMovimiento = true;
        this.pinza.body.allowGravity = false;
      }
    } else if (this.cursors.space.isUp) {
      this.isPinzaEnMovimiento = false;
      this.pinza.body.allowGravity = true;
    }
  }

  agregarMoneda() {
    if (this.cursors.right.isDown) {
      let moneda = this.grupoMoneda.create(800, 260, "moneda");
      };
    this.physics.add.overlap(this.pinza, this.moneda, this.colectarMoneda, null, this);
  }


  colectarMoneda(moneda, pinza) {
    pinza.disableBody(true, true);
    console.log("Prueba")
  }
}

