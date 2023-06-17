export default class Precargas extends Phaser.Scene {
    constructor() {
      super("precargas");
    }

    init(){}
    preload(){
      this.load.image("fondo", "./public/images/Fondo.png");
      this.load.image("trenMenu", "./public/images/Menu/trenMenu.png");
      this.load.image("nombreMenu", "./public/images/Menu/nombreMenu.png");
      this.load.image("jugarMenu1", "./public/images/Menu/jugarMenu1.png");
      this.load.image("jugarMenu2", "./public/images/Menu/jugarMenu2.png");
      this.load.image("creditosMenu1", "./public/images/Menu/creditosMenu1.png");
      this.load.image("creditosMenu2", "./public/images/Menu/creditosMenu2.png");
      this.load.image("ayudaMenu1", "./public/images/Menu/ayudaMenu1.png");
      this.load.image("ayudaMenu2", "./public/images/Menu/ayudaMenu2.png");

    }
    create(){
      this.scene.start("menu");
    }
    upload(){}
}