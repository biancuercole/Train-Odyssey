export default class Menu extends Phaser.Scene {
    constructor() {
      super("menu");
    }

    init(){}
    create(){
      this.add.image(400,300, "fondoMenu").setScale(0.24);
      this.add.image(400, 300, "trenMenu").setScale(0.24);
      this.add.image(400, 300, "nombreMenu").setScale(0.24);
      const jugarMenu = this.add.image(400, 300, "jugarMenu1").setScale(0.24).setInteractive();
      const creditosMenu = this.add.image(400, 300, "creditosMenu1").setScale(0.24).setInteractive();
      const ayudaMenu = this.add.image(400, 300, "ayudaMenu1").setScale(0.24).setInteractive();
    }
    upload(){}
}