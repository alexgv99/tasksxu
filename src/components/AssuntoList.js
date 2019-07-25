import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AssuntoDetail from './AssuntoDetail';
import SearchText from './SearchText';

const AssuntoList = ({ assuntos, onEdit, onDelete }) => {
	const [termo, setTermo] = useState('');
	return (
		<>
			<SearchText label="Pesquisar" style={{ padding: 24 }} termo={termo} setTermo={setTermo} />
			<Grid container spacing={3} style={{ padding: 10 }}>
				{assuntos
					.filter(c => JSON.stringify(c).indexOf(termo) > -1)
					.map((assunto, i) => (
						<Grid item xs={12} key={i} style={{ backgroundColor: i % 2 === 0 ? '#eeeeee' : '#dddddd' }}>
							<AssuntoDetail assunto={assunto} onEdit={onEdit} onDelete={onDelete} />
						</Grid>
					))}
			</Grid>
		</>
	);
};

AssuntoList.propTypes = {
	assuntos: PropTypes.arrayOf(PropTypes.any)
};

export default AssuntoList;
