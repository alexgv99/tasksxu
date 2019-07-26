import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import React, { useState } from 'react';

import { size } from 'lodash';

import PropTypes from 'prop-types';

import { checkKeys } from '../../utils/tools';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	}
}));

const AssuntoDetail = ({ assunto: a, onSave, onCancel }) => {
	const classes = useStyles();

	const [assunto, setAssunto] = useState(a);
	const [erro, setErro] = useState({});

	const save = () => {
		const auxErro = {};
		if (size(assunto.titulo) === 0) {
			auxErro.titulo = 'Título é obrigatório';
		}
		setErro(auxErro);
		if (size(auxErro) === 0) {
			onSave(assunto);
		}
	};

	return (
		<Dialog open={true} onClose={onCancel} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
			<DialogContent>
				<DialogContentText>Qualquer texto sobre o preenchimento dos assuntos...</DialogContentText>
				<form onKeyDown={e => checkKeys(e.key, onCancel, () => onSave(assunto))}>
					<Grid container>
						<Grid item xs={12}>
							<TextField label="Assunto" value={assunto.titulo} />
						</Grid>
					</Grid>
				</form>
			</DialogContent>
			<DialogActions>
				<Button color="primary" variant="contained" className={classes.button} onClick={() => save(assunto)}>
					Salvar
				</Button>
				<Button variant="contained" className={classes.button} onClick={() => onCancel()}>
					Cancelar
				</Button>
			</DialogActions>
		</Dialog>
	);
};

AssuntoDetail.propTypes = {
	assunto: PropTypes.any
};

export default AssuntoDetail;
