export default class Nivel1 extends Phaser.Scene {
    constructor() {
      super("nivel1");
    }

    init(){}
    create(){
      this.add.text(400,300, "nivel1")
      this.cursors = this.input.keyboard.createCursorKeys();
      this.anims.create({
        key: 'fondoNivel1',
        frames: this.anims.generateFrameNumbers('fondoNivel1', {start: 0, end: 49}),
        frameRate: 10,
        repeat: -1 // -1 para que se repita infinitamente, puedes cambiarlo a un número para limitar las repeticiones
      });
      
      // Crear un objeto sprite
      const spriteFondo = this.add.sprite(400, 300, 'fondoNivel1');
      
      // Reproducir la animación en el sprite
      sprite.play('fondoNivel1');
    }

    upload(){}
}