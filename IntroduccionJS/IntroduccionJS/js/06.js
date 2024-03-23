//Objeto Math

let resultado;

resultado = Math.PI;
resultado = Math.round(2.2);
resultado = Math.ceil(2.2); //ceil siempre redondea hacia arriba si es 2.2 redondea a 3
resultado = Math.floor(2.9);//floor siempre redondea hacia abajo si es 2.9 redondea a 2
resultado = Math.sqrt(144); //esto saca la raiz de 144 que es 12
resultado = Math.abs(-200); //esto convierte en absoluto numero negativos en positivos
resultado = Math.min(3, 5, 1, 8, 2, 10); //busca el menor numero
resultado = Math.max(3, 5, 1, 8, 2, 10);//busca el mayor numero
resultado = Math.random(); //genera un numero random de 0 a 1
resultado = Math.floor(Math.random()*30); //con don funciones se logra un numero random de 0 a 30

console.log(resultado)
