<!DOCTYPE html>

<html>

    <head lang="pt-br">
        <meta charset="utf-8" />
        <title>Operador Ternário em PHP</title>
    </head>

    <body>

        <?php
            /*
            Sintaxe do operador ternário:
            <$condicao> ? true : false
            */

            $valor1 = 50;
            $valor2 = 12;
            $valor3 = 22;

            $valorTotal = $valor1 > $valor2 && $valor3 > $valor1;

            $valorTotal ? 'Verdadeiro' : 'Falso';
        ?>

    </body>

</html>