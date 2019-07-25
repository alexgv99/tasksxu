import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	root: {
		color: theme.palette.text.primary
	},
	fab: {
		float: 'right',
		margin: 10
	},
	icon: {
		fontSize: 16,
		marginLeft: 25,
		padding: 10,
		background: 'inherit'
	}
}));

const AssuntoDetail = ({ assunto, onEdit, onDelete }) => {
	const classes = useStyles();
	return (
		<Grid container>
			<Grid item xs={12} sm={6}>
				{assunto.titulo}
			</Grid>
			<Grid item xs={12} sm={2}>
				{assunto.tipo}
			</Grid>
			<Grid item xs={12} sm={2}>
				{assunto.numeroProcesso}
			</Grid>
			<Grid item xs={12} sm={2}>
				{assunto.numeroImovel}
			</Grid>
			<Grid item xs={12} sm={2}>
				<EditIcon onClick={() => onEdit(assunto)} className={classes.icon} />
				<DeleteIcon onClick={() => onDelete(assunto)} className={classes.icon} />
			</Grid>
		</Grid>
	);
};

AssuntoDetail.propTypes = {
	assunto: PropTypes.any,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func
};

export default AssuntoDetail;
