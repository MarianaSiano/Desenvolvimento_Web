<!DOCTYPE html>

<html>

    <head lang="pt-br">
        <meta charset="utf-8" />
        <title>if/else em PHP</title>
    </head>

    <body>

        <?php

            //Operadores de Comparação 

            $valor1 = 15;
            $valor2 = 20;

            if($valor1 < $valor2) {
                echo 'Entrou no if, então o $valor1 que é: ' + $valor1 + ' é menor que o $valor2, que é: ' + $valor2;
                echo 'Então é verdadeiro';
            }

            else {
                echo 'Entrou no else, então o $valor1 que é: ' + $valor1 + ' é maior que o $valor2, que é: ' + $valor2;
                echo 'Então é falso';
            }
        ?>

        <?php

            //Operadores Lógicos 
            
            $valor1 = 25;
            $valor2 = 23;
            $valor3 = 10;

            if($valor1 > $valor2 && $valor3 > $valor1) {
                echo 'Deu verdadeiro, entrou no if! $valor1 é maior que o $valor2 e o $valor3 é maior que o $valor 1';
            }

            else {
                echo 'Deu falso, entrou o else! Uma das condições passadas é falsa';
            }
        ?>

        <!-- Ou -->
        <?php
            if($condicao) {
                //Trecho de código que será executado
            }

            else if($condicao){
                //Trecho de código que será executado
            }

            else {
                //Trecho de código que será executado
            }
        ?>

    </body>

</html>