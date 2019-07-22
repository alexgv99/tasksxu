import React from 'react';
import AssuntoList from './containers/assuntos';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Route path="/" component={AssuntoList} />
		</Router>
	);
}

export default App;
