// BankSimulator

const conta1 = new Conta(
  nome = "Taís Dias",
  saldo = 1000.00,
  senha = "1234"
)
console.log(conta1);


const conta3 = new Conta(
  nome = "Tereza Dias",
  saldo = 10000.00,
  senha = "1357"
)
console.log(conta3);






class Conta {
    constructor(nome, saldo, senha) {
        this.nome = nome;
        this.saldo = saldo;
        this.senha = senha;
        this.historico = [];
    }
}

const conta2 = new Conta(
    nome = 'Daniel Moraes',
    saldo = 1500,
    senha = '135',
)
console.log(conta2);

const conta4 = new Conta(
    nome = 'Elane Assis',
    saldo = 3000,
    senha = '246',
)
console.log(conta4);

function levantar(conta, valor, senha) {
    if (senha !== conta.senha) {
        console.log("Senha incorreta.");
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
    conta.historico.push({ tipo: 'depósito', valor: valor });
}

function consultarSaldo(conta, senha) {
    if (senha !== conta.senha) {
        console.log("Senha incorreta.");
        return;
    }   else {
        console.log(`Saldo atual: R$ ${conta.saldo.toFixed(2)}`);
    }
}

