function calculadora(op, x, y = 0){
    
    let result;

    if (op == "sum"){
        result = x + y;

    }else if ( op == "subs"){
        result = x - y;

    }else if ( op == "mult"){
        result = x * y;

    }else if ( op == "div"){
        result = x / y;

    }else{
        result = null
    }

    return result;
}
console.log(calculadora("sum",6,3));
console.log(calculadora("subs",6,3));
console.log(calculadora("mult",6,3));
console.log(calculadora("div",6,3));


const calculadora2 = (op, x, y = 0) => {

    let result2;

    if (op == "sum"){
        result2 = x + y;

    }else if ( op == "subs"){
        result2 = x - y;

    }else if ( op == "mult"){
        result2 = x * y;

    }else if ( op == "div"){
        result2 = x / y;

    }else{
        result2 = null
    }

    return result2;
}

console.log(calculadora2("sum",6,3));
console.log(calculadora2("subs",6,3));
console.log(calculadora2("mult",6,3));
console.log(calculadora2("div",6,3));