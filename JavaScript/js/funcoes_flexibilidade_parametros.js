//Título da aula
document.write('<h1>Funções</h1>');
document.write('<h2>Flexibilidade de Parâmetros</h2>');

//Função - Flexibilidade de Parâmetros
function soma(valor, numero) {
    return valor + numero;
}

//Quantidade correta de parâmetros
document.write("<h4>Passando a quantidade correta de parâmetros</h4>");
var resultado = soma(7, 7);
document.write("Resultado da soma estática: " + resultado);
document.write("<br>");
document.write("<br>");

//Passando um parâmetro
document.write("<h4>Passando um único parâmetro</h4>");
var resul = soma(2);
document.write("Resultado da soma estática: " + resul);
document.write("<br>");
document.write("<br>");

//Passando mais parâmetros que o necessário
document.write("<h4>Passando mais parâmetros que o necessário</h4>");
var resultado2 = soma(15, 30, 10);
document.write("Resultado da soma estática: " + resultado2);
document.write("<br>");