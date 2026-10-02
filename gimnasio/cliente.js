class Cliente {
    nombre
    documento
    telefono
    edad

    constructor(nombre, documento, telefono, edad) {
        this.nombre = nombre
        this.documento = documento
        this.telefono = telefono
        this.edad = edad
        this.rutinas = []
    }

    asignarRutina(rutina) {
        this.rutinas.push(rutina)
    }

    verRutinas() {
        console.log("Rutinas asignadas a " + this.nombre + ":")
        for (let i = 0; i < this.rutinas.length; i++) {
            this.rutinas[i].verRutina()
        }
    }

    verInfo() {
        console.log("Cliente: " + this.nombre + " - Doc: " + this.documento + " - Tel: " + this.telefono + " - Edad: " + this.edad)
    }
}

export default Cliente;