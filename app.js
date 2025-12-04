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
const conta1 = new Conta(
  nome = "Taís Dias",
  saldo = 1000.00,
  pin = "1234"
)
console.log(conta1);

const conta2 = new Conta(
    nome = 'Daniel Moraes',
    saldo = 1500,
    pin = '135',
)
console.log(conta2);

const conta3 = new Conta(
  nome = "Tereza Dias",
  saldo = 10000.00,
  pin = "1357"
)
console.log(conta3);

const conta4 = new Conta(
    nome = 'Elane Assis',
    saldo = 3000,
    pin = '246',
)
console.log(conta4);



// Funções
function levantar(conta, valor, pin) {
    if (pin !== conta.pin) {
        console.log("pin incorreta.");
        return;
    }  if (valor > conta.saldo) {
        console.log("Saldo insuficiente.");
        return;
    }  
    conta.saldo -= valor;
    conta.historico.push({ tipo: 'levantamento', valor: valor });
}  

function depositar(conta, valor) {
    if (valor <= 0) {
        console.log("O valor do depósito deve ser positivo.");
    }
    conta.saldo += valor;
    conta.historico.push({tipo: 'depósito', valor: valor });
}

function consultarSaldo(conta, pin) {
    if (pin !== conta.pin) {
        console.log("pin incorreta.");
        return;
    }   else {
        console.log(`Saldo atual: € ${conta.saldo.toFixed(2)}`);
    }
}

