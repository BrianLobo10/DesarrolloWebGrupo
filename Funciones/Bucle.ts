// Iniciamos las variables
let suma = 0;
let contador = 1;

// Hacemos un bucle para sumar los primeros 10 numeros naturales
while (contador <= 10) {
    console.log("A " + suma + " se le suma " + contador)
    suma += contador; // Sumar el valor actual del contador a la suma
    contador++; // Incrementar el contador
}

// Mostrar el resultado por consola
console.log("La suma de los primeros 10 números naturales es: " + suma);
