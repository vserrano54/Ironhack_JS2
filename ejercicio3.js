/*
3- LAMPARA NO ENCIENDE

Hacer 2 preguntas prompt (si/no). Se puede anidar dos condicionales 
(uno dentro de otro). Crear el código con condicionales para el algoritmo 
representado por el siguiente diagrama de flujo:

*/


document.write('<h1> Ejercicio 3 <h2>');
document.write('<h2> LAMPARA NO ENCIENDE <h2>');

let enchufada = prompt('¿Esta enchufada la lampara [S ó N]:?');

if (enchufada === "N"){
    alert('Enchufar Lampara');
}else{
    let quemado = prompt('¿Foco quemado [S ó N]:?');

    if (quemado === 'S'){
        alert('Reemplazar Foco');
    }
    else {
        alert('Comprar nueva lampara');
    }
}

