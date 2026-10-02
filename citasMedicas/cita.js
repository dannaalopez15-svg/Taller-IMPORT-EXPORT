class Cita {
    fecha
    hora
    motivo
    paciente
    medico

    constructor(fecha, hora, motivo, paciente, medico) {
        this.fecha = fecha
        this.hora = hora
        this.motivo = motivo
        this.paciente = paciente
        this.medico = medico
    }

    verCita() {
        console.log("Fecha: " + this.fecha + " - Hora: " + this.hora)
        console.log("Motivo: " + this.motivo)
        console.log("Paciente: " + this.paciente.nombre + " (Doc: " + this.paciente.documento + ")")
        console.log("Médico: " + this.medico.nombre + " (Especialidad: " + this.medico.especialidad + ")")
    }
}

export default Cita;