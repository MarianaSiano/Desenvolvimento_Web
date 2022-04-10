//Título da aula
document.write('<h1>Funções de Callback</h1>');

//Função Callback
var callbackSucesso = function(titulo, descricao) {
    document.write("<h3>" + titulo + "</h3>");
    document.write("<hr>");
    document.write("<h3>" + descricao + "</h3>");
}

var callbackErro = function(erro) {
    document.write("<b> Erro: </b>" + erro);
}

function exibirArtigo(id, callbackSucesso, callbackErro) {
    /* Lógica: Recuperar o id via
    aquisição HTTP */
    if(false) {
        callbackSucesso('Funcoes de callback em JS', 'Funcoes de descrição');
    }
    else {
        callbackErro('Erro ao recuperar o artigo');
    }
}

exibirArtigo(3, callbackSucesso, callbackErro);