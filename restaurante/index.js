import Plato from "./plato.js";
import Cliente from "./cliente.js";
import Pedido from "./pedido.js";

let plato1 = new Plato("Bandeja Paisa", "Plato fuerte", 25000, true)
let plato2 = new Plato("Limonada Cerezada", "Bebida", 8000, true)

let cliente1 = new Cliente("Danna", "32123456", "3216427126")
cliente1.verInfo()

let pedido1 = new Pedido("02/10/2026", 101, cliente1)
pedido1.agregarPlato(plato1)
pedido1.agregarPlato(plato2)

pedido1.verPedido()