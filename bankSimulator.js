// BankSimulator
class Conta {
    constructor(nome, saldo, pin) {
        this.nome = nome;
        this.saldo = saldo;
        this.pin = pin;
        this.historico = [];
    }
}


// Criação das contas
const conta1 = new Conta("Taís Dias", 1000, "1234");
const conta2 = new Conta("Daniel Moraes", 1500, "135");
const conta3 = new Conta("Tereza Dias", 10000, "1357");
const conta4 = new Conta("Elane Assis", 4600, "246");

// array de contas (penso que seria mais interessante criar uma função criarContas, que "criasse as novas contas" e fizesse um push neste array)
const contas = [conta1, conta2, conta3, conta4];
//array para armazenar todas as operações de levantamento e transferência
const extratoGlobal = [];
//valor para ser cliente VIP
const valorMinimoVip = 5000;
// Mensagens comuns
const pinIncorreto = "PIN incorreto.";
const saldoInsuficiente = "Saldo insuficiente.";

// Funções
function levantar(conta, valor, pin) {
    let mensagemSucesso = `Levantamento no valor de ${valor.toFixed(2)} € efetuado com sucesso.`;
    if (pin !== conta.pin) {
        return pinIncorreto;
    }  if (valor > conta.saldo) {
        return saldoInsuficiente;
    }  
    conta.saldo -= valor;
    conta.historico.push({tipo: "Levantamento", valor: valor.toFixed(2)});
    extratoGlobal.push({tipo: "Levantamento", valor: valor.toFixed(2), nome: conta.nome});
    return mensagemSucesso;
}


function depositar(conta, valor) {
    let mensagemValor = "O valor do depósito deve ser acima de 0 €";
    let mensagemDeposito = `Depósito no valor de ${valor.toFixed(2)} € efetuado com sucesso.`;
    if (valor <= 0) {
        return mensagemValor;
    }
    conta.saldo += valor;
    conta.historico.push({tipo: "Depósito", valor: valor.toFixed(2) });
    return mensagemDeposito;
}


function consultarSaldo(conta, pin) {
    let mensagemSaldo = `Saldo atual: ${conta.saldo.toFixed(2)} €`;
    if (pin !== conta.pin) {
        return pinIncorreto;
    }   else {
        conta.historico.push({tipo: "Consultar saldo"});
        return mensagemSaldo;
    }
}


function transferencia(contaOrigem, contaDestino, valor, pin) {
    let transferenciaRealizada = `Transferência de ${contaOrigem.nome}, no valor de ${valor.toFixed(2)} € para ${contaDestino.nome} efetuada com sucesso.`;

    if (pin !== contaOrigem.pin) {
        return pinIncorreto;
    } if (valor > contaOrigem.saldo) {
        return saldoInsuficiente;
    }
    contaOrigem.saldo -= valor;
    contaDestino.saldo += valor;
    contaOrigem.historico.push({tipo: "Transfêrencia - enviada", valor: valor.toFixed(2)});
    extratoGlobal.push({tipo: "Transfêrencia - enviada", valor: valor.toFixed(2), nome: contaOrigem.nome});
    contaDestino.historico.push({tipo: "Transfêrencia - recebida", valor: valor.toFixed(2)});
    extratoGlobal.push({tipo: "Transfêrencia - recebida", valor: valor.toFixed(2), nome: contaDestino.nome});
    return transferenciaRealizada;
}


 function alterarPin(conta, pin, novoPin) {
    let novoPinInvalido = "Não foi possível alterar o seu PIN";
    let pinAlterado = `${conta.nome}, seu PIN foi alterado com sucesso`;

    if (conta.pin !== pin) {
        return pinIncorreto;
    }
    if (!novoPin || novoPin === 0) {
        return novoPinInvalido;
    }
    conta.pin = novoPin;
    conta.historico.push({tipo: "Alteração de senha"});
    return pinAlterado;
 }


 function capitalTotal(arrContas) {
    const total = arrContas.reduce((acc, t) => acc + t.saldo, 0);
    let somaTotal = `Capital Total: ${total.toFixed(2)} €`;
    return somaTotal;
 }


function clientesVip(contas) {
    let nenhumVip = "Nenhum cliente VIP encontrado";
    let listaVip = ""
    // verifica as contas que possuem saldo acima do valor mínimo
    const contasVip = contas.filter(c => c.saldo >= valorMinimoVip)
    // caso ninguém tenha o valor mínimo em conta
    if (contasVip.length === 0) {
        return nenhumVip;
    }
    // extrai apenas os nomes dos titulares das contas VIP
    const titulares = contasVip.map(c =>c.nome);
    console.log("Lista de Clientes VIP");
    for (let i = 0; i < titulares.length; i++) {
        listaVip += `O(a) cliente ${titulares[i]} faz parte do grupo VIP\n`;
    }
    return listaVip;
}


