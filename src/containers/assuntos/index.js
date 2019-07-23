import React, { useState, useEffect } from 'react';
import FirebaseService from '../../services/FirebaseService';
import NavBar from '../../components/NavBar';
import AssuntoList from '../../components/AssuntoList';
import AssuntoForm from '../../components/AssuntoForm';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Assunto } from '../../models/assunto';
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

	return (
		<>
			<NavBar />
			{editing && <AssuntoForm assunto={assuntoEdicao} />}
			<AssuntoList assuntos={assuntos} onEdit={setAssuntoEdicao} />
			<Fab color="primary" aria-label="Novo Assunto" className={classes.fab}>
				<AddIcon onClick={() => setAssuntoEdicao({})} />
			</Fab>
		</>
	);
};

Assuntos.propTypes = {};

export default Assuntos;
