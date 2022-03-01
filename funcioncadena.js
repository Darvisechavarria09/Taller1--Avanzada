/*hacer una funcion donde entregue la cadena y retorne el nombre del piloto
CADENA--NOMBRE PILOTO
ABCF587:JUAN
KDGD400:PAOLA*/
 
/*//para imprimir el nombre del piloto
let nombre ='ABCF587: JUAN';
let arr = nombre.split(':');
console.log(arr[1]);*/

//funcion flecha =>
let nombrarpiloto =(cadenaTexto) => cadenaTexto.split(':')[1]
console.log(nombrarpiloto('GHFF245: DARVIS'))
