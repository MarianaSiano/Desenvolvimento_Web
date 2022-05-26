//Título da aula
document.write('<h1>Tratamento de Erro</h1>');

//Tratamento de Erro
var video = Array();

video[1]['Nome'] = 'FullMetal Alchemist';
video[1]['Categoria'] = 'Anime';

function getVideo(video) {
    try {
        document.write('Nome do anime: ' + video[0]['Nome']);
    }
    catch {
        //Código 
    }
}