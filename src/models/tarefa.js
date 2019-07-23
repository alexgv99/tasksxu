import uuid from 'uuid/v4';

export class Tarefa {
	id;
	descricao;
	prazo;
	responsavel;

	constructor() {
		this.id = uuid();
	}
}
