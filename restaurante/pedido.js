class Pedido {
    fecha
    numeroPedido
    cliente

    constructor(fecha, numeroPedido, cliente) {
        this.fecha = fecha
        this.numeroPedido = numeroPedido
        this.cliente = cliente
        this.platos = []
    }

    agregarPlato(plato) {
        this.platos.push(plato)
    }

    verPedido() {
        console.log("Pedido #" + this.numeroPedido + " - Fecha: " + this.fecha + " - Cliente: " + this.cliente.nombre)
        console.log("Platos solicitados:")
        for (let i = 0; i < this.platos.length; i++) {
            this.platos[i].verPlato()
        }
    }
}

export default Pedido;