import React from "react";
import "../PortfolioStyle.css";
import AUTLogo from "../../../Images/AUTLogo.png";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "@fontsource/titillium-web";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

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
    link: {
      textDecoration: "none",
      color: theme.palette.text.primary,
      fontFamily: "Titillium Web",
    },
  })
);

const AUTMasters = () => {
  const classes = useStyles();

  return (
    <div className="mainPortfolioContainer">
      {/* <div className="dateLeft">
				<Typography variant="subtitle2">2021 - Ongoing</Typography>
			</div> */}

      <Grid container spacing={2}>
        <Grid item md>
          <Paper className={classes.paper}>
            <h1>Master’s Thesis – Mobile Automation Testing</h1>
            <h5>Date: 2023</h5>
            <h4>Auckland University of Technology</h4>
            <li>
              Researched the effectiveness of mobile test automation tools for
              Android apps
            </li>
            <li>
              Evaluated Appium, Espresso, and Katalon Studio across three
              open-source apps (Kotlin + React Native)
            </li>
            <li>
              Designed and executed test cases to measure pass rate, flaky
              behavior, response time, CPU/memory usage
            </li>
            <li>
              Conducted all testing via Android emulation using a Pixel 6
              virtual device and custom scripts
            </li>
            <li>
              Developed a proposed framework to mitigate common tool limitations
              (e.g. Appium lag, Espresso incompatibility)
            </li>
            <li>
              Findings suggest Appium offers best performance overall, but lacks
              consistency in failed test reporting
            </li>
            {/* <Link className={classes.link} to="/AUTMore">
              <Button className={classes.buttonStyle} variant="contained">
                More Details
              </Button>
            </Link> */}

            <Button
              className={classes.disabledButton}
              disabled={true}
              href="https://www.strigononeffxiv.com/"
              variant="contained"
            >
              Under development
            </Button>

            <Divider style={{ marginTop: "2%" }} />

            <h4>Technologies Used</h4>
            <Button
              className={classes.buttonStyle}
              href="https://appium.io/docs/en/latest/"
              variant="contained"
            >
              Appium
            </Button>
            <Button
              className={classes.buttonStyle}
              href="https://developer.android.com/training/testing/espresso"
              variant="contained"
            >
              Espresso
            </Button>
            <Button
              className={classes.buttonStyle}
              href="https://katalon.com/"
              variant="contained"
            >
              Katalon Studio
            </Button>
            <Button
              className={classes.buttonStyle}
              href="https://developer.android.com/studio"
              variant="contained"
            >
              Android Studio
            </Button>
            <Button
              className={classes.buttonStyle}
              href="https://www.java.com/en/"
              variant="contained"
            >
              Java
            </Button>
            <Button
              className={classes.buttonStyle}
              href="https://kotlinlang.org/"
              variant="contained"
            >
              Kotlin
            </Button>
            <Button
              className={classes.buttonStyle}
              href="https://reactnative.dev/"
              variant="contained"
            >
              React Native
            </Button>

            {/* </ButtonGroup> */}
            {/* </div> */}
          </Paper>
        </Grid>
        <Grid item lg>
          <Paper className={classes.paper}>
            <img src={AUTLogo} alt="AUTLogo" className={classes.img} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default AUTMasters;
