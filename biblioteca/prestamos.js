import Libros from"./libros.js"
class Prestamos{
fechaPrestamo
fechaDevolucion

constructor(usuario, fechaPrestamo, fechaDevolucion){
    this.usuario = usuario
    this.fechaPrestamo = fechaPrestamo
    this.fechaDevolucion = fechaDevolucion
    this.libro = [];
}
registrarLibros(libro){
    this.libro.push(libro)
}
verLibros(){
    for(let i=0; i<this.libro.length; i++){
        console.log(this.libro[i] + "fecha prestamo:" + this.fechaPrestamo + this.usuario)
    }
}
}

export default Prestamos