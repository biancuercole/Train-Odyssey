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
      this.load.image("pregunta2", "./public/images/pregunta2.png");
      this.load.image("pregunta3", "./public/images/pregunta3.png");
      this.load.image("correcto", "./public/images/correcto.png");
      this.load.image("incorrecto", "./public/images/incorrecto.png");
      this.load.image("monedasInsuficientes", "./public/images/monedasInsuficientes.png");
      this.load.image("victoria", "./public/images/victoria.png");
      this.load.image("reintentarV", "./public/images/reintentarV.png");
      this.load.image("derrota", "./public/images/derrota.png");
      this.load.image("reintentarD", "./public/images/reintentarD.png");
      this.load.image("ayuda", "./public/images/ayuda.png");
      this.load.image("creditos", "./public/images/creditos.png");
      this.load.image("pausa", "./public/images/pausa.png");
      this.load.image("reanudar", "./public/images/reanudar.png");
      this.load.image("volverMenu", "./public/images/volverMenu.png");
      this.load.image("bomba", "./public/images/bomba.png");

      //SPRITE SHEETS
      this.load.spritesheet("trenQuietoSheet", "./public/images/victoriaSheet.png", {
        frameWidth: 800,
        frameHeight: 600,
      });
      this.load.spritesheet("trenSheet", "./public/images/trenSheet.png", {
        frameWidth: 660, 
        frameHeight: 600
      });

      //AUDIO
      this.load.audio("musicaFondo", "./public/audio/musicaFondo.mp3");
      this.load.audio("click", "./public/audio/click.wav");
      this.load.audio("botonMouse", "./public/audio/botonMouse.ogg");
      this.load.audio("correcto", "./public/audio/correcto.mp3");
      this.load.audio("incorrecto", "./public/audio/incorrecto.mp3");
      this.load.audio("victoriaCancion", "./public/audio/winfretless.ogg");
      this.load.audio("gameOver", "./public/audio/GameOver.ogg");
    }
    create(){
      this.click = this.sound.add("click");
      this.botonMouse = this.sound.add("botonMouse");
      this.music = this.sound.add('musicaFondo');
      this.music.play();
      this.music.setVolume(0.2);
      this.music.setLoop(true);
      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('trenSheet', { start: 0, end: 3 }),
        frameRate: 4,
        repeat: -1
      });
      this.anims.create({
        key: "trenQuietoSheet",
        frames: this.anims.generateFrameNumbers('trenQuietoSheet', { start: 0, end:1}),
        frameRate: 2,
        repeat: -1,
      });
      this.scene.start("menu");
      
    }
    upload(){}
}