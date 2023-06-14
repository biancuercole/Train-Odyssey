import Creditos from "./src/scenes/Creditos.js";
import Precargas from "./src/scenes/Precargas.js";
import Preload from "./src/scenes/Preload.js";
import Derrota from "./src/scenes/Derrota.js";
import Instrucciones from "./src/scenes/Instrucciones.js";
import Menu from "./src/scenes/Menu.js";
import Nivel1 from "./src/scenes/Nivel1.js";
import VictoriaJuego from "./src/scenes/VictoriaJuego.js";
import VictoriaNivel from "./src/scenes/VictoriaNivel.js";

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
