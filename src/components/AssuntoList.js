import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AssuntoDetail from './AssuntoDetail';

const AssuntoList = ({ assuntos, onEdit }) => {
	const [termo, setTermo] = useState('');
	return (
		<>
			<TextField label="Pesquisar" style={{ padding: 24 }} value={termo} onChange={e => setTermo(e.target.value)} />
			<Grid container spacing={24} style={{ padding: 24 }}>
				{assuntos.map(assunto => (
					<Grid item xs={12} sm={12} lg={12} xl={12}>
						<AssuntoDetail assunto={assunto} onEdit={onEdit} />
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
