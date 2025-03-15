console.log("Ola, bem vindo ao banco , digite sua senha: ")
process.stdin.on('data', function (data,) {

    let input = Number(data)

    if (input < 10 || input > 600) {
        console.log("O valor do saque deve ser entre 10 e 600 reais.");
        return;
    }


    let cem = 0;
    let cinq = 0;
    let dez = 0;
    let cinco = 0;

    let resto = 0
    
    cem = parseInt(input / 100);
    resto = input % 100;

    cinq = parseInt(resto / 50);
    resto = resto % 50;

    dez = parseInt(input / 10);
    resto = input % 10;

    cinco = parseInt(resto / 5)
    resto = resto % 5;

    um = input


   

    console.log("nota de cem: " + cem)
    console.log("nota de cinq: " + cinq)
    console.log("nota de dez: " + dez)
    console.log("nota de cinco: " + cinco)
    console.log("nota de um: " + um)

})








