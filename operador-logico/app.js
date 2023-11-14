const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se você é maior de idade e tem habilitação para saber se você pode entrar no kart.');
console.log('Além da verificação precisamos verificar se você está na lista de presença de horário.');

readLine.question('Qual foi o ano do seu nascimento?', ano => {
    if (ano > 2005) {
        console.log('Você não tem 18 anos.');
    } else {
        readLine.question('Você tem habilitação? (Sim/Não)', temHabilitacao => {
            if (!(temHabilitacao.toUpperCase() === 'SIM')) {
                console.log('Você não tem habilitação para entrar no kart!')
            } else {
                readLine.question('Qual seu nome?', nome => {
                    switch(nome) {
                        case 'Douglas' :
                            console.log('Bem vindo ao kart Douglas!');
                            break;
                        case 'Felipe' :
                            console.log('Bem vindo ao kart Felipe!');
                            break;
                        default :
                            console.log('Seu nome não foi identificado na lista de presença.')
                    }
                })
            }
        })
    }
});