alert('Bem vindo ao jogo do Número Secreto');
let numeroSecreto = 29;
let numeroSelecionado = prompt('Escolha um número entre 1 e 30') 

if(numeroSecreto == numeroSelecionado)
{
console.log('Parabéns, você acertou o número secreto!');
}
else
{
    console.log('Infelizmente você errou!')
}