import React from "react";
import SideBar from "../SideBar/SideBar";
import "./PortfolioStyle.css";
import StrigonOneFFXIVWebsite from "./StrigonOneFFXIVWebsite/StrigonOneFFXIVWebsite";
import MadeleinePizzutiWebsite from "./MadeleinePizzutiWebsite/MadeleinePizzutiWebsite";
import MissionReadyLvl5Projects from "./MissionReadyLvl5Projects/MissionReadyLvl5Projects";
import Typography from "@material-ui/core/Typography";
import LevelUpWorksWebsite from "./LevelUpWorks/LevelUpWorksWebsite";
import ScrollToTop from "../ScrollToTopButton/ScrollToTop";
import Container from "@material-ui/core/Container";
import "@fontsource/titillium-web";
import KoFiWebsite from "./KoFi/KoFi";
import AUTMasters from "./AUTMastersThesis/AUTMasters";
import HyperVLab from "./HyperVLab/HyperVLab";

const Portfolio = () => {
	return (
		<div>
			<SideBar />
			<ScrollToTop showBelow={250} />
			<Container maxWidth="lg">
				{/* <div className="portfolioContent"> */}
				<div className="portfolioContentText">
					<Typography variant="h4" style={{ fontFamily: "Titillium Web" }}>
						PORTFOLIO
					</Typography>
					<Typography
						variant="subtitle1"
						style={{ fontFamily: "Titillium Web" }}
					>
						Majority of the work is done by me, unless stated team collaboration
					</Typography>
				</div>
				<HyperVLab />
				<AUTMasters />
				<KoFiWebsite />
				<MissionReadyLvl5Projects />
				<MadeleinePizzutiWebsite />
				<LevelUpWorksWebsite />
				<StrigonOneFFXIVWebsite />
				{/* </div> */}
			</Container>
		</div>
	);
};

export default Portfolio;
