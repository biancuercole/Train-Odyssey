import Creditos from "./assets/scenes/Creditos.js";
import Precargas from "./assets/scenes/Precargas.js";
import Preload from "./assets/scenes/Preload.js";
import Derrota from "./assets/scenes/Derrota.js";
import Instrucciones from "./assets/scenes/Instrucciones.js";
import Menu from "./assets/scenes/Menu.js";
import Nivel1 from "./assets/scenes/Nivel1.js";
import VictoriaJuego from "./assets/scenes/VictoriaJuego.js";
import VictoriaNivel from "./assets/scenes/VictoriaNivel.js";

// Create a new Phaser config object
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: true,
    },
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [Precargas, Preload, Creditos, Derrota, Instrucciones, Menu, Nivel1, VictoriaJuego, VictoriaNivel],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);
