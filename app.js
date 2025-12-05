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
const conta2 = new Conta('Daniel Moraes', 1500, '135');
const conta3 = new Conta("Tereza Dias", 10000, "1357");
const conta4 = new Conta('Elane Assis', 4600, '246');

// array de contas (penso que seria mais interessante criar uma função criarContas, que "criasse as novas contas" e fizesse um push neste array)
const contas = [conta1, conta2, conta3, conta4];
//array para armazenar todas as operações de levantamento e transferência
const extratoGlobal = [];
//valor para ser cliente VIP
const valorMinimoVip = 5000;

// Funções
function levantar(conta, valor, pin) {
    if (pin !== conta.pin) {
        console.log("PIN incorreto.");
        return;
    }  if (valor > conta.saldo) {
        console.log("Saldo insuficiente.");
        return;
    }  
    conta.saldo -= valor;
    conta.historico.push({tipo: "Levantamento", valor: valor.toFixed(2)});
    extratoGlobal.push({tipo: "Levantamento", valor: valor.toFixed(2), nome: conta.nome});
}


function depositar(conta, valor) {
    if (valor <= 0) {
        console.log("O valor do depósito deve ser acima de 0 €");
        return;
    }
    conta.saldo += valor;
    conta.historico.push({tipo: "Depósito", valor: valor.toFixed(2) });
    console.log(`Depósito no valor de ${valor.toFixed(2)} € efetuado com sucesso`);
}


function consultarSaldo(conta, pin) {
    if (pin !== conta.pin) {
        console.log("PIN incorreto");
        return;
    }   else {
        console.log(`Saldo atual: ${conta.saldo.toFixed(2)} €`);
        conta.historico.push({tipo: "Consultar saldo"});
    }
}


function transferencia(contaOrigem, contaDestino, valor, pin) {
    if (pin !== contaOrigem.pin) {
        console.log("PIN incorreto");
        return;
    } if (valor > contaOrigem.saldo) {
        console.log("Saldo insuficiente");
        return;
    }
    contaOrigem.saldo -= valor;
    contaDestino.saldo += valor;
    console.log(`Transferência de ${contaOrigem.nome}, no valor de ${valor.toFixed(2)} € para ${contaDestino.nome} efetuada com sucesso.`);
    contaOrigem.historico.push({tipo: "Transfêrencia - enviada", valor: valor.toFixed(2)});
    extratoGlobal.push({tipo: "Transfêrencia - enviada", valor: valor.toFixed(2), nome: contaOrigem.nome});
    contaDestino.historico.push({tipo: "Transfêrencia - recebida", valor: valor.toFixed(2)});
    extratoGlobal.push({tipo: "Transfêrencia - recebida", valor: valor.toFixed(2), nome: contaDestino.nome});
}


 function alterarPin(conta, pin, novoPin) {
    if (conta.pin !== pin) {
        console.log("PIN inválido");
        return;
    }
    if (!novoPin || novoPin === 0) {
        console.log("Não foi possível alterar o seu PIN");
        return;
    }
    conta.pin = novoPin;
    console.log(conta.nome + ", seu PIN foi alterado com sucesso");
    conta.historico.push({tipo: "Alteração de senha"});
 }


 function capitalTotal(arrContas) {
    const total = arrContas.reduce((acc, t) => acc + t.saldo, 0);
    console.log(`Capital Total: ${total.toFixed(2)} €`);
 }


function clientesVip(arrayContas) {
    // verifica as contas que possuem saldo acima do valor mínimo
    const contasVip = arrayContas.filter(c => c.saldo >= valorMinimoVip)
    // caso ninguém tenha o valor mínimo em conta
    if (contasVip.length === 0) {
        console.log("Nenhum cliente VIP encontrado");
        return;
    }
    // extrai apenas os nomes dos titulares das contas VIP
    const titulares = contasVip.map(c =>c.nome);
    console.log("Lista de Clientes VIP");
    for (let i = 0; i < titulares.length; i++) {
        console.log(`O(a) cliente ${titulares[i]} faz parte do grupo VIP`);
    }
}

