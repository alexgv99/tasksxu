import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import InputLabel from '@material-ui/core/InputLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import React, { useState, useEffect } from 'react';

import { size } from 'lodash';

import PropTypes from 'prop-types';

import { Assunto, TIPO_ASSUNTOS } from '../../models/assunto';
import FirebaseService from '../../services/FirebaseService';
import { checkKeys } from '../../utils/tools';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		maxWidth: 300,
	},
	chips: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	chip: {
		margin: 2,
	},
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const AssuntoForm = ({ assunto: a, onSave, onCancel }) => {
	const classes = useStyles();
	const [tiposAssuntos, setTiposAssuntos] = useState(TIPO_ASSUNTOS);
	const [assunto, setAssunto] = useState(a);
	const [tipo, setTipo] = useState(null);
	const [outroTipo, setOutroTipo] = useState(null);
	const [erro, setErro] = useState({});
	const [contatos, setContatos] = useState([]);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	useEffect(() => {
		FirebaseService.getDataList('contatos', setContatos, 10000);
	}, []);

	useEffect(() => {
		FirebaseService.getDataList(
			'assuntos',
			(assuntos) => {
				const tipos = [...tiposAssuntos];
				assuntos.forEach((auxAssunto) => {
					if (tipos.indexOf(auxAssunto.tipo) === -1) {
						tipos.push(auxAssunto.tipo);
					}
				});
				if (tipos.indexOf('outro') === -1) {
					tipos.push('outro');
				}
				setTiposAssuntos(tipos);
				setTipo(tipos.find((aux) => aux === assunto.tipo) ? assunto.tipo : 'outro');
				setOutroTipo(tipos.find((aux) => aux === assunto.tipo) ? null : assunto.tipo);
			},
			10000
		);
	}, [tiposAssuntos]);

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

	const handleAddContato = (e) => {
		const escolhidos = e.target.value;
		const novosContatos = escolhidos.map((c) => {
			const saida = typeof c === 'string' ? contatos.find((obj) => obj.nome === c) : c;
			return saida;
		});
		const novoAssunto = { ...assunto, contatos: novosContatos };
		setAssunto(novoAssunto);
	};

	const handleRemoveContato = (contato) => {
		const novosContatos = assunto.contatos.filter((c) => c.key !== contato.key);
		const novoAssunto = { ...assunto, contatos: novosContatos };
		setAssunto(novoAssunto);
	};

	const handleSelectTipo = (e) => {
		const tAux = e.target.value;
		setTipo(tAux);
		const novoAssunto = { ...assunto, tipo: tAux === 'outro' ? outroTipo : tAux };
		setAssunto(novoAssunto);
	};

	const handleOutroTipo = (e) => {
		const tAux = e.target.value;
		setOutroTipo(tAux);
		const novoAssunto = { ...assunto, tipo: tAux };
		setAssunto(novoAssunto);
	};

	return (
		<Dialog
			open
			onClose={onCancel}
			aria-labelledby="form-dialog-title"
			maxWidth="lg"
			fullWidth
			fullScreen={fullScreen}
		>
			<DialogTitle id="form-dialog-title">Detalhamento do Assunto</DialogTitle>
			<DialogContent>
				<form onKeyDown={(e) => checkKeys(e.key, onCancel, () => onSave(assunto))}>
					<Grid container>
						<Grid item xs={12}>
							<TextField
								label="Assunto"
								value={assunto.titulo}
								onChange={(e) => setAssunto({ ...assunto, titulo: e.target.value })}
								helperText={<span style={{ color: 'red' }}>{erro.titulo}</span>}
								fullWidth
								autoFocus
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label="Detalhamento"
								value={assunto.detalhamento}
								onChange={(e) => setAssunto({ ...assunto, detalhamento: e.target.value })}
								helperText={<span style={{ color: 'red' }}>{erro.detalhamento}</span>}
								fullWidth
								multiline
								rows={3}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControl component="fieldset">
								<FormLabel component="legend">Tipo</FormLabel>
								<RadioGroup
									aria-label="tipo"
									name="tipo"
									value={tipo}
									onChange={handleSelectTipo}
									row
								>
									{tiposAssuntos.map((t, i) => (
										<FormControlLabel
											key={`${t}-${i}`}
											value={t || ''}
											control={<Radio color="primary" />}
											label={t}
											labelPlacement="end"
										/>
									))}
								</RadioGroup>
							</FormControl>
							{tipo === 'outro' && (
								<TextField
									label=""
									value={outroTipo || ''}
									onChange={handleOutroTipo}
									helperText={<span style={{ color: 'red' }}>{erro.outroTipo}</span>}
								/>
							)}
						</Grid>
						<Grid item xs={12}>
							<FormControl className={classes.formControl} style={{ display: 'flex' }} fullWidth>
								<InputLabel htmlFor="contatos">Contatos</InputLabel>
								<Select
									multiple
									value={assunto.contatos || []}
									onChange={handleAddContato}
									input={<Input id="contatos" />}
									renderValue={(selected) => (
										<div className={classes.chips}>
											{selected.map((c) => (
												<Chip
													key={c.key}
													label={c.nome}
													className={classes.chip}
													onClick={() => handleRemoveContato(c)}
												/>
											))}
										</div>
									)}
									MenuProps={MenuProps}
								>
									{contatos
										.filter((c) => !(assunto.contatos || []).find((obj) => obj.key === c.key))
										.map((contato) => (
											<MenuItem key={contato.key} value={contato.nome}>
												{contato.nome}
											</MenuItem>
										))}
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</form>
			</DialogContent>
			<DialogActions>
				<Button
					color="primary"
					variant="contained"
					className={classes.button}
					onClick={() => save(assunto)}
				>
					Salvar
				</Button>
				<Button variant="contained" className={classes.button} onClick={() => onCancel()}>
					Cancelar
				</Button>
			</DialogActions>
		</Dialog>
	);
};

AssuntoForm.propTypes = {
	assunto: PropTypes.shape(new Assunto()),
	onSave: PropTypes.func,
	onCancel: PropTypes.func,
};

export default AssuntoForm;
