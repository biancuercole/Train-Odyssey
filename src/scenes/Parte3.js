export default class Parte3 extends Phaser.Scene {
    constructor() {
      super("parte3");
      this.velocidadBackground = 0.5;
      this.velocidadParallax = 2;
    }
  
    init(data) {
      this.contadorMonedas = data.contadorMonedas||0;
      this.contadorKm = data.contadorKm||0;
      this.contadorVidas = data.contadorVidas||3;
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
      delay: 5000,
      callback: this.agregarMoneda, 
      callbackScope: this,
      loop: true,
      });  
      //agregar sprite de tren y sacar gravedad
      this.tren = this.physics.add.sprite(950, 300, 'trenSheet');
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
    }
  
    update() {
      if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC).isDown && !this.escAbajo) {
        this.escAbajo = true;
        console.log(",")
        this.pausa = this.add.image(400, 200, "pausa").setScale(0.24);
        const reanudar = this.add.image(400, 300, "reanudar").setScale(0.24).setInteractive();
        const volverMenu = this.add.image(400, 400, "volverMenu").setScale(0.24).setInteractive();
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
      if (this.cursors.right.isDown) {
        //inicia la animacion del tren 
        this.tren.anims.play('right', true);
        //inicia movimiento de background y parallax
        this.fondo.tilePositionX += this.velocidadBackground;
        this.parallax.tilePositionX += this.velocidadParallax;
        //velocidad monedas 
        this.grupoMoneda.setVelocityX(-100);
      } else if (this.cursors.right.isUp){
        //frena animación de tren
        this.tren.anims.stop('right');
        //frena movimiento monedas
        this.grupoMoneda.setVelocityX(-0);
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
        this.pinza.setVelocityY(0);
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
      //cuando los km llegan al valor se pasa a la escena de transición para obstaculo
      if (this.contadorKm == 600) {
        this.scene.start("transicion5", { //pasar valores a siguiente escena 
          contadorMonedas: this.contadorMonedas,
          contadorKm: this.contadorKm,
          contadorVidas: this.contadorVidas,
        })
      }
    }
  
    agregarMoneda() {
      if (this.cursors.right.isDown) {
        let moneda = this.grupoMoneda.create(800, 260, "moneda");
        };
      this.physics.add.overlap(this.pinza, this.moneda, this.colectarMoneda, null, this);
    }
  
    kilometros() {
      if(this.cursors.right.isDown) {
      this.contadorKm += 50
      this.textoKm.setText(this.contadorKm)
      }
    }
  
    colectarMoneda(moneda, pinza) {
      this.contadorMonedas += 50;
      pinza.disableBody(true, true);
      console.log(this.contadorMonedas);
      this.textoMoneda.setText(this.contadorMonedas)
    }
  }