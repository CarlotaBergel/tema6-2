function crearVector(n,m)
{
    let number=[]
    for(let v = 0; v < n; v++){
        number.push(Math.floor(Math.random() * m));
    }
    return number;
}

function sumaVector(v1,v2)
{
    let v3 = []
     
    // if(v1.length == v2.length){

    //     for(let i = 0; i < v1.length; i++){
    //         v3.push(v1[i]+v2[i])
    //     }       
    // }

    // v1.forEach(
    //     function(valorv1, indice){

    //         console.log(valorv1)
    //         v3.push(valorv1 + v2[indice]);
    //     }
    // )

    v1.map(
        function(valorv1, indice)
        {
            console.log(valorv1)
            v3.push(valorv1 + v2[indice]);
        })

    return v3;
}


function productoNumeroVector(n,v)
{
    let producto = [];
     
    for(let i = 0; i < v.length; i++){
        producto.push(n * v[i]);
    }       
    return producto;
}

function restaVector(v1,v2)
{
    let v3 = []
     
    if(v1.length == v2.length){

        for(let i = 0; i < v1.length; i++){
            v3.push(v1[i]-v2[i])
        }       
    }
    return v3;
}

function productoVector(v1,v2)
{
    let producto = [];

    if(v1.length == v2.length){

        for(let i = 0; i < v1.length; i++){
            producto.push(v1[i] * v2[i])
        }       
    }
    return producto;
}

let v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filtrarPares = v.filter(number => number % 2 == 0);

console.log(filtrarPares);

let sumatorio = v.reduce(
 
    function (acumulator, value)
    {
        return acumulator + value
    })

console.log(sumatorio);


module.exports= {crearVector, sumaVector, productoNumeroVector, restaVector, productoVector}