export default class Ayuda extends Phaser.Scene {
    constructor() {
      super("ayuda");
    }

    init(){}
    create(){
     this.add.image(400, 300, "ayuda").setScale(0.24);
    }
    update(){
      if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC).isDown) {
        this.scene.start("menu");
      }
    }
}