import React from 'react';
import './Global.css';
import Layout from './components/Layout';
import ContextProvider from './context/checkboxesContext';
import MainPage from './pages/mainPage';

function App() {
	return (
		<Layout>
			<ContextProvider>
				<MainPage />
			</ContextProvider>
		</Layout>
	);
}

export default App;
