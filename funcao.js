

// função anonima

let mult = function(item1, item2){
    return item1 * item2
}

let soma = function(item1, item2){
    return item1 + item2
}

let sub = function(item1, item2){
    return item1 - item2
}

/**
 * 
 * @param {number} item1 
 * @param {number} item2 
 * @param {function} operacao 
 * @returns 
 */

function calc(item1, item2, operacao){
    return operacao(item1, item2)
}

console.log(calc(3,2, sub))

module.exports = soma;