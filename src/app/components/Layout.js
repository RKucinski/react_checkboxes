import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../Global.css';

const Layout = (props) => {
	return (
		<div className='LayoutContainer'>
			<div className='LayoutContent'>
				<Header />
				{props.children}
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
