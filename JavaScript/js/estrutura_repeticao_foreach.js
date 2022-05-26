//Título da aula
document.write('<h1>Estrutura de Repetição -- Foreach</h1>');

//Foreach
var lista = ['Vivian', 'Lorena', 'Yara', 'Julia','Gabrielle'];

lista.forEach(function(valor, indice, array){
    //Lógica
    document.write(lista + '<br>');
})