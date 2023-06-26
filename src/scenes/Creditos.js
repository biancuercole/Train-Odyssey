export default class Creditos extends Phaser.Scene {
  constructor() {
    super("creditos");
  }

  init(){}
  create(){
    this.add.image(400, 300, "creditos").setScale(0.24);
  }
  update(){
    if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC).isDown){
      this.scene.start("menu");
    }
  }
}