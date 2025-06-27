import React from "react";
import SideBar from "../../SideBar/SideBar";
import "../PortfolioStyle.css";
import Typography from "@material-ui/core/Typography";
import KoFiPage1 from "../../../Images/KoFiPage1.png";
import KoFiSales from "../../../Images/KoFiSales.png";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import ScrollToTop from "../../ScrollToTopButton/ScrollToTop";
import "@fontsource/titillium-web";

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

const KoFiMoreDetails= () => {
	const classes = useStyles();
	const history = useHistory();
	return (
		<div>
			<SideBar />
			<ScrollToTop showBelow={250} />
			<CssBaseline />
			<Container maxWidth="lg">
				<Paper className={classes.paper}>
					<h1>Strigon One | FFXIV | KoFi</h1>
					<p>
						My Kofi Shop with over 1000 sales
					</p>
					<Typography
						variant="subtitle2"
						style={{ fontStyle: "italic", fontFamily: "Titillium Web" }}
					>
						Date: 2020- Ongoing
					</Typography>
					<h4>
						My KoFi shop that is still active and running with new and old customers.
					</h4>

					<h4>Technologies Used</h4>
					{/* <div className="techUsed"> */}
					{/* <ButtonGroup> */}
					<Button
						className={classes.buttonStyle}
						href="https://www.autodesk.co.nz/products/3ds-max/overview?term=1-YEAR"
						variant="contained"
					>
						3DS Max
					</Button>
										<Button
						className={classes.buttonStyle}
						href="https://www.adobe.com/products/photoshop.html"
						variant="contained"
					>
						Photoshop
					</Button>
					{/* </ButtonGroup> */}
					{/* </div> */}

					<Divider style={{ marginTop: "2%" }} />
					<Button
						className={classes.buttonStyle}
						href="https://ko-fi.com/strigonone"
						variant="contained"
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
						src={KoFiPage1}
						alt="KoFiPage1"
						className={classes.img}
					/>
				</Paper>
								<Paper className={classes.paper}>
					<img
						src={KoFiSales}
						alt="KoFiSales"
						className={classes.img}
					/>
				</Paper>

				

			</Container>
		</div>
	);
};

export default  KoFiMoreDetails;
