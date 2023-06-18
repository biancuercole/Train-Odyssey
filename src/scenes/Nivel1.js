export default class Nivel1 extends Phaser.Scene {
  constructor() {
    super("nivel1");
  }

  create() {
    this.add.image(400, 300, "fondo");
    this.add.text(400, 300, "nivel1");

    this.nubesGrupo = this.physics.add.group();
    this.nubesMoviendo = false; // Variable para controlar si las nubes se están moviendo
    this.nubesTimer = null; // Temporizador para la generación de nubes

    this.input.keyboard.on('keydown', (event) => {
      if (event.key === 'ArrowRight' && !this.nubesMoviendo) {
        this.nubesMoviendo = true; // Activar el movimiento de las nubes
        this.nubesTimer = this.time.addEvent({
          delay: 3000, // Generar una nueva nube cada 3 segundos (3000 milisegundos)
          callback: this.generarNubeAleatoria,
          callbackScope: this,
          loop: true // Repetir el temporizador indefinidamente
        });
      }
    });

    this.input.keyboard.on('keyup', (event) => {
      if (event.key === 'ArrowRight') {
        this.nubesMoviendo = false;
        if (this.nubesTimer) {
          this.nubesTimer.destroy(); // Detener el temporizador de generación de nubes
        }
        this.nubesGrupo.setVelocityX(0); // Detener el movimiento de las nubes existentes
      }
    });
  }

  update() {
    if (this.nubesMoviendo) {
      this.nubesGrupo.getChildren().forEach((nube) => {
        if (nube.x < -nube.width) {
          nube.destroy(); // Eliminar las nubes que salen de la pantalla
        }
      });
    }
  }

  generarNubeAleatoria() {
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
