// var numero = parseInt(prompt("insira um número:"))
// console.log (avaliarNumero(numero))

// function avaliarNumero (numeroParametro){
//     if (numeroParametro% 2 == 0){
//         return true
//     }else {
//         return false
//     }
// }
// var contador =0
// var valor = prompt("insira um valor:")
// console.log("valor inserido:",valor)

// somaDovalor( )


// function somaDovalor (valorParametro, somaParametro){
    
     
// }
let arrayValores =[5,1,8]
contador =3

console.log(arrayValores)
ordenarValores()

function ordenarValores() {
    for (let atual = 0; atual < contador - 1; atual++) {
        for (let seguinte = atual + 1; seguinte < contador; seguinte++) {
            let arrayValoresAux   = arrayValores[atual]
            
            if (arrayValores[atual] > array[seguinte]) {
                arrayValores[atual] = arrayValores[seguinte]
                arrayValores[seguinte] = arrayValoresAux  
            }
        }
    }
    console.log(arrayValores)
}
// let arraynumeros = [4,6,7,8,9,10,12,13,14,15]
// let contador = 10
// console.log(arraynumeros)
// analizarValores()
// function analizarValores (parametroInferior,parametroSuperior){
//     for (let index = 0; index < contador; index++){
//         if (arraynumeros[index] <=5){
//             parametroInferior= arraynumeros[index]
//             arraynumeros[index]=0
            
//         } if(arraynumeros[index] >13){
//             parametroSuperior= arraynumeros[index]
//             arraynumeros[index]=0 
//         }

//     }
//     let arraynumeroAux = []
//     for (let index = 0; index < contador; index++){
//         if (arraynumeros[index] !=0){
//             arraynumeroAux[index] = arraynumeros[index]
//         }
//     }
//     contador--
//     arraynumeros = arraynumeroAux
//     console.log(arraynumeros)
}

