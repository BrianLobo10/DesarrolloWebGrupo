function escribir(mensaje: string): void{
    console.log(mensaje);
}

escribir("CIUDADES DE COLOMBIA");
escribir("");

escribir("Definir un array de cadena");
let lista: string[] = ["Riohacha", "Valledupar", "Bogotá", "Medellín", "Santa Marta"];
console.log(lista); 
escribir("");

escribir("Definir un array de numeros");
let numbers: number[] = [1,2,3,4,5];
console.log(numbers);
escribir("");

escribir("Imprimir un elemento de la cadena lista");
let segundoLista: string = lista[1];
console.log(segundoLista)
escribir("");

escribir("Imprimir un elemto por su posición en el array");
lista[2]="Bogotá"
console.log(lista[2])
escribir("");

escribir("Se agrega un nuevo alemento al final del array ");
lista.push("Uniguajira");
console.log(lista);
escribir("");

escribir("Eliminar el ultimo elemento que se encuentra en el array");
lista.pop();
console.log(lista);
escribir("");

escribir("Agrega un nuevo elemento al inicio del array");
lista.unshift("Cali")
console.log(lista);
escribir("");

escribir("Elimina el primer elemento del array");
console.log(lista);
escribir("");

escribir("Elimina un rango de elementos a eliminar basado en un índice inicial y final ");
lista.splice(0,2)
console.log(lista);
escribir("");

escribir("Inserta un elemento en la posicion 1 de la lista");
lista.splice(1,0,'Base de Datos'); 
console.log(lista);

