import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	}
}));

const ContatoDetail = ({ contato, onSave, onCancel }) => {
	const classes = useStyles();
	return contato ? (
		<div>
			<Grid container>
				<Grid item xs={6}>
					<TextField label="Nome" value={contato.nome} onChange={e => (contato.nome = e.target.value)} fullWidth />
				</Grid>
				<Grid item xs={1}>
					&nbsp;
				</Grid>
				<Grid item xs={5}>
					<TextField label="Órgão" value={contato.orgao} onChange={e => (contato.orgao = e.target.value)} fullWidth />
				</Grid>
				<Grid item xs={6}>
					<TextField label="e-mail" value={contato.email} onChange={e => (contato.email = e.target.value)} fullWidth />
				</Grid>
				<Grid item xs={1}>
					&nbsp;
				</Grid>
				<Grid item xs={5}>
					<TextField label="Telefones" value={contato.fone} onChange={e => (contato.fone = e.target.value)} fullWidth />
				</Grid>
				<Grid item xs={12}>
					<Button color="primary" variant="contained" className={classes.button} onClick={() => onSave(contato)}>
						Salvar
					</Button>
					<Button variant="contained" className={classes.button} onClick={() => onCancel()}>
						Cancelar
					</Button>
				</Grid>
			</Grid>
		</div>
	) : null;
};

ContatoDetail.propTypes = {
	contato: PropTypes.any
};

export default ContatoDetail;
