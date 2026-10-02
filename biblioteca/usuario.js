import Prestamos from"./prestamos.js"
class Usuarios{
nombres
apellido
direccion
telefono
constructor(nombres, apellido, direccion, telefono){
    this.nombres = nombres
    this.apellido = apellido
    this.direccion = direccion
    this.telefono = telefono
}
verinfo(){
    console.log("el usuario es:" + this.nombres + " " + this.apellido) 
}
}

export default Usuarios

