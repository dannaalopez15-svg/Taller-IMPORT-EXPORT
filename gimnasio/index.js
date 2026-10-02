import Cliente from "./cliente.js";
import Entrenador from "./entrenador.js";
import Rutina from "./rutina.js";

let entrenador1 = new Entrenador("Danna Lopez", "Musculación", "3216427126")
entrenador1.verInfo()

let rutina1 = new Rutina("Hipertrofia Pierna", "Aumentar masa muscular", "60 min", entrenador1)
let rutina2 = new Rutina("Cardio HIIT", "Quemar grasa", "30 min", entrenador1)

let cliente1 = new Cliente("Alexandra López", "1098765432", "3000000000", 18)
cliente1.verInfo()

cliente1.asignarRutina(rutina1)
cliente1.asignarRutina(rutina2)
cliente1.verRutinas()