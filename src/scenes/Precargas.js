export default class Precargas extends Phaser.Scene {
    constructor() {
      super("precargas");
    }

    init(){}
    preload(){
      this.load.image("fondo", "./public/images/Fondo.png");
      this.load.image("trenMenu", "./public/images/Menu/trenMenu.png");
      this.load.image("nombreMenu", "./public/images/Menu/nombreMenu.png");
      this.load.image("jugarMenu1", "./public/images/Menu/jugarMenu1.png");
      this.load.image("jugarMenu2", "./public/images/Menu/jugarMenu2.png");
      this.load.image("creditosMenu1", "./public/images/Menu/creditosMenu1.png");
      this.load.image("creditosMenu2", "./public/images/Menu/creditosMenu2.png");
      this.load.image("ayudaMenu1", "./public/images/Menu/ayudaMenu1.png");
      this.load.image("ayudaMenu2", "./public/images/Menu/ayudaMenu2.png");
      this.load.image("background", "./public/images/nivel.png");
      this.load.image("parallax", "./public/images/parallax.png");
      this.load.image("obstaculo1", "./public/images/obstaculo1.png");
      this.load.image("obstaculo2", "./public/images/obstaculo2.png");
      this.load.image("obstaculo3", "./public/images/obstaculo3.png");
      this.load.image("interfaz", "./public/images/interfaz.png");
      this.load.image("vidas", "./public/images/vidas.png");
      this.load.image("moneda", "./public/images/moneda.png");
      this.load.image("distancia", "./public/images/distancia.png");
      this.load.image("pinza", "./public/images/pinza.png");
      this.load.image("transicion", "./public/images/tituloTransicion.png");
      this.load.image("textoCaja", "./public/images/textoCaja.png");
      this.load.image("textoCaminos", "./public/images/textoCaminos.png");
      this.load.image("textoTronco", "./public/images/textoTronco.png");
      this.load.image("pregunta1", "./public/images/pregunta1.png");
      this.load.image("correcto", "./public/images/correcto.png");
      this.load.image("incorrecto", "./public/images/incorrecto.png");
      this.load.image("monedasInsuficientes", "./public/images/monedasInsuficientes.png");

      this.load.spritesheet("trenSheet", "./public/images/trenSheet.png", {
        frameWidth: 2000, 
        frameHeight: 600
      });
    }
    create(){
      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('trenSheet', { start: 0, end: 3 }),
        frameRate: 4,
        repeat: -1
      });
      this.scene.start("menu");
      
    }
    upload(){}
}