import { v4 as uuid } from 'uuid';

export class Contato {
	key;

	nome;

	orgao;

	email;

	fone;

	observacao;

	constructor() {
		this.key = uuid();
	}
}
