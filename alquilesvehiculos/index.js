import Vehiculo from "./vehiculo.js";
import ClienteAlquiler from "./cliente.js";
import Alquiler from "./alquiler.js";

let carro1 = new Vehiculo("XYZ123", "Toyota", "2023", "SUV")
carro1.verVehiculo()

let cliente1 = new ClienteAlquiler("Danna Lopez", "987654321", "3159998877")
cliente1.verInfo()

let alquiler1 = new Alquiler("02/10/2026", "10/10/2026", cliente1, carro1)
alquiler1.verAlquiler()