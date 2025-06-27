import React from "react";
import SideBar from "../../SideBar/SideBar";
import "../PortfolioStyle.css";
import Typography from "@material-ui/core/Typography";
import LevelUpWorksTeacherProfilePagePic from "../../../Images/levelupWorksTeacherProfilePage.png";
import LevelUpWorksEntirePagePic from "../../../Images/levelupWorksEntirePage.png";
import LevelUpWorksTeacherDashPic from "../../../Images/levelupWorksTeacherDash.png";

import LevelUpWorksTeacherProjectsPic from "../../../Images/levelupWorksTeacherProjects.png";
import LevelUpWorksTeacherSignedUpPic from "../../../Images/levelupWorksTeachersigningupsuccessfully.png";

import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import ScrollToTop from "../../ScrollToTopButton/ScrollToTop";
import "@fontsource/titillium-web";
import ReactPlayer from "react-player/youtube";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			fontFamily: "Titillium Web",
		},
		paper: {
			padding: theme.spacing(3),
			margin: theme.spacing(2),
			// textAlign: "center",
			// marginLeft: "2%",
			// marginBottom: "1%",
			// marginTop: "1%",
		},
		buttonStyle: {
			background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
			border: 0,
			borderRadius: 5,
			boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
			color: "white",
			height: 48,
			padding: "0 30px",
			marginTop: 10,
			fontWeight: "bold",
			textAlign: "center",
			fontFamily: "Titillium Web",
			marginLeft: 5,
		},
		disabledButton: {
			// background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
			border: 0,
			borderRadius: 5,
			boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
			color: "white",
			height: 48,
			padding: "0 30px",
			marginTop: 10,
			fontWeight: "bold",
			textAlign: "center",
			fontFamily: "Titillium Web",
			marginLeft: 5,
		},
		// buttonTechStyle: {
		// 	background: "linear-gradient(45deg, #43A0DC 30%, #2c4d92 90%)",
		// 	border: 0,
		// 	borderRadius: 5,
		// 	boxShadow: "0 3px 5px 2px rgba(35, 124, 135, .3)",
		// 	color: "white",
		// 	height: 48,
		// 	padding: "0 30px",
		// 	marginTop: 10,
		// 	fontWeight: "bold",
		// 	textAlign: "center",
		// },
		img: {
			margin: "auto",
			display: "block",
			maxWidth: "100%",
			maxHeight: "100%",
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
	})
);

const LevelUpWorksWebsiteMoreDetails = () => {
	const classes = useStyles();
	const history = useHistory();
	return (
		<div>
			<SideBar />
			<ScrollToTop showBelow={250} />
			<CssBaseline />
			<Container maxWidth="lg">
				<Paper className={classes.paper}>
					<h1>LevelUp Works </h1>
					<p>Introduction to kids programming</p>
					<Typography
						variant="subtitle2"
						style={{ fontStyle: "italic", fontFamily: "Titillium Web" }}
					>
						Date: 2021 March - April
					</Typography>
					<h4>Mission Ready level 4 project.</h4>
					<li>Simple full stack website project</li>
					<li>Team project of 2 members</li>
					<li>RAW CSS coding</li>
					<li>DB hosted in ScaleGrid as well as being stored in MySQL</li>
					<li>
						Assisted other students with their project as well and was able to
						provide meaningful feedback and guidence
					</li>
					<li>
						Unfortantely our free{" "}
						<strong>
							ScaleGrid account has expired, so now I cannot show a functioning
							backend with screenshots
						</strong>
						. However I can show with whatever left over screenshots I have
					</li>
					<li>
						Video of my partner and I presenting this project functioning,
						however sound quality is extremely bad
					</li>

					<h4>Technologies Used</h4>
					{/* <div className="techUsed"> */}
					{/* <ButtonGroup> */}
					<Button
						className={classes.buttonStyle}
						href="https://reactjs.org/"
						variant="contained"
					>
						React
					</Button>
					<Button
						className={classes.buttonStyle}
						href="https://scalegrid.io/"
						variant="contained"
					>
						ScaleGrid
					</Button>
					<Button
						className={classes.buttonStyle}
						href="https://www.mysql.com/"
						variant="contained"
					>
						MySQL
					</Button>
					<Button
						className={classes.buttonStyle}
						href="https://nodejs.org/en/"
						variant="contained"
					>
						Node JS
					</Button>
					{/* </ButtonGroup> */}
					{/* </div> */}

					<Divider style={{ marginTop: "2%" }} />
					<Button
						className={classes.disabledButton}
						href="https://www.strigononeffxiv.com/"
						variant="contained"
						disabled={true}
					>
						Visit Site
					</Button>
					<Button
						className={classes.buttonStyle}
						onClick={() => {
							history.goBack();
						}}
					>
						Back to Portfolio
					</Button>
				</Paper>
				<Paper className={classes.paper}>
					<img
						src={LevelUpWorksEntirePagePic}
						alt="LevelUpWorksEntirePagePic"
						className={classes.img}
					/>
				</Paper>
				<Paper className={classes.paper}>
					<img
						src={LevelUpWorksTeacherProfilePagePic}
						alt="LevelUpWorksTeacherProfilePagePic"
						className={classes.img}
					/>
				</Paper>

				<Paper className={classes.paper}>
					<img
						src={LevelUpWorksTeacherDashPic}
						alt="LevelUpWorksTeacherDashboard"
						className={classes.img}
					/>
				</Paper>

				<Paper className={classes.paper}>
					<img
						src={LevelUpWorksTeacherProjectsPic}
						alt="LevelUpWorksTeacherProjectsPic"
						className={classes.img}
					/>
				</Paper>

				<Paper className={classes.paper}>
					<img
						src={LevelUpWorksTeacherSignedUpPic}
						alt="LevelUpWorksTeacherSignedUp"
						className={classes.img}
					/>
				</Paper>
				<Paper className={classes.paper}>
					<div className="player-wrapper">
						<ReactPlayer
							url="https://www.youtube.com/watch?v=p9n76GJmwUQ"
							width="100%"
							height="100%"
							className="react-player"
							controls={true}
						/>
					</div>
				</Paper>
			</Container>
		</div>
	);
};

export default LevelUpWorksWebsiteMoreDetails;
