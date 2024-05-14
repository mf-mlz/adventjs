/* REGRESAR LA SUMA MÁS GRANDE DE NÚMEROS SUCESIVOS CON IF */
const array = [2, 4, 1, 5, 6, 3];
let suma = 0;
let final = 0;

for (let index = 0; index < array.length; index++) {
    
    suma = array[index] + array[index - 1];
    
    if(suma > array[index - 1] + array[index - 2]){
        final = suma;
    }
    
}


console.log(final);


/* REGRESAR LA SUMA MÁS GRANDE DE NÚMEROS SUCESIVOS SIN IF */
suma = 0;
final = 0;
let arraySum = [];

for (let index = 0; index < array.length; index++) {
    
    let indexBefore = array[index - 1] == undefined ? 0 : array[index - 1];
    suma = array[index] + indexBefore;
    arraySum.push(suma);
    
}

const max = arraySum.reduce(function (a, b) {
    return Math.max(a, b);
  }, -Infinity);

  console.log(max);
