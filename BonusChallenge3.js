/* Imprime la Tabla de Mulstiplicar de un número N */

function returnTableMultipler(num){
    const array = [];

    for (let index = 1; index <= 10; index++) {
        let string = `${index} X ${num} = ${num * index}`
        array.push(string);
        
    }

    return array;
}


const a = returnTableMultipler(2);
const b = returnTableMultipler(20);
const c = returnTableMultipler(5);

console.log(a);
console.log(b);
console.log(c);