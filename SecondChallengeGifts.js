/* Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, 
devuelva una lista de los regalos que se pueden fabricar.
Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo. */


function manufacture(gifts, materials) {
    
    /* Formamos el arreglo de arreglos que contiene las letras y los Ordenamos [Al igual que el de los Materiales] */
    const auxGifts = gifts.map((element) => {
        return element.split('');
    });

    const auxMaterials = materials.split('');
    let auxPalabras = [];
    
    auxGifts.map((gift) => {
        let todosPresentes = gift.every(elemento => auxMaterials.includes(elemento));
        if(todosPresentes){
            auxPalabras.push(gift.join(''));
        }
    });
    
    return auxPalabras;
}


const manufacture1 = manufacture(['tren', 'oso', 'pelota'], 'tronesa');
console.log("-----------------------");
const manufacture2 = manufacture(['juego', 'puzzle'], 'jlepuz');
console.log("-----------------------");
const manufacture3 = manufacture(['libro', 'ps5'], 'psli');
console.log("-----------------------");
// const manufacture4 = manufacture(['tren', 'oso', 'pelota'], 'tronesa');
// const manufacture5 = manufacture(['tren', 'oso', 'pelota'], 'tronesa');
// const manufacture6 = manufacture(['tren', 'oso', 'pelota'], 'tronesa');
// const manufacture7 = manufacture(['tren', 'oso', 'pelota'], 'tronesa');
// const manufacture8 = manufacture(['tren', 'oso', 'pelota'], 'tronesa');

console.log(manufacture1, manufacture2, manufacture3);