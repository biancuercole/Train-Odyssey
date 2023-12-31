export default class Obstaculo2 extends Phaser.Scene {
  constructor() {
    super("obstaculo2");
    this.textoTronco = null;
    this.isPreguntaActive = false;
    this.isBKeyPressed = false;
    this.teclaUno = false;
  }

  init(data) {
    this.contadorMonedas = data.contadorMonedas || 0;
    this.contadorKm = data.contadorKm || 0;
    this.contadorVidas = data.contadorVidas || 0;
  }

  create() {
    // Agregar fondo y parallax
    this.correcto = this.sound.add("correcto");
    this.incorrecto = this.sound.add("incorrecto");
    const width = 2000;
    const height = 600;
    this.fondo = this.add.tileSprite(0, 0, width, height, 'background');
    this.fondo.setOrigin(0, 0);
    this.parallax = this.add.tileSprite(0, 0, width, height, "parallax");
    this.parallax.setOrigin(0, 0);
    // Agregar interfaz
    this.add.image(1000, 300, "interfaz");
    this.add.image(20, 20, "moneda");
    this.add.image(1300, 300, "vidas");
    this.add.image(1605, 300, "distancia");
    this.textoTronco = this.add.image(400, 230, "textoCaminos").setScale(0.20);
    this.add.image(670, 420, "obstaculo2");
    // Pinza
    this.pinza = this.physics.add.sprite(432, 420, "pinza");
    this.pinza.body.allowGravity = false;
    // Agregar sprite de tren y sacar gravedad
    this.tren = this.physics.add.sprite(280, 300, 'trenSheet');
    this.tren.body.allowGravity = false;
    //teclado 
    this.cursors = this.input.keyboard.createCursorKeys();
    // ContadorKm
    this.time.addEvent({
      delay: 9000,
      callback: this.kilometros,
      callbackScope: this,
      loop: true,
    });
    // Textos
    this.textoMoneda = this.add.text(40, 7, this.contadorMonedas, {
      fontSize: "20px",
      fill: "#FFFFFF",
      fontFamily: "verdana",
    });
    this.textoKm = this.add.text(707, 7, this.contadorKm, {
      fontSize: "20px",
      fill: "#FFFFFF",
      fontFamily: "verdana",
    });
    this.textoVidas = this.add.text(372, 7, this.contadorVidas, {
      fontSize: "20px",
      fill: "#FFFFFF",
      fontFamily: "verdana",
    });
  }

  update() {
    //OPCION 1
    if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE).isDown && this.contadorMonedas >= 400 && !this.teclaUno) {
      this.teclaUno = true;
      this.correcto.play();
      this.correcto.setLoop(false);
      this.contadorMonedas -= 400;
      this.textoMoneda.setText(this.contadorMonedas);
      setTimeout(() => {
        this.scene.start("transicion4", {
        contadorMonedas: this.contadorMonedas,
        contadorKm: this.contadorKm,
        contadorVidas: this.contadorVidas,
        })
      }, 2000);
    } else if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE).isDown && this.contadorMonedas <= 400 && !this.teclaUno) {
      this.teclaUno = true;
      this.incorrecto.play();
      this.textoTronco.setVisible(false);
      this.add.image(400, 200, "monedasInsuficientes").setScale(0.24);
      this.contadorVidas -= 1;
      this.textoVidas.setText(this.contadorVidas);
      setTimeout(() => {
        this.scene.start("transicion4", {
        contadorMonedas: this.contadorMonedas,
        contadorKm: this.contadorKm,
        contadorVidas: this.contadorVidas,
        })
      }, 2000);
    }
    if (
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE).isUp
    ) {
      this.teclaUno = false; // Restablecer la variable cuando se suelta la tecla "B"
    }

    //OPCION 2
    if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO).isDown && !this.isPreguntaActive) {
      this.isPreguntaActive = true;
      this.textoTronco.setVisible(false);
      this.pregunta1 = this.add.image(400, 230, "pregunta2").setScale(0.22);
    }

    if (this.isPreguntaActive && this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B).isDown) {
      this.pregunta1.setVisible(false);
      this.correcto.play();
      this.correcto.setLoop(false);
      console.log("sonido")
      this.add.image(400, 250, "correcto").setScale(0.24);
      setTimeout(() => {
        this.scene.start("transicion4", {
        contadorMonedas: this.contadorMonedas,
        contadorKm: this.contadorKm,
        contadorVidas: this.contadorVidas,
        })
      }, 2000);
    }
    if (
      this.isPreguntaActive &&
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A).isDown &&
      !this.isBKeyPressed // Verifica si la tecla "B" no ha sido presionada antes
    ){
      this.isBKeyPressed = true; // Marca la tecla "B" como presionada
      this.pregunta1.setVisible(false);
      this.incorrecto.play();
      this.add.image(400, 250, "incorrecto").setScale(0.24);
      this.contadorVidas -= 1;
      this.textoVidas.setText(this.contadorVidas);
      setTimeout(() => {
        this.scene.start("transicion4", {
          contadorMonedas: this.contadorMonedas,
          contadorKm: this.contadorKm,
          contadorVidas: this.contadorVidas,
        });
      }, 2000);
    }

    if (
      this.isPreguntaActive &&
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A).isUp
    ) {
      this.isBKeyPressed = false; // Reestablece la variable cuando se suelta la tecla
    }
  }

}