// Função para exibir o extrato global
function exibirExtratoGlobal() {
    for (let i = 0; i < extratoGlobal.length; i++) {
        const operacao = extratoGlobal[i];
        console.log(`${operacao.nome} - ${operacao.tipo}: ${operacao.valor} €`);
    }
}

// Uma das operações adicionais
function poupanca(conta, pin) {
    if (pin !== conta.pin) {
        console.log("PIN inválido");
        return;
    }
    if (conta.saldo <= 0) {
        console.log("Saldo insuficiente");
        return;
    }
    const percentual = 6.17;
    let rendimento = conta.saldo * (percentual / 100);
    console.log(`A sua poupança rendeu ${rendimento.toFixed(2)} €`);
    conta.saldo += rendimento;  
    conta.historico.push({tipo: "Poupança", valor: rendimento.toFixed(2)});
    extratoGlobal.push({tipo: "Poupança", valor: rendimento.toFixed(2), nome: conta.nome});
}

// Segunda operação adicional (avisar que chegou ao limite de consultas de saldo sem custos para o cliente)
function quantidadeConsultaSaldo(conta) {
    let contador = 0;
    for (let i = 0; i < conta.historico.length; i++) {
        if (conta.historico[i].tipo === "Consultar saldo") {
            contador++;
        }
    }
        if (contador >= 3) {
            console.log(`Atenção ${conta.nome}, você já consultou seu saldo ${contador} vezes. Atingiu o limite de consultas gratuitas neste mês. Será cobrada uma taxa de 2 € por cada consulta adicional.`);
        } 
    return contador;
    }

// Terceira operação adicional (avisar quanto falta para se tornar um cliente VIP)
function avisoClienteVip(conta) {
    if (conta.saldo >= valorMinimoVip) {
        console.log(`Parabéns ${conta.nome}, você é um cliente VIP!`);
    } else {
        console.log(`Olá ${conta.nome}, você não é um cliente VIP. Deposite mais ${ (valorMinimoVip - conta.saldo).toFixed(2)} € para se tornar um!`);
    }
}

avisoClienteVip(conta4);


/*function main () {
    // Testes
    console.log("Levantamento");
    levantar(conta1, 100, "1134"); // pin incorreto
    levantar(conta2, 2000, "135"); // saldo insuficiente
    levantar(conta3, 150, "1357"); // levantamento efetuado com sucesso
    console.log(conta3);


    console.log("\nDepósito");
    depositar(conta2, 0);   // deposito com valor igual a 0
    depositar(conta4, 500); // depósito efetuado
    console.log(conta4);    // exibe a conta com o saldo atualizado


    console.log("\nConsulta de Saldo");
    consultarSaldo(conta2, "125");  // solicita o saldo, com PIN incorreto
    consultarSaldo(conta4, "246");  // PIN correto, exibe o saldo


    console.log("\nTransferência");
    transferencia(conta1, conta4, 250, "1234");  //faz a transferÊncia
    console.log(conta1);    // exibe as contas com os saldos atualizados
    console.log(conta4);


    console.log("\nAlteração do PIN");
    alterarPin(conta3, "1356", "1122"); // pin inválido
    alterarPin(conta1, "1234");         // novoPin vazio
    alterarPin(conta1, "1234", "0987"); // alteração efetuada
    console.log(conta1);                // exibe a conta com o pin alterado


    console.log("\nCapital Total");
    capitalTotal(contas);


    console.log("\nClientesVIP");
    clientesVip(contas);


    console.log("\nPoupança");
    poupanca(conta1, "1233");
    poupanca(conta2, "135");
    console.log(conta2);


    console.log(conta1);
    console.log(conta2);
    console.log(conta3);
    console.log(conta4);
}

main();


exibirExtratoGlobal();*/
