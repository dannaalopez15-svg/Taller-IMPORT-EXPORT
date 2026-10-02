class ClienteAlquiler {
    nombre
    documento
    telefono

    constructor(nombre, documento, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.telefono = telefono
    }

    verInfo() {
        console.log("Cliente: " + this.nombre + " - Doc: " + this.documento + " - Tel: " + this.telefono)
    }
}

export default ClienteAlquiler;