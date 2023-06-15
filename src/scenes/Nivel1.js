export default class Nivel1 extends Phaser.Scene {
    constructor() {
      super("nivel1");
    }

    init(){}

    create(){
      this.add.text(400,300, "nivel1")
      this.cursors = this.input.keyboard.createCursorKeys();
      const fondo = this.add.sprite(40, 300, "fondoNivel1");
      this.anims.create({
        key: "fondoNivel1",
        frames: this.anims.generateFrameNumbers("fondoNivel1", {
          start: 0,
          end: 49 - 1
        }),
        frameRate: 10,
        repeat: -1
      });
      const background = fondo;
      this.input.keyboard.on("keydown_RIGHT", () => {
        this.animacion(background);
      });
    }
    animacion(background){
      background.anims.play("fondoNivel1", true); 
    }
    upload(){}
}