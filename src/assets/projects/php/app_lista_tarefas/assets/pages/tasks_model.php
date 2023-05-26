<?php

class Task{
    private $id;
    private $id_status; 
    private $task; 
    private $data_cadastro; 

    public function _get($attribute){
        return $this->$attribute; 
    }

    public function _set($attribute, $value){
        $this->$attribute = $value; 
    }
}


?>