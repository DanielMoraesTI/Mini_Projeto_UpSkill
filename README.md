
# Tema Escolhido: Mini Projeto BankSimulator (Gestão de Contas)

Um sistema bancário simplificado para gerir contas e movimentos financeiros.

### 1. Dados (Duas Fontes de Informação)

 A aplicação deve ser capaz de armazenar e gerir:
- **As Contas Bancárias**: Informação sobre as contas e dados de segurança dos clientes.
- **O Extrato Global**: Registo centralizado de todas as operações efetuadas.


### 2. Operações a Suportar
 (Todas as operações sensíveis devem validar se o PIN está correto)
- **Levantamento**: Subtrair saldo, validar PIN E registar no Extrato Global.
- **Depósito**: Adicionar valor ao saldo.
- **Consulta de Saldo**: Retornar o saldo atual de uma conta.
- **Transferência**: Mover valor da conta A para B E registar no Extrato.
- **Alterar PIN**: Atualizar código de segurança (validar antigo).
- **Capital Total**: Calcular quanto dinheiro o banco tem guardado.
- **Clientes VIP**: Listar titulares com saldo superior a um valor X.
- **Criatividade**: Definam e implementem 3 operações adicionais úteis


### 3. Tarefas Complementares
- **Caça ao Bug** (Simulação): Implementem propositadamente um erro de lógica. Documentem o erro e mostrem como o Debugger ajudou a resolver.
- **Fluxogramas** (Draw.io): Criem e exportem fluxogramas para as operações abaixo. (Nota: Podem simplificar operações complexas, como chamadas a funções auxiliares, representando-as como um único passo):
- **Capital Total**
- **Levantamento**
## 🔗 Link do Repositório GitHub
[https://github.com/Mini_Projeto_UPskill](https://github.com/DanielMoraesTI/Mini_Projeto_UpSkill.git)

## Passos para correr os ficheiros JS
- instalar o Visual Studio Code
- instalar o Node.js
- Clonar o repositório do código JavaScript
- abrir o arquivo com o Visual Studio Code
- executar o projeto no terminal do Visual Studio Code a digitar: node bankSimulator.js
## Estruturas de dados escolhidas e justificação da adequação

- Classe e objetos foram utilizados para representar cada conta de forma organizada, determinada pelo nome e, a reunir dados e operações associadas ao cliente (como saldos e operações realizadas).
- Arrays (contas, historico, extratoGlobal) foram escolhidas por serem uma forma eficiente para armazenar conjuntos de elementos e, desta forma, permitir a busca de informações com mais eficiência: por exemplo histórico de transações bancárias
- Funções foram utilizadas para reutilização do código com suas operações, desta forma a conseguir observar os paradigmas introduzidos bem como verificação e contas matemáticas necessárias.
- Loops for e métodos como filter, map e reduce permitem percorrer as listas de forma rápida e direta, tornando possíveis verificações essenciais. Como exemplos temos gerar relatórios, identificar clientes VIP e exibir saldos do cliente.
## Descrição das 3 operações escolhidas e justificação da adequação

- **Conta Poupança**: foi escolhida para adicionar uma funcionalidade que é comum nos bancos, que é fazer com que o valor aplicado renda juros.
- **Consultar viabilidade de conversão de Euro para Real**: outra funcionalidade importante e cotidiana na vida dos imigrantes, que ajuda a verificar a taxa corrente e se organizar financeiramente para fazer conversões monetárias.
- **Avisar quanto falta (valor) para se tornar Cliente VIP**: visa incentivar o cliente a depositar o valor faltante para se tornar um Cliente VIP e desfrutar de seus benefícios.
## Descrição do bug escolhido

O que justifica o bug escolhido, de alteração de símbolo aritmético na estrutura da função, é por ser um erro que, embora de simples solução, se percebe comum no dia a dia diante da digitação de códigos e manipulação de muitas variáveis e operações matemáticas. Neste caso, a simples troca do “+” pelo “-” não implica em erro ao utilizar o código, mas que, no resultado final das operações realizadas acabará por subtrair o valor do rendimento da conta, ao invés de adicionar.

![Bug](https://raw.githubusercontent.com/DanielMoraesTI/Mini_Projeto_UpSkill/refs/heads/main/Bug.jpeg)








### Fluxogramas

#### Fluxograma da função capitalTotal
Representa o fluxo da função Capital Total, que calcula quanto dinheiro o banco tem guardado. Representa o início, a entrada do parâmetro conta, um array que armazena todas as contas e seus respectivos saldos; o processamento, que percorre cada conta, somando o saldo de cada uma delas à variável total, com o método reduce, que reduz todos os saldos do array a um único valor; a saída, que exibe o valor armazenado na variável total e o fim.
![Função capitalTotal](https://raw.githubusercontent.com/DanielMoraesTI/Mini_Projeto_UpSkill/95eb8e7cdfdb5ce303c64f7c159ef9f315ffbad8/CapitalTotal.png)

#### Fluxograma da função levantar
Representa o fluxo da função Levantar, que autoriza ou não o levantamento de valores monetários com base em algumas condições. Representa o início do fluxo, a entrada dos parâmetros conta, valor e PIN.
Com base dos dados recebidos, são feitas algumas verificações e o levantamento é autorizado ou não.
![Função Levantamento](https://raw.githubusercontent.com/DanielMoraesTI/Mini_Projeto_UpSkill/95eb8e7cdfdb5ce303c64f7c159ef9f315ffbad8/Levantar.png)





### Autores

- Daniel Moraes (https://www.github.com/DanielMoraesTI)
- Taís Dias (https://www.github.com/tai-diasl)
