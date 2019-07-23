import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
	root: {
		color: theme.palette.text.primary
	},
	fab: {
		float: 'right',
		margin: 10
	},
	icon: {
		fontSize: 14,
		leftMargin: 12
	}
}));

const AssuntoDetail = ({ assunto, onEdit, onDelete }) => {
	const classes = useStyles();
	return (
		<p>
			{assunto.titulo}
			<Fab aria-label="Editar Assunto" size="small" className={classes.fab}>
				<EditIcon onClick={() => onEdit(assunto)} className={classes.icon} />
			</Fab>
			<Fab aria-label="Excluir Assunto" size="small" className={classes.fab}>
				<DeleteIcon onClick={() => onDelete(assunto)} className={classes.icon} />
			</Fab>
		</p>
	);
};

AssuntoDetail.propTypes = {
	assunto: PropTypes.any
};

export default AssuntoDetail;
