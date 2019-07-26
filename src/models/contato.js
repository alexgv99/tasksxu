import uuid from 'uuid/v4';

export class Contato {
	key;
	nome;
	orgao;
	email;
	fone;
	observacoes;

	constructor() {
		this.key = uuid();
	}
}
