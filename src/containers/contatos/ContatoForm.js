import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import React, { useState } from 'react';

import { size } from 'lodash';

import PropTypes from 'prop-types';

import { checkKeys } from '../../utils/tools';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	}
}));

const ContatoDetail = ({ contato: c, onSave, onCancel }) => {
	const classes = useStyles();

	const [contato, setContato] = useState(c);
	const [erro, setErro] = useState({});

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const save = () => {
		const auxErro = {};
		if (size(contato.nome) === 0) {
			auxErro.nome = 'Nome é obrigatório';
		}
		if (size(contato.email) === 0 && size(contato.fone) === 0) {
			auxErro.email = 'email ou telefone obrigatório';
			auxErro.fone = 'email ou telefone obrigatório';
		}
		setErro(auxErro);
		if (size(auxErro) === 0) {
			onSave(contato);
		}
	};

	return c ? (
		<Dialog
			open={true}
			onClose={onCancel}
			aria-labelledby="form-dialog-title"
			maxWidth={'lg'}
			fullWidth={true}
			fullScreen={fullScreen}
		>
			<DialogTitle id="form-dialog-title">Detalhamento do Contato</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To subscribe to this website, please enter your email address here. We will send updates occasionally.
				</DialogContentText>
				<form onKeyDown={e => checkKeys(e.key, onCancel, () => onSave(contato))}>
					<Grid container>
						<Grid item xs={6}>
							<TextField
								label="Nome"
								value={contato.nome || ''}
								onChange={e => setContato({ ...contato, nome: e.target.value })}
								helperText={<span style={{ color: 'red' }}>{erro.nome}</span>}
								fullWidth
								autoFocus={true}
							/>
						</Grid>
						<Grid item xs={1}>
							&nbsp;
						</Grid>
						<Grid item xs={5}>
							<TextField
								label="Órgão"
								value={contato.orgao || ''}
								onChange={e => setContato({ ...contato, orgao: e.target.value })}
								helperText={<span style={{ color: 'red' }}>{erro.orgao}</span>}
								fullWidth
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								label="e-mail"
								value={contato.email || ''}
								onChange={e => setContato({ ...contato, email: e.target.value })}
								helperText={<span style={{ color: 'red' }}>{erro.email}</span>}
								fullWidth
							/>
						</Grid>
						<Grid item xs={1}>
							&nbsp;
						</Grid>
						<Grid item xs={5}>
							<TextField
								label="Telefones"
								value={contato.fone || ''}
								onChange={e => setContato({ ...contato, fone: e.target.value })}
								helperText={<span style={{ color: 'red' }}>{erro.fone}</span>}
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label="Observações"
								value={contato.observacao || ''}
								onChange={e => setContato({ ...contato, observacao: e.target.value })}
								helperText={<span style={{ color: 'red' }}>{erro.observacao}</span>}
								fullWidth
								multiline
								rows={3}
							/>
						</Grid>
					</Grid>
				</form>
			</DialogContent>
			<DialogActions>
				<Button color="primary" variant="contained" className={classes.button} onClick={() => save(contato)}>
					Salvar
				</Button>
				<Button variant="contained" className={classes.button} onClick={() => onCancel()}>
					Cancelar
				</Button>
			</DialogActions>
		</Dialog>
	) : null;
};

ContatoDetail.propTypes = {
	contato: PropTypes.any
};

export default ContatoDetail;
