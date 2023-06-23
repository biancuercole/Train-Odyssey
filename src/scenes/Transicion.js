export default class Transicion extends Phaser.Scene {
    constructor() {
      super("transicion");
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
        this.scene.start("parte2");
    }
}