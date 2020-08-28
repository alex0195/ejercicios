
function getTotalX(a, b) {
    //Obtenemos solo el primer y ultimo valor de la matriz a considerando que: Los elementos de la matriz a son todos factores del número entero
    let primero = a[a.length -1]
    let ultimo = b[0]
    let numCumple = 0
    for(let x = primero; x <= ultimo; x++) {
        //Hacemos la comprobacion de que se cumplan dos condiciones
        if(a.every(val => (x % val == 0))) {
            if (b.every(val => (val % x == 0))) {
                numCumple++ //Si llegamos a este punto cumple con ambas condiciones
            }
        }
    }
    return numCumple //Retornamos el resultado
}

function validate(cant,a,b){
    let bandera = false
    let numCant = cant.split(' ')
    //Aseguranos los limites de la primera linea
    if(numCant.length == 2 && numCant[0] >= 1 && numCant[0] <= 10){
        var numA = a.split(' ')
        for(let i = 0; i < numA.length; i++){
            //Aseguranos los limites de la segunda linea
            numA[i] = parseInt(numA[i])
            bandera = numA[i] >= 1 && numA[i] <= 100 ? true : false
        }
        var numB = b.split(' ')
        for(let j = 0; j < numB.length; j++){
            numB[j] = parseInt(numB[j])
            //Aseguranos los limites de la tercera linea
            bandera = numB[j] >= 1 && numB[j] <= 100 ? true : false
        }
    }
    let respuesta = bandera ? 'Veces que cumple ' + getTotalX(numA,numB) : 'Los ingresos no cumplen las condiciones'
    return respuesta
}

function calcular(){
    var lineas = (document.getElementById('inputs')).value.split('\n')
    if(lineas.length == 3){
        let primeraLinea = lineas[0]
        let segundaLinea = lineas[1]
        let terceraLinea = lineas[2]
        let res = validate(primeraLinea,segundaLinea,terceraLinea)
        document.getElementById('res').innerHTML = res
    }else{
        document.getElementById('res').innerHTML = 'Debe Ingresar 3 lineas con los arrays'
    }
}

// const primeraLinea = '2 3' //Numero de elementos de a y b
// const segundaLinea = '2 4' //Elementos de a
// const terceraLinea = '16 32 96' //Elementos de b

