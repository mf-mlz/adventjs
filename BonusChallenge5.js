/*
    Crea una función que devuelva true si toda la cadena está en mayúsculas, y false si no lo está
*/

function uppercaseValidator(phrase){
    
    if(!phrase){
        return false;
    }

    const arrayPhrase = phrase.split("");
    const validation = (value) => value == value.toUpperCase();
    
    return arrayPhrase.every(validation);

    
}


const a = uppercaseValidator("HOLA COMO ESTAS");
const b = uppercaseValidator(null);
const c = uppercaseValidator("Hola Me LLamo Fernanda Labra");

console.log(a);
console.log(b);
console.log(c);