import { v4 as uuid } from 'uuid';

export class Tarefa {
	key;

	descricao;

	prazo;

	responsavel;

	observacao;

	constructor() {
		this.key = uuid();
	}
}
