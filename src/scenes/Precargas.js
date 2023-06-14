export default class Precargas extends Phaser.Scene {
    constructor() {
      super("precargas");
    }

    init(){}
    preload(){
      this.load.image("fondoMenu", "./public/images/fondoMenu.png");
      this.load.image("trenMenu", "./public/images/trenMenu.png");
      this.load.image("nombreMenu", "./public/images/nombreMenu.png");
      this.load.image("jugarMenu1", "./public/images/jugarMenu1.png");
      this.load.image("jugarMenu2", "./public/images/jugarMenu2.png");
      this.load.image("creditosMenu1", "./public/images/creditosMenu1.png");
      this.load.image("creditosMenu2", "./public/images/creditosMenu2.png");
      this.load.image("ayudaMenu1", "./public/images/ayudaMenu1.png");
      this.load.image("ayudaMenu2", "./public/images/ayudaMenu2.png");
      
    }
    create(){
      this.scene.start("menu");
    }
    upload(){}
}