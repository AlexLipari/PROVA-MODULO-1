var numero = parseInt(prompt("insira um número:"))
console.log (avaliarNumero(numero))

function avaliarNumero (numeroParametro){
    if (numeroParametro% 2 == 0){
        return true
    }else {
        return false
    }
}