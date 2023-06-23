export default class Parte2 extends Phaser.Scene {
    constructor() {
      super("parte2");
    }
  
    init(data) {
      this.contadorMonedas = data.contadorMonedas||0;
      this.contadorKm = data.contadorKm||0;
      this.contadorVidas = data.contadorVidas||0;
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
      
      //agregar sprite de tren y sacar gravedad
      this.tren = this.physics.add.sprite(950, 300, 'trenSheet');
      this.tren.body.allowGravity = false;
  
      this.cursors = this.input.keyboard.createCursorKeys();
      this.physics.add.overlap(this.pinza, this.grupoMoneda, this.colectarMoneda, null, this);
  
      //contadorKm
      this.time.addEvent ({
        delay: 9000,
        callback: this.kilometros,
        callbackScope: this,
        loop: true,
      })
  
      //Textos 
      this.textoMoneda = this.add.text(40, 7, this.contadorMonedas, {
        fontSize: "20px",
        fill: "#FFFFFF",
        fontFamily: "verdana",
      });
      this.textoKm = this.add.text(707, 7, this.contadorKm, {
        fontSize: "20px",
        fill: "#FFFFFF",
        fontFamily: "verdana",
      })
      this.textoVidas = this.add.text(372, 7, this.contadorVidas, {
        fontSize: "20px",
        fill: "#FFFFFF",
        fontFamily: "verdana",
      });
    }
  
    update() {}
  
}
  
  