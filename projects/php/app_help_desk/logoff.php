<?php

    session_start();
    //unset - remover indices do array da sessao 

    //destruir a variavel de sessao 

    session_destroy();
    header('Location: index.php');



?>