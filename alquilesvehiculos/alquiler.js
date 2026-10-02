class Alquiler {
    fechaInicio
    fechaFinalizacion
    cliente
    vehiculo

    constructor(fechaInicio, fechaFinalizacion, cliente, vehiculo) {
        this.fechaInicio = fechaInicio
        this.fechaFinalizacion = fechaFinalizacion
        this.cliente = cliente
        this.vehiculo = vehiculo
    }

    verAlquiler() {
        console.log("Fecha Inicio: " + this.fechaInicio + " | Fecha Fin: " + this.fechaFinalizacion)
        console.log("Cliente: " + this.cliente.nombre + " (Doc: " + this.cliente.documento + ")")
        this.vehiculo.verVehiculo()
    }
}

export default Alquiler;