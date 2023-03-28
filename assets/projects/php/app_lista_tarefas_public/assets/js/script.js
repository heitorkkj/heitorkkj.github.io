let editar = (id, txtTarefa) => {
    let form = document.createElement("form");
    form.action = "tarefa_controller.php?acao=atualizar";
    form.method = "post";
    form.className = "row";

    let inputTarefa = document.createElement("input");
    inputTarefa.type = "text";
    inputTarefa.name = "tarefa";
    inputTarefa.className = "ml-2 col-8 form-control";
    inputTarefa.value = txtTarefa;

    let inputId = document.createElement("input");
    inputId.type = "hidden";
    inputId.name = "id";
    inputId.value = id;

    let button = document.createElement("button");
    button.type = "submit";
    button.className = "col-3 btn btn-info";
    button.innerHTML = "Atualizar";

    form.appendChild(inputTarefa);
    form.appendChild(button);
    form.appendChild(inputId);

    let tarefa = document.getElementById(`tarefa_${id}`);
    tarefa.innerHTML = "";

    tarefa.insertBefore(form, tarefa[0]);
  };

  let remover = (id) => {
    location.href = "todas_tarefas.php?acao=remover&id=" + id;
  };

  let realizada = (id) => {
    location.href = "todas_tarefas.php?acao=realizada&id=" + id;
};

$(document).ready(() => {
	
    $('#new-task').on('click', () =>{
        $('#content').load('assets/pages/new_task.php')
    })

})

let appInit = () =>{
    $('#content').load('assets/pages/pendent_tasks.php') 
}

$(document).ready(() => {
	
    $('#all-tasks').on('click', () =>{
        $('#content').load('assets/pages/all_tasks.php')
    })

})

$(document).ready(() => {
	
    $('#pendent-tasks').on('click', () =>{
        $('#content').load('assets/pages/pendent_tasks.php')
    })

})