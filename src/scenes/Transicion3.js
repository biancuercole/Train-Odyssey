export default class Transicion3 extends Phaser.Scene {
    constructor() {
      super("transicion3");
    }

    init(data) { //inicia datoss de nivel 1
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
        this.scene.start("obstaculo2", { //pasa datos a parte 2 de nivel con obstaculo 
            contadorMonedas: this.contadorMonedas, 
            contadorKm: this.contadorKm, 
            contadorVidas: this.contadorVidas, 
        });
    }
}