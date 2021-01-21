import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Assuntos from './containers/assuntos';
import Contatos from './containers/contatos';

function App() {
	return (
		<Router>
			<Route exact path="/" component={Assuntos} />
			<Route exact path="/contatos" component={Contatos} />
		</Router>
	);
}

export default App;
