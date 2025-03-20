/*
    1- ENTRADA DISCOTECA
    A la entrada a una discoteca, se pregunta al cliente qué edad tiene. Darle una respuesta diferente si la edad es mayor, menor o igual a 18 años.
*/

document.write('<h1> Ejercicio 1 <h2>');
document.write('<h2> ENTRADA DISCOTECA <h2>');

let edad = parseInt(prompt("¿Qué edad tiene: ?" ));

if (edad > 18){
    document.write(`<h2> Uste tiene la edad suficiente para entrar a la Discoteca </h2> `);
}else{
    document.write(`<h2> Usted No tiene edad suficiente para entrar a la Discoteca </h2> `);
}


