import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FirebaseService from '../../services/FirebaseService';

const AssuntoList = () => {
	const [assuntos, setAssuntos] = useState([]);
	const [novoAssunto, setNovoAssunto] = useState(null);
	useEffect(() => {
		FirebaseService.getDataList('assuntos', setAssuntos, 10000);
	}, []);

	const addNovoAssunto = e => {
		setAssuntos([
			...assuntos,
			{
				titulo: novoAssunto
			}
		]);
		setNovoAssunto(null);
	};

	return (
		<>
			<h1>Assuntos</h1>
			Novo assunto: <input type="text" value={novoAssunto || ''} onChange={e => setNovoAssunto(e.target.value)} />
			<button type="button" onClick={e => addNovoAssunto(e)}>
				Adicionar
			</button>
			{assuntos.map((assunto, i) => (
				<p key={i}>Assunto: {assunto.titulo}</p>
			))}
		</>
	);
};

AssuntoList.propTypes = {};

export default AssuntoList;
