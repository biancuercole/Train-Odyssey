import Creditos from "./src/scenes/Creditos.js";
import Precargas from "./src/scenes/Precargas.js";
import Preload from "./src/scenes/Preload.js";
import Derrota from "./src/scenes/Derrota.js";
import Instrucciones from "./src/scenes/Instrucciones.js";
import Menu from "./src/scenes/Menu.js";
import Nivel1 from "./src/scenes/Nivel1.js";
import VictoriaJuego from "./src/scenes/VictoriaJuego.js";
import Parte2 from "./src/scenes/Parte2.js";
import Transicion from "./src/scenes/Transicion.js";
import Transicion2 from "./src/scenes/Transicion2.js";
import Obstaculo1 from "./src/scenes/Obstaculo1.js";

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
      debug: false,
    },
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [Precargas, Preload, Creditos, Derrota, Instrucciones, Menu, Nivel1, Transicion, Transicion2, Obstaculo1, VictoriaJuego, Parte2],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);
