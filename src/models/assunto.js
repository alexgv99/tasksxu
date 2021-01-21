import { v4 as uuid } from 'uuid';

export const TIPO_ASSUNTOS = ['geral', 'cachorro', 'gato'];

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
		[this.tipo] = TIPO_ASSUNTOS;
	}
}
