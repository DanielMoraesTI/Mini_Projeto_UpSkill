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

function levantarConta(nome, saldo, senha) {
    return new Conta(nome, saldo, senha);
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

