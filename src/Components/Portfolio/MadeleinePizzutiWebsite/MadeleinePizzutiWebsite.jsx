import React from "react";
import "../PortfolioStyle.css";
// import { Link } from "react-router-dom";
import MadeleineWebsite from "../../../Images/madeleineWebsite.png";
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

const MadeleinePizzutiWebsite = () => {
  const classes = useStyles();

  return (
    <div className="mainPortfolioContainer">
      {/* <div className="dateLeft">
				<Typography variant="subtitle2">2021 - Ongoing</Typography>
			</div> */}

      <Grid container spacing={2}>
        <Grid item md>
          <Paper className={classes.paper}>
            <h1>Madeleine Pizzuti </h1>
            <h5>Date: 2021 - Ongoing</h5>
            {/* <p>Madeleine Pizzuti's personal author book page</p> */}
            <h4>Freelance Author Website Project</h4>
            <li>
              Built a simple React landing page for a children’s book author
            </li>
            <li>
              Used CRA, Material UI, and Framer Motion for layout and animation
            </li>
            <li>
              Freelance overhaul of the client’s original book showcase site
            </li>
            <li>
              Project completed but did not progress beyond initial launch
            </li>

            {/* <Button
							className={classes.disabledButton}
							variant="contained"
							disabled={true}
						>
							More Details
						</Button> */}

            <Divider style={{ marginTop: "2%" }} />

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
              href="https://material-ui.com/"
              variant="contained"
            >
              Material UI
            </Button>
            <Button
              className={classes.buttonStyle}
              href="https://www.framer.com/motion/?fbclid=IwAR3J84qPDMJmhtWhQH3bKYOWci3cesXCUS682v20CYUwTSTk06kPOGpP82w"
              variant="contained"
            >
              Framer
            </Button>

            {/* </ButtonGroup> */}
            {/* </div> */}
          </Paper>
        </Grid>
        <Grid item lg>
          <Paper className={classes.paper}>
            <img
              src={MadeleineWebsite}
              alt="MadeleineWebsite"
              className={classes.img}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MadeleinePizzutiWebsite;
