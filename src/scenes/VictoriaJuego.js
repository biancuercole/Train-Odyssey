export default class VictoriaJuego extends Phaser.Scene {
    constructor() {
      super("victoriajuego");
    }

    init(){}
    create(){
      console.log("victoria")
      
      this.pantallaVictoria = this.physics.add.sprite(400, 300, 'trenQuietoSheet');
      this.pantallaVictoria.body.allowGravity = false;
      this.add.image(400, 190, "victoria").setScale(0.30);
      const reintentar = this.add.image(400, 270, "reintentarV").setScale(0.24).setInteractive();

      reintentar.on("pointerover", () => {
        this.game.canvas.style.cursor = "pointer";
      });
      reintentar.on("pointerout", () => {
        this.game.canvas.style.cursor = "default";
      });
      reintentar.on("pointerdown", () => {
        this.game.canvas.style.cursor = "default";
        this.scene.start("precargas");
      });
      
      this.time.addEvent ({
        delay: 0,
        callback: this.spriteVictoria,
        callbackScope: this,
        loop: true,
      })
    }
    upload(){}
    spriteVictoria() {
      this.pantallaVictoria.anims.play('trenQuietoSheet', true);
    }
}