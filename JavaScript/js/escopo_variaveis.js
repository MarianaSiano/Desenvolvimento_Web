//Título da aula
document.write('<h1>Escopo de Variáveis</h1>');

//Escopo de variáveis
var serie = 'Friends';

//Escopo de Bloco
if(true) {
    document.write(serie);
    document.write("<br>");
}

document.write("<br>");

//Função
function teste() {
    document.write(serie);
}

teste();