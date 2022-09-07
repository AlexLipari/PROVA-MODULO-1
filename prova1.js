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
contador =0
cadastrarNumeros()
console.log(arrayValores)
ordenar()
function cadastrarNumeros(){
    arrayValores[contador] 
    contador++
}

function ordenar() {
    for (let atual = 0; atual < contador - 1; atual++) {
        for (let seguinte = atual + 1; seguinte < contador; seguinte++) {
            let arrayValoresAux   = arrayValores[atual]
            
            if ([atual] > [seguinte]) {
                arrayValores[atual] = arrayValores[seguinte]
                arrayValores[seguinte] = arrayValoresAux  
            }
        }
    }
    console.log(arrayValores)
}