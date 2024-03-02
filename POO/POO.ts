class Paciente {
    nombre: string;
    edad: number;
    enfermedades: string[];
  
    constructor(nombre: string, edad: number) {
      this.nombre = nombre;
      this.edad = edad;
      this.enfermedades = [];
    }
  
    agregarEnfermedad(enfermedad: string) {
      this.enfermedades.push(enfermedad);
    }
  
    imprimirHistorial() {
      console.log(`Historial médico de ${this.nombre}:`);
      console.log(`Edad: ${this.edad}`);
      console.log("Enfermedades:");
      this.enfermedades.forEach(enfermedad => {
        console.log("- " + enfermedad);
      });
    }
  }
  
  const enfermedadesComunes: string[] = ["Resfriado", "Gripe", "Alergia", "Hipertensión", "Diabetes"];
  
  function obtenerNumeroAleatorio(max: number): number {
    return Math.floor(Math.random() * max);
  }
  
  function crearPacienteAleatorio(): Paciente {
    const nombre = "Paciente: " + obtenerNumeroAleatorio(1000); 
    const edad = obtenerNumeroAleatorio(81);
    const paciente = new Paciente(nombre, edad);
    const enfermedadAleatoria = enfermedadesComunes[obtenerNumeroAleatorio(enfermedadesComunes.length)];
    paciente.agregarEnfermedad(enfermedadAleatoria);
    return paciente;
  }
  
  const paciente: Paciente = crearPacienteAleatorio();
  
  console.log("--------------------------------------");
  paciente.imprimirHistorial();