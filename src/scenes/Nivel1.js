export default class Nivel1 extends Phaser.Scene {
  constructor() {
    super("nivel1");
  }

  create() {
    this.add.image(400, 300, "fondo");
    this.add.text(400, 300, "nivel1");

    this.cursors = this.input.keyboard.createCursorKeys();
    this.nubesGrupo = this.physics.add.group();
    this.nubesMoviendo = false; // Variable para controlar si las nubes se están moviendo

    this.input.keyboard.on('keydown_RIGHT', () => {
      this.nubesMoviendo = true; // Activar el movimiento de las nubes
      this.addNube();
    });

    this.input.keyboard.on('keyup_RIGHT', () => {
      this.nubesMoviendo = false;
    });
  }

  update() {}

  addNube() {
    if (this.nubesMoviendo) {
      const randomNube = Phaser.Math.RND.pick([
        "nube1",
        "nube2",
        "nube3",
        "nube4",
        "nube5",
        "nube6",
        "nube7",
      ]);
      const randomY = Phaser.Math.RND.between(0, 200);
      const nube = this.nubesGrupo.create(800, randomY, randomNube);
      nube.body.setAllowGravity(false); // Desactivar la gravedad en la nube
      nube.body.setVelocityX(-100); // Establecer la velocidad hacia la izquierda
    }
  }
}