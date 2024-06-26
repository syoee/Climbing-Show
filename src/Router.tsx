import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navigation from './components/navigation';
import Main from './pages/main';
import Detail from './pages/detail';

const Router = () => {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/Detail" element={<Detail />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
