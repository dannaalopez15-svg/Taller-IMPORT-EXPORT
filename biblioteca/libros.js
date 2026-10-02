class Libros {
    nombre
    editorial
    autor

    constructor(nombre, editorial, autor) {
        this.nombre = nombre
        this.editorial = editorial
        this.autor = autor
    }

    registrarNombre(nuevoNombre) {
        this.nombre = nuevoNombre
    }

    registrarEditorial(nuevoEditorial) {
        this.editorial = nuevoEditorial
    }

    registrarAutor(nuevoAutor) {
        this.autor = nuevoAutor
    }

    verLibro() {
    console.log("Nombre:", this.nombre)
    console.log("Editorial:", this.editorial)
    console.log("Autor:", this.autor)
}
}

export default Libros;