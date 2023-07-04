export default class Parte2 extends Phaser.Scene {
  constructor() {
    super("parte2");    
    this.velocidadBackground = 0.5;
    this.velocidadParallax = 2;
    this.escAbajo = false;
  }

  init(data) {
      this.contadorMonedas = data.contadorMonedas||0;
      this.contadorKm = data.contadorKm||0;
      this.contadorVidas = data.contadorVidas||3;
  }

  create() {
    //sonidos
    this.click = this.sound.add("click");
    this.incorrecto = this.sound.add("incorrecto");
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
    delay: 5000,
    callback: this.agregarMoneda, 
    callbackScope: this,
    loop: true,
    });  
    //bomba
    this.grupoBomba = this.physics.add.group({allowGravity: false});
    this.time.addEvent ({
    delay: 5500,
    callback: this.agregarBomba, 
    callbackScope: this,
    loop: true,
    }); 
    //obstaculo
    this.obstaculoDos = this.physics.add.group({allowGravity: false});
    this.time.addEvent ({
      delay: 40000, 
      callback: this.obstaculoSegundo, 
      callbackScope: this, 
      loop: false,
    });
    //agregar sprite de tren y sacar gravedad
    this.tren = this.physics.add.sprite(280, 300, 'trenSheet');
    this.tren.body.allowGravity = false;
    //contadorKm
    this.time.addEvent ({
      delay: 7000,
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
    
    this.cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.overlap(this.pinza, this.grupoMoneda, this.colectarMoneda, null, this);
    this.physics.add.overlap(this.pinza, this.grupoBomba, this.colectarBomba, null, this);
    this.physics.add.overlap(this.tren, this.obstaculoDos, this.textoObstaculo, null, this);
  }

  update() {
    if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC).isDown && !this.escAbajo) {
      this.escAbajo = true;
      console.log(",")
      this.pausa = this.add.image(400, 100, "pausa").setScale(0.24);
      const reanudar = this.add.image(400, 200, "reanudar").setScale(0.24).setInteractive();
      const volverMenu = this.add.image(400, 300, "volverMenu").setScale(0.24).setInteractive();
      reanudar.on("pointerover", () => {
        this.game.canvas.style.cursor = "pointer";
      });
      reanudar.on("pointerout", () => {
        this.game.canvas.style.cursor = "default";
      });
      reanudar.on("pointerdown", () => {
        this.game.canvas.style.cursor = "default";
        reanudar.destroy(true);
        volverMenu.destroy(true);
        this.pausa.destroy(true);
      });
      volverMenu.on("pointerover", () => {
        this.game.canvas.style.cursor = "pointer";
      });
      volverMenu.on("pointerout", () => {
        this.game.canvas.style.cursor = "default";
      });
      volverMenu.on("pointerdown", () => {
        this.game.canvas.style.cursor = "default";
        this.scene.start("menu");
      });
    }
    
    if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC).isUp) {
      this.escAbajo = false;
    }

    if (this.cursors.right.isDown) {
      //inicia la animacion del tren 
      this.tren.anims.play('right', true);
      //inicia movimiento de background y parallax
      this.fondo.tilePositionX += this.velocidadBackground;
      this.parallax.tilePositionX += this.velocidadParallax;
      //velocidad monedas 
      this.grupoMoneda.setVelocityX(-100);
      this.grupoBomba.setVelocityX(-160);
      this.obstaculoDos.setVelocityX(-100);
    } else if (this.cursors.right.isUp){
      //frena animación de tren
      this.tren.anims.stop('right');
      //frena movimiento monedas
      this.grupoMoneda.setVelocityX(-0);
      this.grupoBomba.setVelocityX(-0);
      this.obstaculoDos.setVelocityX(-0);
    }    

    const limiteSuperior = 320;
    const limiteInferior = 420;
    //detecta posicion de pinza en y
    const pinzaY = this.pinza.y;
    const isPinzaEnLimiteSuperior = pinzaY <= limiteSuperior;
    const isPinzaEnLimiteInferior = pinzaY >= limiteInferior;
    //frena el movimiento de pinza si llega a los limietes
    if (isPinzaEnLimiteSuperior) {
      this.pinza.y = limiteSuperior;
      this.pinza.setVelocityY(100);
    } else if (isPinzaEnLimiteInferior) {
      this.pinza.y = limiteInferior;
      this.pinza.setVelocityY(0);
    }
    //si la pinza esta en limite inferior y no se mueve, ahora se puede mover y no tiene gravedad
    if (this.cursors.space.isDown) {
      if (isPinzaEnLimiteInferior || !this.isPinzaEnMovimiento) {
        this.pinza.setVelocityY(-150);
        this.isPinzaEnMovimiento = true;
        this.pinza.body.allowGravity = false;
      }
      //si espacio no se aprieta la pinza no se mueve y recupera gravedad 
    } else if (this.cursors.space.isUp) {
      this.isPinzaEnMovimiento = false;
      this.pinza.body.allowGravity = true;
    }

  }

  agregarMoneda() {
    if (this.cursors.right.isDown) {
      let moneda = this.grupoMoneda.create(800, 260, "moneda");
      };
  }
  agregarBomba() {
    if (this.cursors.right.isDown) {
      let bomba = this.grupoBomba.create(800, 300, "bomba");
    };
  }

  obstaculoSegundo() {
    if (this.cursors.right.isDown) {
      let obstaculo = this.obstaculoDos.create(820, 490, "obstaculo2"); 
    }
  }

  kilometros() {
    if(this.cursors.right.isDown) {
    this.contadorKm += 50
    this.textoKm.setText(this.contadorKm)
    }
  }

  colectarMoneda(moneda, pinza) {
    this.contadorMonedas += 50;
    this.click.play();
    pinza.disableBody(true, true);
    console.log(this.contadorMonedas);
    this.textoMoneda.setText(this.contadorMonedas)
  }
  
  colectarBomba(bomba, pinza) {
    this.incorrecto.play();
    this.scene.start("derrota");
  }
  
  textoObstaculo(obstaculo, tren) {
    console.log("overlap");
    this.scene.start("obstaculo2", {
      contadorMonedas: this.contadorMonedas,
      contadorKm: this.contadorKm,
      contadorVidas: this.contadorVidas,
    })
  }
}

