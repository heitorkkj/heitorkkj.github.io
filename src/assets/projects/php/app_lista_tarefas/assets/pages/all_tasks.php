<?php
$action = 'recover';
require 'tasks_controller.php';
?>
<h4 class="title">Todas as tarefas</h4>
<hr />

<?php foreach ($tasks as $arr => $tarefa) { ?>

	<div id="tarefa_<?= $tarefa->id ?>" class="task-item">
		<div class="col-sm-9">
			<?= $tarefa->tarefa ?>
		</div>

		<div class="task-buttons">
			<i class="bi bi-trash" onclick="remover(<?= $tarefa->id ?>)"></i>

			<?php if ($tarefa->status == 'pendente') { ?>
				<i class="bi bi-pencil-square" onclick="editar(<?= $tarefa->id ?>, '<?= $tarefa->tarefa ?>')"></i>
				<i class="bi bi-card-checklist" onclick="realizada(<?= $tarefa->id ?>)"></i>
			<?php } ?>
		</div>
	</div>

<?php } ?>