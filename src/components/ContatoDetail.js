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

const ContatoDetail = ({ contato, onEdit, onDelete }) => {
	const classes = useStyles();
	return (
		<Grid container>
			<Grid item xs={12} sm={3}>
				{contato.nome}
			</Grid>
			<Grid item xs={12} sm={2}>
				{contato.orgao}
			</Grid>
			<Grid item xs={12} sm={3}>
				{contato.email}
			</Grid>
			<Grid item xs={12} sm={2}>
				{contato.fone}
			</Grid>
			<Grid item xs={12} sm={2}>
				<EditIcon onClick={() => onEdit(contato)} className={classes.icon} />
				<DeleteIcon onClick={() => onDelete(contato)} className={classes.icon} />
			</Grid>
		</Grid>
	);
};

ContatoDetail.propTypes = {
	contato: PropTypes.any,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func
};

export default ContatoDetail;
