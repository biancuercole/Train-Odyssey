export default class Menu extends Phaser.Scene {
    constructor() {
      super("menu");
    }
    create(){
      this.add.image(400,300, "fondo");
      this.add.image(400, 300, "trenMenu").setScale(0.24);
      this.add.image(600, 150, "nombreMenu").setScale(0.24);
      const jugarMenu = this.add.image(600, 325, "jugarMenu1").setScale(0.24).setInteractive();
      const creditosMenu = this.add.image(600, 430, "creditosMenu1").setScale(0.24).setInteractive();
      const ayudaMenu = this.add.image(600, 480, "ayudaMenu1").setScale(0.24).setInteractive();
      //boton jugar 
      jugarMenu.on("pointerover", () => {
        this.game.canvas.style.cursor = "pointer";
        jugarMenu.setTexture("jugarMenu2");
      });
      jugarMenu.on("pointerout", () => {
        this.game.canvas.style.cursor = "default";
        jugarMenu.setTexture("jugarMenu1");
      });
      jugarMenu.on("pointerdown", () => {
        this.game.canvas.style.cursor = "default";
        jugarMenu.setTexture("jugarMenu2");
        this.scene.start("parte1");
      });
      //boton creditos
      creditosMenu.on("pointerover", () => {
        this.game.canvas.style.cursor = "pointer";
        creditosMenu.setTexture("creditosMenu2");
      });
      creditosMenu.on("pointerout", () => {
        this.game.canvas.style.cursor = "default";
        creditosMenu.setTexture("creditosMenu1");
      });
      creditosMenu.on("pointerdown", () => {
        this.game.canvas.style.cursor = "default";
        creditosMenu.setTexture("creditosMenu2");
        this.scene.start("creditos");
      });
      //boton ayuda
      ayudaMenu.on("pointerover", () => {
        this.game.canvas.style.cursor = "pointer";
        ayudaMenu.setTexture("ayudaMenu2");
      });
      ayudaMenu.on("pointerout", () => {
        this.game.canvas.style.cursor = "default";
        ayudaMenu.setTexture("ayudaMenu1");
      });
      ayudaMenu.on("pointerdown", () => {
        this.game.canvas.style.cursor = "default";
        ayudaMenu.setTexture("ayudaMenu2");
        this.scene.start("instrucciones");
      });
    }
}