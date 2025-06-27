import React from "react";
import "../PortfolioStyle.css";
import AUTLogo from "../../../Images/AUTLogo.png";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "@fontsource/titillium-web";
import Divider from "@material-ui/core/Divider";

// import Typography from "@material-ui/core/Typography";
// import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			fontFamily: "Titillium Web",
		},
		paper: {
			padding: theme.spacing(2),
			// textAlign: "center",
			marginLeft: "2%",
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
			marginLeft: 5,
			fontFamily: "Titillium Web",
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
		link: {
			textDecoration: "none",
			color: theme.palette.text.primary,
			fontFamily: "Titillium Web",
		},
	})
);

const AUTMasters= () => {
	const classes = useStyles();

	return (
		<div className="mainPortfolioContainer">
			{/* <div className="dateLeft">
				<Typography variant="subtitle2">2021 - Ongoing</Typography>
			</div> */}

			<Grid container spacing={2}>
				<Grid item md>
					<Paper className={classes.paper}>
						<h1>AUT Masters Thesis</h1>
						<h5>Date: 2022 - 2023</h5>
						<p>
							My Masters thesis on Automation Testing
						</p>
						<h4>
Thesis on automation testing tools dedicated to Mobile applications
						</h4>
						<li>
In development
						</li>

						{/* <Link
							className={classes.link}
							to="/AUTMastersls"
						>
							<Button className={classes.buttonStyle} variant="contained">
								More Details
							</Button>
						</Link> */}
						<Button
							className={classes.disabledButton}
							variant="contained"
							disabled={true}
						>
							More Details
						</Button>


						<Divider style={{ marginTop: "2%" }} />

						<h4>Technologies Used</h4>
						{/* <div className="techUsed"> */}
						{/* <ButtonGroup> */}
						<Button
							className={classes.disabledButton}
							variant="contained"
							disabled={true}
						>
							Null
						</Button>
						<Button
							className={classes.disabledButton}
							variant="contained"
							disabled={true}
						>
							Null
						</Button>
						<Button
							className={classes.disabledButton}
							variant="contained"
							disabled={true}
						>
							Null
						</Button>

						{/* </ButtonGroup> */}
						{/* </div> */}
					</Paper>
				</Grid>
				<Grid item lg>
					<Paper className={classes.paper}>
						<img
							src={AUTLogo}
							alt="AUTLogo"
							className={classes.img}
						/>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default AUTMasters