// Função para exibir o extrato global
function exibirExtratoGlobal() {
    let resultado = "";

    for (let i = 0; i < extratoGlobal.length; i++) {
        const operacao = extratoGlobal[i];
        resultado += `${operacao.nome} - ${operacao.tipo}: ${operacao.valor} €\n`;
    }
    return resultado;
}

// Uma das operações adicionais
function poupanca(conta, pin) {
    if (pin !== conta.pin) {
        return pinIncorreto;
    }
    if (conta.saldo <= 0) {
        return saldoInsuficiente;
    }
    const percentual = 6.17;
    let rendimento = conta.saldo * (percentual / 100);
    conta.saldo += rendimento;  
    conta.historico.push({tipo: "Poupança", valor: rendimento.toFixed(2)});
    let mensagemRendimento = `A sua poupança rendeu ${rendimento.toFixed(2)} €`;
    return mensagemRendimento;
}

//Segunda operação adicional consulta para verificar taxa de câmbio para eventual conversão
function consultaEuroReal(valorEuro) {
    let mensagemConversao = `O valor de ${valorEuro.toFixed(2)} € convertido para reais é R$ ${valorConvertido.toFixed(2)}`;
    const taxaCambio = 6.20;
    let valorConvertido = valorEuro * taxaCambio;
    return mensagemConversao;
}


// Terceira operação adicional (avisar quanto falta para se tornar um cliente VIP)
function avisoClienteVip(conta) {
    let voceVip = `Parabéns ${conta.nome}, você é um cliente VIP!`;
    let quaseVip = `Olá ${conta.nome}, você não é um cliente VIP. Deposite mais ${ (valorMinimoVip - conta.saldo).toFixed(2)} € para se tornar um!`;
    if (conta.saldo >= valorMinimoVip) {
        return voceVip;
    } else {
        return quaseVip;
    }
}

// Função principal para testar as funcionalidades
function main () {
    // Testes
    console.log("Levantamento");
    console.log(levantar(conta1, 100, "1134")); // pin incorreto
    console.log(levantar(conta2, 2000, "135")); // saldo insuficiente
    console.log(levantar(conta3, 150, "1357")); // levantamento efetuado com sucesso
    console.log(conta3); // exibe a conta com o saldo atualizado


    console.log("\nDepósito");
    console.log(depositar(conta2, 0));   // deposito com valor igual a 0
    console.log(depositar(conta4, 500)); // depósito efetuado
    console.log(depositar(conta4, 300)); // depósito efetuado
    console.log(depositar(conta3, 100)); // depósito efetuado
    console.log(depositar(conta1, 200)); // depósito efetuado
    console.log(depositar(conta2, 400)); // depósito efetuado
    console.log(conta4);    // exibe a conta com o saldo atualizado


    console.log("\nConsulta de Saldo");
    console.log(consultarSaldo(conta2, "125"));  // solicita o saldo, com PIN incorreto
    console.log(consultarSaldo(conta4, "246"));  // PIN correto, exibe o saldo


    console.log("\nTransferência");
    console.log(transferencia(conta1, conta4, 250, "1234"));  //faz a transferÊncia
    console.log(transferencia(conta2, conta3, 10000, "135")); // saldo insuficiente
    console.log(conta1);    // exibe as contas com os saldos atualizados
    console.log(transferencia(conta1, conta2, 50, "1234")); //faz a transferÊncia

    console.log("\nAlteração do PIN");
    console.log(alterarPin(conta3, "1356", "1122")); // pin inválido
    console.log(alterarPin(conta1, "1234"));         // novoPin vazio
    console.log(alterarPin(conta1, "1234", "0987")); // alteração efetuada
    console.log(conta1);                // exibe a conta com o pin alterado


    console.log("\nCapital Total");
    console.log(capitalTotal(contas));


    console.log("\nClientesVIP");
    console.log(clientesVip(contas));


    console.log("\nPoupança");
    console.log(poupanca(conta1, "1233"));// pin incorreto
    console.log(poupanca(conta4, "246")); //saldo poupança atualizado
    console.log(poupanca(conta2, "135")); //saldo poupança atualizado
    console.log(conta2);


    console.log(conta1);
    console.log(conta2);
    console.log(conta3);
    console.log(conta4);

    console.log("\nConsulta Extrato Global");
    console.log(exibirExtratoGlobal());
}

main();