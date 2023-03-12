import React from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./scss/app.scss";

const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
        <NotFound/>
					{/* <Home /> */}
				</div>
			</div>
		</div>
	);
};

export default App;
