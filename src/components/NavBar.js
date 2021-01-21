import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = ({ children }) => (
	<div style={{ marginBottom: 20 }}>
		<AppBar position="static">
			<Toolbar>
				<Typography variant="subtitle1" color="inherit">
					Tasks Xu
				</Typography>
				{children}
			</Toolbar>
		</AppBar>
	</div>
);

NavBar.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default NavBar;
