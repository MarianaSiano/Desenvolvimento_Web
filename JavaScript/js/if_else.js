//Título da aula
document.write('<h1>if/else</h1>');

//Comparações
var media = 60;
var notaFinal = prompt("Digite a nota final do aluno");

//if/else 
if(notaFinal >= media) {
    document.write('Foi aprovado com a nota de ' + notaFinal + ' pontos');
}

else {
    document.write('Foi reprovado com a nota de ' + notaFinal + ' pontos');
}

//if/else com cadeado
/*if(7 < 3) {
    document.write('<h4>Entrou no if encadeado</h4>');
}

else if(7 != 6) {
    document.write('<h4>Entrou no else if encadeado</h4>');
}

else {
    document.write('<h4>Entrou no else encadeado</h4>');
}*/