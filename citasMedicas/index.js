import Paciente from "./paciente.js";
import Medico from "./medico.js";
import Cita from "./cita.js";

let paciente1 = new Paciente("Brayan Alejandro", "12345678", 22, "3101234567")
paciente1.verInfo()

let medico1 = new Medico("Dra. Danna Lopez", "87654321", "Cardiología", "3207654321")
medico1.verInfo()

let cita1 = new Cita("05/10/2026", "10:30 AM", "Chequeo general", paciente1, medico1)
cita1.verCita()