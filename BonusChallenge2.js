/* Haz una función que pida una frase y devuelva el número de palabras que tiene */

function returnNumberPhrase(phrase){
    const array = phrase.split(" ");
    return array.length;

}


const a = returnNumberPhrase("Hola Mundo");
const b = returnNumberPhrase("Hola Como Estas");
const c = returnNumberPhrase("Hola Me LLamo Fernanda Labra");

console.log(a);
console.log(b);
console.log(c);