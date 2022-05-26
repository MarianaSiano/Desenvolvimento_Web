//Título da aula
document.write('<h1>Operadores Lógicos em JavaScript</h1>')

var notaFinal = prompt("Digite a nota final do aluno");
var freqFinal = prompt("Digite a quantidade de faltas desse mesmo aluno");

if(notaFinal >= 60 && freqFinal >= 150) {
    document.write('Aluno aprovado! Nota é de ' + notaFinal + ' e a falta de ' + freqFinal + ' dias de 200 dias letivos')
}

else {
    document.write('Aluno reprovado! Nota é de ' + notaFinal + ' e a falta de ' + freqFinal + ' dias de 200 dias letivos')
}