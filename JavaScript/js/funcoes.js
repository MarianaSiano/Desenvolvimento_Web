//Título da aula
document.write('<h1>Funções em JavaScript</h1>');

//Função
function calcularAreaTerreno(largura, comprimento) {
    var area = largura * comprimento;

    return area;
}

//Chamando a função
document.write("<h3>Chamada estática</h3>");
var areaTerreno = calcularAreaTerreno(15, 25);
document.write("Com a largura de 15m e comprimento de 25m, a area do terreno é de: " + areaTerreno + " metros quadrados");
document.write('<br>');
document.write('<br>');

//Interação com o usuário
document.write("<h3>Interação com o Usuário</h3>");
larg = prompt('Digite a largura do terreno');
comp = prompt('Digite o comprimento do terreno');
var areaCalculada = calcularAreaTerreno(larg, comp);
document.write("Com a largura de " + larg + "m e o comprimento de " + comp + "m, a area do terreno é de: " + areaCalculada + " metros quadrados");