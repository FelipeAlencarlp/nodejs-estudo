// uma boa prática em JS é começar declarando uma variável como CONST, se precisar mudar mais a frente muda para LET e em último caso mudar para VAR (como VAR é global fica ruim para o Programa).

// biblioteca do NODEJS para ajudar a ler algo na linha de comando
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
readLine.question('Informe sua idade:', input => {
    leituraDeCampo = input;
    console.log(`o usuário digitou: ${leituraDeCampo}`);
});