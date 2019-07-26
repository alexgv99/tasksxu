import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import React, { useState, useEffect } from 'react';

import { size } from 'lodash';

import { Link } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import { Assunto } from '../../models/assunto';
import FirebaseService from '../../services/FirebaseService';

import AssuntoForm from './AssuntoForm';
import AssuntoList from './AssuntoList';

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

const Assuntos = () => {
	const classes = useStyles();
	const [assuntos, setAssuntos] = useState([]);
	const [assuntoEdicao, setAssuntoEdicao] = useState(null);
	const [editing, setEditing] = useState(false);

	useEffect(() => {
		FirebaseService.getDataList('assuntos', setAssuntos, 10000);
	}, []);

	useEffect(() => {
		if (assuntoEdicao === null) {
			setEditing(false);
		} else {
			setEditing(true);
			if (size(assuntoEdicao) === 0) {
				setAssuntoEdicao(new Assunto());
			}
		}
	}, [assuntoEdicao]);

	const removeAssunto = assunto => FirebaseService.remove('assuntos', assunto.key);
	const saveAssunto = assunto => {
		if (assuntos.find(c => c.key === assunto.key)) {
			FirebaseService.updateData('assuntos', assunto.key, assunto);
		} else {
			FirebaseService.pushData('assuntos', assunto);
		}
		setAssuntoEdicao(null);
	};
	const cancelEdicao = () => {
		setAssuntoEdicao(null);
	};

	return (
		<>
			<NavBar>
				<Link to="/contatos" style={{ margin: 10, color: 'white', fontSize: 18 }}>
					Contatos
				</Link>
			</NavBar>
			{editing && <AssuntoForm assunto={assuntoEdicao} onSave={saveAssunto} onCancel={cancelEdicao} />}
			<AssuntoList assuntos={assuntos} onEdit={setAssuntoEdicao} onDelete={removeAssunto} />
			<Fab color="primary" aria-label="Novo Assunto" className={classes.fab}>
				<AddIcon onClick={() => setAssuntoEdicao({})} />
			</Fab>
		</>
	);
};

Assuntos.propTypes = {};

export default Assuntos;
