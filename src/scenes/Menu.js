export default class Menu extends Phaser.Scene {
    constructor() {
      super("menu");
    }
    create(){
      const click = this.sound.add('click');
      const botonMouse = this.sound.add('botonMouse');
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
        botonMouse.play();
      });
      jugarMenu.on("pointerout", () => {
        this.game.canvas.style.cursor = "default";
        jugarMenu.setTexture("jugarMenu1");
      });
      jugarMenu.on("pointerdown", () => {
        this.game.canvas.style.cursor = "default";
        jugarMenu.setTexture("jugarMenu2");
        click.play();
        this.scene.start("parte1");
      });
      //boton creditos
      creditosMenu.on("pointerover", () => {
        this.game.canvas.style.cursor = "pointer";
        creditosMenu.setTexture("creditosMenu2");
        botonMouse.play();
      });
      creditosMenu.on("pointerout", () => {
        this.game.canvas.style.cursor = "default";
        creditosMenu.setTexture("creditosMenu1");
      });
      creditosMenu.on("pointerdown", () => {
        this.game.canvas.style.cursor = "default";
        creditosMenu.setTexture("creditosMenu2");
        click.play();
        this.scene.start("creditos")
      });
      //boton ayuda
      ayudaMenu.on("pointerover", () => {
        this.game.canvas.style.cursor = "pointer";
        ayudaMenu.setTexture("ayudaMenu2");
        botonMouse.play();
      });
      ayudaMenu.on("pointerout", () => {
        this.game.canvas.style.cursor = "default";
        ayudaMenu.setTexture("ayudaMenu1");
      });
      ayudaMenu.on("pointerdown", () => {
        this.game.canvas.style.cursor = "default";
        ayudaMenu.setTexture("ayudaMenu2");
        click.play();
        this.scene.start("ayuda");
      });
    }
}