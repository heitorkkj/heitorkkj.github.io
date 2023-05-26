let editar = (id, txtTarefa) => {
    let form = document.createElement("form");
    form.action = "./assets/pages/tasks_controller.php?action=update";
    form.method = "post";
    form.className = "form-edit";

    let inputTarefa = document.createElement("input");
    inputTarefa.type = "text";
    inputTarefa.name = "task";
    inputTarefa.className = "form-control";
    inputTarefa.value = txtTarefa;

    let inputId = document.createElement("input");
    inputId.type = "hidden";
    inputId.name = "id";
    inputId.value = id;

    let button = document.createElement("button");
    button.type = "submit";
    button.innerHTML = "Atualizar";

    form.appendChild(inputTarefa);
    form.appendChild(button);
    form.appendChild(inputId);

    let tarefa = document.getElementById(`tarefa_${id}`);
    tarefa.innerHTML = "";

    tarefa.insertBefore(form, tarefa[0]);
  };

  let remover = (id) => {
    location.href = "./assets/pages/tasks_controller.php?action=delete&id=" + id;
  };

  let realizada = (id) => {
    location.href = "./assets/pages/tasks_controller.php?action=realize&id=" + id;
};


// area for http request using jquery


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


// area for redirecting from php pages

let url = window.location.href
url = url.split('?');


