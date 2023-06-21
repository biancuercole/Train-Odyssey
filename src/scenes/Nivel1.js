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
      delay: 3000, //cada cuanto ocurre el evento
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
    } else {
      //frena animación de tren
      this.tren.anims.stop('right');
    }
  }

  agregarMoneda() {
    let moneda = this.grupoMoneda.create(832, 200, "moneda");
    this.tweens.add({
      targets: moneda, /*El target que se le aplica el tweens */
      x: -32, /*el X donde finaliza su desplazamiento*/
      ease: "Sine.easeIn",
      duration: 4000, /*Tiempo q tarda en realizar el desplazamiento */
      yoyo: false, /*Desactivamos el yoyo y le decimos q no se repita. */
      repeat: 0,
      onComplete: ()=>{
        //Aprovechando los diferentes eventos del tweens: 
        //Cuando se complete el tweens, se destruye.
        moneda.destroy();
      }
    });
  }
}
