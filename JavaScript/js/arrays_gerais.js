//Título da aula
document.write('<h1>Array Gerais</h1>');

//Arrays Básicos
document.write("<h3>Arrays Básicos</h3>");
lista_frutas = Array();
lista_frutas[0] = 'Melão';
lista_frutas[1] = 'Laranja';
document.write('<b>Frutas: </b>' + lista_frutas);
document.write("<br>");
document.write("<br>");

//Incluir elemento no final do array básico
lista_frutas.push('Mamão')
document.write('<b>Frutas: </b>' + lista_frutas);
document.write("<br>");
document.write("<br>");

//Incluir elemento no inicio do array básico
lista_frutas.unshift('Limão');
document.write('<b>Frutas: </b>' + lista_frutas);
document.write("<br>");
document.write("<br>");

//Excluir elemento no final do array básico
lista_frutas.pop()
document.write('<b>Frutas: </b>' + lista_frutas);
document.write("<br>");
document.write("<br>");

//Excluir elemento no inicio do array básico
lista_frutas.shift();
document.write('<b>Frutas: </b>' + lista_frutas);
document.write("<br>");
document.write("<br>");

//Arrays Multidimensionais
document.write("<h3>Arrays Multidimensionais</h3>");
lista_compras = Array();

lista_compras['Limpeza'] = Array('Sabão em Pó', 'Amaciante', 'Sabonete de Coco');
lista_compras['Comida'] = Array('Arroz', 'Feijão', 'Macarrão');
lista_compras['Carnes'] = Array('Filé de Frango', 'Coxa', 'Sobrecoxa', 'Lombo');

document.write('<b>Produtos de Limpeza: </b>' + lista_compras['Limpeza']);
document.write("<br>");
document.write("<br>");
document.write('<b>Comida: </b>' + lista_compras['Comida']);
document.write("<br>");
document.write("<br>");
document.write('<b>Carnes: </b>' + lista_compras['Carnes']);
document.write("<br>");
document.write("<br>");

//Incluir elemento no final do array multidimensional
lista_compras['Limpeza'].push('Rodo');
document.write('<b>Produtos de Limpeza: </b>' + lista_compras['Limpeza']);
document.write("<br>");
document.write("<br>");

//Incluir elemento no inicio do array multidimensional
lista_compras['Comida'].unshift('Batata');
document.write('<b>Comida: </b>' + lista_compras['Comida']);
document.write("<br>");
document.write("<br>");

//Excluir elemento final do array multidimensional
lista_compras['Carnes'].pop();
document.write('<b>Carnes: </b>' + lista_compras['Carnes']);
document.write("<br>");
document.write("<br>");

//Excluir elemento inicio do array multidimensional
lista_compras['Comida'].shift();
document.write('<b>Comida: </b>' + lista_compras['Comida']);
document.write("<br>");
document.write("<br>");
