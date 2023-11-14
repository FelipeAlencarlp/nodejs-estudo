const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// função para requerir um número posso fazer da forma abaixo ou com a palavra reservada function no inicio
const validarNumeroInformado = (numero) => {
    const resultado = Number.parseFloat(numero);
    if(!resultado) {
        console.log('Número informado não é válido!');    
    }
    return resultado;
}

const validarOperador = (operador) => {
    switch(operador) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return operador;
        default:
            console.log('Operador informado é inválido!');
            return null;
    }
}

readLine.question('Por favor informe um número: ', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);

    if(numeroValidado1) {
        readLine.question('Favor informar outro número: ', (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2);

            if(numeroValidado2) {
                readLine.question('Favor informar o operador: ', (operador) => {
                    const operadorvalidado = validarOperador(operador);
                    if(operadorvalidado) {
                        switch(operadorvalidado) {
                            case '+': console.log(`Operador selecionado adição resultado ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                                break;
                            case '-': console.log(`Operador selecionado subtração resultado ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                                break;
                            case '*': console.log(`Operador selecionado multiplicação resultado ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                                break;
                            case '/': console.log(`Operador selecionado divisão resultado ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                                break;
                            case '%': console.log(`Operador selecionado módulo resultado ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                                break;
                            default: break;
                        }
                    }
                })
            }
        });
    }
});