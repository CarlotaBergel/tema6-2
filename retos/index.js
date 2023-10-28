
function suma (x, y, j){
    let result = x + y +j;
    return result;
}

function resta (x, y){
    let result = x - y;
    return result;
}

function mult (x, y){
    let result = x * y;
    return result;
}

function div (x, y){
    let result = x / y;
    return result;
}
function cuadrado (n)
{
    let resultado = Math.sqrt(n);
    return resultado
}


module.exports = {suma,resta, mult, div, cuadrado};