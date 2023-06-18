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
      this.load.image("nube1", "./public/images/nubes/nube1.png");
      this.load.image("nube2", "./public/images/nubes/nube2.png");
      this.load.image("nube3", "./public/images/nubes/nube3.png");
      this.load.image("nube4", "./public/images/nubes/nube4.png");
      this.load.image("nube5", "./public/images/nubes/nube5.png");
      this.load.image("nube6", "./public/images/nubes/nube6.png");
      this.load.image("nube7", "./public/images/nubes/nube7.png");
    }
    create(){
      this.scene.start("menu");
      const nubes = ["nube1", "nube2", "nube3", "nube4", "nube5", "nube6", "nube7"]
    }
    upload(){}
}