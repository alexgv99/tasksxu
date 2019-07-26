import TextField from '@material-ui/core/TextField';

import React from 'react';

import PropTypes from 'prop-types';

const AssuntoDetail = ({ assunto }) => {
	return (
		<div>
			<TextField label="Assunto" value={assunto.titulo} />
		</div>
	);
};

AssuntoDetail.propTypes = {
	assunto: PropTypes.any
};

export default AssuntoDetail;
