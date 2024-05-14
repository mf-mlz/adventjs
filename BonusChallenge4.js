/* Crea una función que rompa la tripa de camello utilizando un espacio entre la palabra */

function breackCamelCase(phrase){
    const phraseArray = phrase.split("");
    let arrayFinal = [];
    
    for (const item in phraseArray) {
        if(phraseArray[item] == phraseArray[item].toUpperCase()){
            arrayFinal.push(" ");
        }
        arrayFinal.push(phraseArray[item]);
    }

    return arrayFinal.join("");
      

    

}


const a = breackCamelCase("holaMundo");
const b = breackCamelCase("holaComoEstas");
const c = breackCamelCase("holaMeLlamoFernandaLabra");

console.log(a);
console.log(b);
console.log(c);