class Plato {
    nombre
    categoria
    precio
    disponibilidad

    constructor(nombre, categoria, precio, disponibilidad) {
        this.nombre = nombre
        this.categoria = categoria
        this.precio = precio
        this.disponibilidad = disponibilidad
    }

    verPlato() {
        console.log( this.nombre + " | Categoria: " + this.categoria + " | Precio: $" + this.precio + " | Disponible: " + (this.disponibilidad ? "Sí" : "No"))
    }
}

export default Plato;