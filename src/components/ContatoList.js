import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ContatoDetail from './ContatoDetail';

const ContatoList = ({ contatos, onEdit, onDelete }) => {
	const [termo, setTermo] = useState('');
	return (
		<>
			<TextField label="Pesquisar" style={{ padding: 24 }} value={termo} onChange={e => setTermo(e.target.value)} />
			<Grid container spacing={10} style={{ padding: 24 }}>
				{contatos.map((contato, i) => (
					<Grid item xs={12} key={i}>
						<ContatoDetail contato={contato} onEdit={onEdit} onDelete={onDelete} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

ContatoList.propTypes = {
	contatos: PropTypes.arrayOf(PropTypes.any)
};

export default ContatoList;
