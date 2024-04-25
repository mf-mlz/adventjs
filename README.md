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


<h1 align="center" id="title">Challenge #2: 🏭 Let's get the factory up and running</h1>

<ul id="description">In Santa's workshop, the elves have a list of gifts they wish to craft and a limited set of materials.
Gifts are strings of text and materials are characters. 
Your task is to write a function that, given a list of gifts and available materials, returns a list of gifts that can be made.
A gift can be made if we have all the necessary materials to make it.</ul>

[![image.png](https://i.postimg.cc/SRBDfnT2/image.png)](https://postimg.cc/wRkX6jdg)


<h2> Solution </h2>

```javascript
function manufacture(gifts, materials) {
    
    /* Formamos el arreglo de arreglos que contiene las letras y los Ordenamos [Al igual que el de los Materiales] */
    const auxGifts = gifts.map((element) => {
        return element.split('');
    });

    const auxMaterials = materials.split('');
    let auxPalabras = [];
    
    /* Recorremos y buscamos que contenga TODAS las Letras (Con Every) */
    auxGifts.map((gift) => {
        let todosPresentes = gift.every(elemento => auxMaterials.includes(elemento));
        if(todosPresentes){
            auxPalabras.push(gift.join(''));
        }
    });
    
    return auxPalabras;
}



```

<h1 align="center" id="title">Challenge #3: 😏 The Mischievous Elf</h1>

<ul id="description">In Santa's workshop, a mischievous elf has been tinkering in the gift-making chain, adding or removing an unplanned step.
You have the original sequence of steps in the original manufacturing and the modified modified sequence which may include an extra step or be missing a step.
Your task is to write a function that identifies and returns the first extra step that has been added or removed in the manufacturing chain. If there is no difference between the sequences, it returns an empty string.</ul>

[![image.png](https://i.postimg.cc/L55ZWf6X/image.png)](https://postimg.cc/q6fRhNKV)


<h2> Solution </h2>

```javascript
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
```
  
<h2>💻 Built with</h2>

Technologies used in the project:

[![My Skills](https://skills.thijs.gg/icons?i=js)](https://skills.thijs.gg)
