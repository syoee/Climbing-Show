import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Nav from "./component/Nav/Nav";
import Main from "./pages/Main/Main";
import Detail from "./pages/Detail/Detail";
import Footer from "./component/Footer/Footer";

const Router = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/Detail" element={<Detail />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default Router;
