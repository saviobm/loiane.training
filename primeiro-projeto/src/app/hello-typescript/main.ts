var minhaVar = 'Minha variável.';

function minhaFunc(x, y) {
    return x + y;
}

//ES 6 OU ES 2015
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];
// JavaScrit comum
numeros.map(function(valor) {
    return valor * 2;
});
// AeroFunctions
numeros.map( valor => valor * 2 ); // ES 2015