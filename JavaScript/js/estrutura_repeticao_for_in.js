//Título da aula
document.write('<h1>Estrutura de Repetição -- For in</h1>');

//For in
var convidados = ['Jorge', 'Maria', 'Cleonice'];

for (var x in convidados) {
    document.write('Convidado ' + x + ': ' + convidados[x] + '<br>');
}