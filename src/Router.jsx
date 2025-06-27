import React from "react";
import { Switch, Route } from "react-router-dom";
import LevelUpWorksWebsiteMoreDetails from "./Components/Portfolio/LevelUpWorks/LevelUpWorksWebsiteMoreDetails";
// import SideBar from "./Components/SideBar/SideBar";
import Portfolio from "./Components/Portfolio/Portfolio";
import StrigonOneFFXIVWebsiteMoreDetails from "./Components/Portfolio/StrigonOneFFXIVWebsite/StrigonOneFFXIVMoreDetails";
import KoFiMoreDetails from "./Components/Portfolio/KoFi/KoFiMoreDetails";

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={Portfolio} />
			<Route
				exact
				path="/StrigonOneFFXIVWebsiteMoreDetails"
				component={StrigonOneFFXIVWebsiteMoreDetails}
			/>
			<Route
				exact
				path="/KoFiMoreDetails"
				component={KoFiMoreDetails}
			/>
			<Route
				exact
				path="/LevelUpWorksWebsileveteMoreDetails"
				component={LevelUpWorksWebsiteMoreDetails}
			/>
		</Switch>
	);
};

export default Router;
