import Grid from '@material-ui/core/Grid';

import React, { useState } from 'react';

import PropTypes from 'prop-types';

import SearchText from '../../components/SearchText';

import ContatoDetail from './ContatoDetail';

const ContatoList = ({ contatos, onEdit, onDelete }) => {
	const [termo, setTermo] = useState('');
	return (
		<>
			<SearchText label="Pesquisar" style={{ padding: 24 }} termo={termo} setTermo={setTermo} />
			<Grid container spacing={3} style={{ padding: 10 }}>
				{contatos
					.filter(c => JSON.stringify(c).indexOf(termo) > -1)
					.map((contato, i) => (
						<Grid item xs={12} key={i} style={{ backgroundColor: i % 2 === 0 ? '#eeeeee' : '#dddddd' }}>
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
