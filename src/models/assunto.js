import uuid from 'uuid/v4';

export class Assunto {
	id;
	titulo;
	detalhamento;
	tipo;
	numeroProcesso;
	numeroImovel;
	municipio;
	matriculaTrasncricao;
	documentos;
	legislacao;
	contatos;
	tarefas;

	constructor() {
		this.id = uuid();
		this.titulo = '';
	}
}
