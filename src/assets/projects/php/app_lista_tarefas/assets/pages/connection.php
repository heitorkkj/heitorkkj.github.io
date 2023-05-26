<?php

class Connection{
    private $host = 'localhost';
    private $dbname = 'php_com_pdo';
    private $user = 'root';
    private $pass = '';
    public function conectar(){
        try{

            $connect = new PDO("mysql:host=$this->host;dbname=$this->dbname", "$this->user", "$this->pass");

            return $connect;

        } catch(PDOException $e){
            echo '<p>' . $e->getMessage() . '<p>';
        }
    }
}


?>