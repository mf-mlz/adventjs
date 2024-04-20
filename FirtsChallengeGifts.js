function findFirstRepeated2(gifts) {
    const giftIds = gifts;
    const repetidos = [];
    
    /* Recorremos el Arreglo para filtrar los números Repetidos y Creamos un arreglo con ellos  */
    for (let index = 0; index < giftIds.length; index++) {
        let result = giftIds.filter((item) => item == giftIds[index]);

        /*Si la Longitud de Result es mayor a 1 es porque encontró repetidos */
        if (result.length > 1) {
            repetidos.push(result[0])

        }

    }


    /* Quitamos los duplicados */
    const unicos = [... new Set(repetidos)];
    /* Si obtenemos más de un elemento en el arreglo es porque tenemos elementos duplicados, de lo contrario retornamos -1 */
    if (unicos.length > 0) {
        let posicions = [];

        /* Recorremos los Elementos duplicados y Obtenemos la última posición de este dentro del arreglo original */
        for (let index = 0; index < unicos.length; index++) {
            const element = unicos[index];
            const UltimaPosicion = giftIds.lastIndexOf(element);
            /* Almacenamos en un arreglo su última Posición y el elemento que es */
            let obj = {
                position: UltimaPosicion,
                element: element
            }
            posicions.push(obj);
        }

        /* Por último, Ordenamos con un sort el arreglo de las posiciones para Obtener desde la más pequeña hasta la más grande */
        posicions.sort((a, b) => a.position - b.position);

        /* Retornamos el elemento de la primera posición del arreglo porque es el primero que se encuentra en la lista cuando está duplicados */
        return posicions[0].element;
    } else {
        return -1;
    }


}

let itemB = findFirstRepeated2([2, 2]);
let itemA = findFirstRepeated2([2, 1, 3, 5, 3, 2]);
let itemC = findFirstRepeated2([2, 4, 3, 5, 1]);
let itemD = findFirstRepeated2([1, 3, 4, 5, 0, 1, 3, 0, 7]);
let itemE = findFirstRepeated2([]);
let itemF = findFirstRepeated2([10, 20, 30]);
let itemG = findFirstRepeated2([5, 1, 2, 3, 2, 5, 1]);
let itemH = findFirstRepeated2([1, 10, 2, 10, 20, 50, 7, 0, 0, 7]);
console.log(itemA, itemB, itemC, itemD, itemE, itemF, itemG, itemH);
