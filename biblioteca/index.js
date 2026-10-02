import Libros from "./libros.js";
import Prestamos from "./prestamos.js";
import Usuarios from "./usuario.js";

let quijote = new Libros("El Quijote", "Norma", "Miguel de cervantes")
let maria = new Libros("La Maria", "Norma", "Jorge Issac")

quijote.verLibro()
maria.verLibro()

let alexa = new Usuarios("Alexandra", "Lopez", "111", "123")
alexa.verinfo()

let prestarQuijoteMaria = new Prestamos(alexa, "2/10/2026", "5/10/2026")
prestarQuijoteMaria.registrarLibros(quijote)
prestarQuijoteMaria.registrarLibros(maria)
prestarQuijoteMaria.verLibros()

