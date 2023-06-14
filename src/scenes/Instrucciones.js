export default class Instrucciones extends Phaser.Scene {
    constructor() {
      super("instrucciones");
    }

    init(){}
    create(){
      this.add.text(400, 300, "instrucciones");
    }
    upload(){}
}