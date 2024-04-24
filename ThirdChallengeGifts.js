/* En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, 
añadiendo o eliminando un paso no planificado.
Tienes la secuencia original de pasos en la fabricación original y 
la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se 
ha añadido o eliminado en la cadena de fabricación. 
Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía. */

function findNaughtyStep(original, modified) {

    const arrayOriginal = original.split("");
    const arrayModified = modified.split("");
    const condition = (arrayOriginal.length > arrayModified.length) ? true : false;
    const arrayMax = condition ? arrayOriginal : arrayModified;
    const arrayMin = !condition ? arrayOriginal : arrayModified;

    
    
    for (let index = 0; index < arrayMax.length; index++) {
        if(arrayMax[index] != arrayMin[index]){
            return arrayMax[index];
        }
        
    }

    return '';

}


const original = 'iiiii'
const modified = 'iiiii'
const o1 = 'abcde'
const m1 = 'abcd'
const o2 = 'abcd'
const m2 = 'abcde'
const o3 = 'stepfor'
const m3 = 'stepor'
const o4 = 'abcd'
const m4 = 'acbd'
const o5 = ''
const m5 = 'acbd'
console.log(
     "1>>", findNaughtyStep(original, modified), // ''
     "2>>", findNaughtyStep(o1, m1), // 'e'
    "3>>", findNaughtyStep(o2, m2), // 'e'
    "4>>", findNaughtyStep(o3, m3), // 'f'
     "5>>", findNaughtyStep(o4, m4), // 'b'
     "6>>", findNaughtyStep(o5, m5) // 'a'
);
console.log("1>>  2>> e 3>> e 4>> f 5>> c 6>> a");