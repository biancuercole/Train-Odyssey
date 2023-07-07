export default class Derrota extends Phaser.Scene {
  constructor() {
    super("derrota");
  }

  init(){}
  create(){
    this.sound.stopAll();
    this.derrota = this.sound.add("gameOver");
    this.derrota.play();
    const click = this.sound.add('click');
    console.log("derrota")
    
    this.pantallaDerrota = this.physics.add.sprite(400, 300, 'trenQuietoSheet');
    this.pantallaDerrota.body.allowGravity = false;
    this.add.image(400, 190, "derrota").setScale(0.30);
    const reintentard = this.add.image(400, 270, "reintentarD").setScale(0.24).setInteractive();

    reintentard.on("pointerover", () => {
      this.game.canvas.style.cursor = "pointer";
    });
    reintentard.on("pointerout", () => {
      this.game.canvas.style.cursor = "default";
    });
    reintentard.on("pointerdown", () => {
      this.game.canvas.style.cursor = "default";
      click.play();
      this.scene.start("precargas");
    });
    
    this.time.addEvent ({
      delay: 0,
      callback: this.spriteDerrota,
      callbackScope: this,
      loop: true,
    })
  }
  upload(){}
  spriteDerrota() {
    this.pantallaDerrota.anims.play('trenQuietoSheet', true);
  }
}