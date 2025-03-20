/*
    2 - CINCO COLORES

Se le pide al usuario que escoja un color (azul, verde, rojo, amarillo y violeta)
y darle una respuesta en relación al color elegido. Ejemplo: "el azul es como el mar, 
siempre que el cielo sea azul (y sea de día)".
Dar otra respuesta en el caso que NO elija ninguno de los colores anteriores.
*/

document.write('<h1> Ejercicio 2 <h2>');
document.write('<h2> CINCO COLORES <h2>');

let color = parseInt(prompt("Seleccione un color:\nDigite el número que corresponde al colo [1,2,3,4 ó 5]: \n \n1 --> Azul \n2 -->Verde \n3 --> Rojo \n4 -->Amarillo\n5 -->violeta" ));
if ((color == 1) || (color == 2) || (color == 3) || (color == 4) || (color == 5)){
    document.write('<h2> El azul es como el mar, siempre que el cielo sea azul (y sea de día)<h2>');
}else{
    document.write('<h2> NO elija ninguno de los colores anteriores <h2>');
}