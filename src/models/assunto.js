import uuid from 'uuid/v4';

export class Assunto {
	key;
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
		this.key = uuid();
		this.titulo = '';
	}
}
