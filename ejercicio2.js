
function migratoryBirds(arr) {
    let numVeces = 0
        let str = arr.join('') //Unimos el array
        let res
        //Creamos arrays temporales y limitamos que sean del 1 al 5
        [1,2,3,4,5].map(num => {
            let len = str.replace(new RegExp(`[^${num}]`,'g'),'').length
            if (new RegExp(`${num}`).test(str) && len > numVeces) {
                numVeces = len
                res = num
            }
        })
        return res
    }
    
function validate(num,arr){
    let limBajo = 5
    let eleLimAlto = [2,10,5]
    var potencia = eleLimAlto[1]
    for(let i = 1; i <= eleLimAlto[2]; i++){
        potencia = potencia * eleLimAlto[1]
    }
    let limAlto = potencia * eleLimAlto[0]
    let bandera = false    
    //Aseguranos los limites de la primera linea
    if(num >= limBajo && num <= limAlto){
        bandera = true
    }
    //Aseguranos que coincida la numeracion
    if(arr.length != parseInt(num)){
        bandera = false
    }

    
    let respuesta = bandera ? 'El numero de ave mas común es ' + migratoryBirds(arr) : 'Los ingresos no cumplen las condiciones'
    return respuesta
}

function calcular(){
    //Leemos las lineas del input y la separamos
    var lineas = (document.getElementById('inputs')).value.split('\n')
    if(lineas.length == 2){
        let primeraLinea = lineas[0]
        let segundaLinea = lineas[1].split(' ')
        let res = validate(primeraLinea,segundaLinea)
        document.getElementById('res').innerHTML = res
    }else{
        document.getElementById('res').innerHTML = 'Debe Ingresar 2 lineas'
    }
}

