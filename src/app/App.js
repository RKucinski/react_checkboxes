import React from 'react';
import './Global.css';
import Layout from './components/Layout';
import ContextProvider from './context/checkboxesContext';
import MainPage from './pages/mainPage';

// I chose to use Context for global state even if I'm more used to Redux
// Context is a new API given by Facebook so it might worth the try for some cases like this one

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
