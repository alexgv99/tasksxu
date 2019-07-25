import uuid from 'uuid/v4';

export class Tarefa {
	key;
	descricao;
	prazo;
	responsavel;

	constructor() {
		this.key = uuid();
	}
}
