<?php

    require 'tasks_service.php';
    require 'connection.php';
    require 'tasks_model.php';

    $action = isset($_GET['action']) ? $_GET['action'] : $action;

    if ($action == 'insert') {
        $task = new Task();
        $task->_set('task', $_POST['task']);

        $connect = new Connection();
        $taskService = new TaskService($connect, $task);
        $taskService = $taskService->insert(); 

        header('Location: ../../index.php?included='.$taskService);
    } else if($action == 'recover'){

        $task = new Task();
        $connect = new Connection();

        $taskService = new TaskService($connect, $task);
        $tasks = $taskService->recover();

    }else if($action == 'update'){

        $task = new Task();
        $task->_set('id', $_POST['id']);
        $task->_set('task', $_POST['task']);

        $connect = new Connection();

        $taskService = new TaskService($connect, $task);
        $taskService->update();
        
        if($taskService->update()){
            header('Location: ../../index.php');
        }

    }else if($action == 'delete'){

        $task = new Task();
        $task->_set('id', $_GET['id']);

        $connect = new Connection(); 

        $taskService = new TaskService($connect, $task);
        $taskService->delete(); 
           
        if($taskService->delete()){
            header('Location: ../../index.php');
        }
    } else if ($action == 'realize') {

        $task = new Task();
        $task->_set('id', $_GET['id']);
        $task->_set('id_status', 2);


        $connect = new Connection();

        $taskService = new TaskService($connect, $task);
        $taskService->realize();

        header('Location: ../../index.php');

    }


?>