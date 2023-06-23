export default class Transicion extends Phaser.Scene {
    constructor() {
      super("transicion");
    }

    init(data) {
        this.contadorMonedas = data.contadorMonedas||0;
        this.contadorKm = data.contadorKm||0;
        this.contadorVidas = data.contadorVidas||0;
    }

    create() {
        this.add.image(400, 300, "fondo"); 
        this.add.image(400, 300, "transicion").setScale(0.24);
        this.time.addEvent ({
            delay: 3000,
            callback: this.parte2,
            callbackScope: this,
            loop: false,
          });
    }

    parte2() {
        this.scene.start("parte2", {
            contadorMonedas: this.contadorMonedas, 
            contadorKm: this.contadorKm, 
            contadorVidas: this.contadorVidas, 
        });
    }
}