<?php

class TaskService{

    private $connect;
    private $task; 

    public function __construct(Connection $connect,Task $task)
    {
        $this->connect = $connect->conectar();
        $this->task = $task;        
    }


    public function insert(){
     
        $query = 'insert into tb_tarefas(tarefa)values(:task)';
    
        $stmt = $this->connect->prepare($query);
        $stmt->bindValue(':task', $this->task->_get('task'));
        
        return $stmt->execute();
    }

    public function recover(){
        $query = '
        select 
            t.id, s.status, t.tarefa 
        from 
            tb_tarefas as t
            left join tb_status as s on (t.id_status = s.id)
        ;';

        $stmt = $this->connect->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_OBJ);

    }
    public function update(){

        $query = 'update tb_tarefas set tarefa = :task where id = :id';
        $stmt = $this->connect->prepare($query);
        $stmt->bindValue(':task', $this->task->_get('task'));
        $stmt->bindValue(':id', $this->task->_get('id'));
        return $stmt->execute();
        
    }
    public function delete(){
        $query = 'delete from tb_tarefas where id = :id'; 
        $stmt = $this->connect->prepare($query);
        $stmt->bindValue(':id', $this->task->_get('id'));
        return $stmt->execute();
    }
    public function realize (){

        $query = 'update tb_tarefas set id_status = :id_status where id = :id';
        $stmt = $this->connect->prepare($query);
        $stmt->bindValue(':id_status', $this->task->_get('id_status'));
        $stmt->bindValue(':id', $this->task->_get('id'));
        return $stmt->execute();
        
    }

    
}



?>