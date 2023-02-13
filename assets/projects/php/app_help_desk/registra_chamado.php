<?php
    session_start();
    $arquivo = fopen('../../app_help_desk/arquivo.hd', 'a'); 
    foreach($_POST as $arr){
        $arr = str_replace('#', '-', $_POST);
    }

    $texto = $_SESSION['id'] .'#'. implode("#", $arr) . PHP_EOL;

    fwrite($arquivo, $texto);

    fclose($arquivo);
    
    header('Location: abrir_chamado.php');
?>