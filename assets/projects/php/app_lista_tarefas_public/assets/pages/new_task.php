	<h4 class="title">Nova Tarefa</h4>
	<hr />

	<form method="post" action="assets/pages/tarefa_controller.php?acao=inserir">
		<fieldset>
			<label>Descrição da tarefa:</label>
			<input type="text"
			name="tarefa" class="form-control" placeholder="Exemplo: Lavar o carro">

			<button class="btn btn-success">Cadastrar</button>
		</fieldset>
	</form>

		
	<?php if(isset($_GET['inclusao']) && $_GET['inclusao'] == 1) { ?>

		<div class="success-message">
			<h5>Tarefa inserida com sucesso</h5>
		</div>
		
	<?php } ?>
