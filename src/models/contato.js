import uuid from 'uuid/v4';

export class Contato {
	id;
	nome;
	orgao;
	email;
	fone;

	constructor() {
		this.id = uuid();
	}
}
