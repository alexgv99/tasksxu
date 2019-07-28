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
	observacao;

	constructor() {
		this.key = uuid();
		this.titulo = '';
		this.tipo = TIPO_ASSUNTOS[0];
	}
}
export const TIPO_ASSUNTOS = ['geral', 'vinicius', 'estevão'];
