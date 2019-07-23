import React, { useState, useEffect } from 'react';
import FirebaseService from '../../services/FirebaseService';
import NavBar from '../../components/NavBar';
import ContatoList from '../../components/ContatoList';
import ContatoForm from '../../components/ContatoForm';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Contato } from '../../models/contato';
import { size } from 'lodash';

const useStyles = makeStyles(theme => ({
	root: {
		color: theme.palette.text.primary
	},
	fab: {
		position: 'absolute',
		bottom: theme.spacing(2),
		right: theme.spacing(2)
	}
}));

const Contatos = () => {
	const classes = useStyles();
	const [contatos, setContatos] = useState([]);
	const [contatoEdicao, setContatoEdicao] = useState(null);
	const [editing, setEditing] = useState(false);

	useEffect(() => {
		FirebaseService.getDataList('contatos', setContatos, 10000);
	}, []);

	useEffect(() => {
		if (contatoEdicao === null) {
			setEditing(false);
		} else {
			setEditing(true);
			if (size(contatoEdicao) === 0) {
				setContatoEdicao(new Contato());
			}
		}
	}, [contatoEdicao]);

	const removeContato = contato => FirebaseService.remove('contatos', contato.id);
	const saveContato = () => {
		FirebaseService.pushData('contatos', contatoEdicao);
		setContatoEdicao(null);
	};
	const cancelEdicao = () => {
		setContatoEdicao(null);
	};

	return (
		<>
			<NavBar />
			{editing && <ContatoForm contato={contatoEdicao} onSave={saveContato} onCancel={cancelEdicao} />}
			<ContatoList contatos={contatos} onEdit={setContatoEdicao} onDelete={removeContato} />
			<Fab color="primary" aria-label="Novo Contato" className={classes.fab}>
				<AddIcon onClick={() => setContatoEdicao({})} />
			</Fab>
		</>
	);
};

Contatos.propTypes = {};

export default Contatos;
