<h1 align="center" id="title">Challenge #1: 🎁 First gift repeated!</h1>

<ul id="description">In the toy factory of the North Pole each toy has a unique identification number. However due to an error in the toy machine some numbers have been assigned to more than one toy. Find the first identification number that has been repeated where the second occurrence has the smallest index! In other words if there is more than one repeated number you must return the number whose second occurrence appears first in the list. If there are no repeated numbers return -1.</ul>

[![image.png](https://i.postimg.cc/7Yq4Gs83/image.png)](https://postimg.cc/PNV90MqJ)


<h2> Solution </h2>

```javascript
function findFirstRepeated(gifts) {
    const giftIds = gifts;
    const repetidos = [];
    let key = null;

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
        let item = null;
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

```
  
<h2>💻 Built with</h2>

Technologies used in the project:

[![My Skills](https://skills.thijs.gg/icons?i=js)](https://skills.thijs.gg)
