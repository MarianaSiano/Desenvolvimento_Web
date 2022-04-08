//Título da aula
document.write('<h1>Operador Ternário em JavaScript</h1>')

//Operador Ternário
var notaFinal = prompt("Digite a nota final do aluno");
var freqFinal = prompt("Digite a quantidade de faltas desse mesmo aluno");

var notaAprovado = 60;
var freqAprovado = 150;

//var resultado = <condicao> ? <verdadeiro> : <falso>

var resultado = notaFinal >= notaAprovado && freqFinal >= freqAprovado ? 'Aprovado' : 'Reprovado'
document.write(resultado);