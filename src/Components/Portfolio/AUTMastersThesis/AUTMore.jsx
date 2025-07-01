import React from "react";
import SideBar from "../../SideBar/SideBar";
import "../PortfolioStyle.css";
import Typography from "@material-ui/core/Typography";

import inspectorSugestions from "../../../Images//Masters/Suggestion Inspector.jpg";
import KatalonLog from "../../../Images/Masters/KatalonLogViewer.png";
import NewSuggestion from "../../../Images//Masters/Suggestion new log viewer.jpg";
import Stage2 from "../../../Images/Masters/StagesOfAnalysis2.png";
import AppiumTest from "../../../Images/Masters/whatever lol.jpg";
import proposedFramework from "../../../Images/Masters/proposed framework.jpg";
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

const AUTmore = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <SideBar />
      <ScrollToTop showBelow={250} />
      <CssBaseline />
      <Container maxWidth="lg">
        <Paper className={classes.paper}>
          <h1>Master’s Thesis – Mobile Automation Testing </h1>
          <Typography
            variant="subtitle2"
            style={{ fontStyle: "italic", fontFamily: "Titillium Web" }}
          >
            Date: 2023
          </Typography>
          <p>
            During my Master's program at Auckland University of Technology, I
            conducted in-depth research into mobile test automation frameworks
            for Android platforms. The goal was to identify the most effective
            tools for automated UI testing in real-world conditions and propose
            improvements to mitigate tool limitations. Key highlights from the
            project include:
          </p>

          <li>
            Test Framework Evaluation: Compared Appium, Espresso, and Katalon
            Studio by automating tests across three open-source apps built with
            Kotlin and React Native.
          </li>
          <li>
            Test Design: Designed test cases to measure pass/fail rates, flaky
            behavior, execution time, and CPU/memory usage.
          </li>
          <li>
            Device Emulation: Executed all tests on a Pixel 6 emulator using
            Android Studio, simulating real-world device conditions.
          </li>
          <li>
            Scripting & Automation: Developed custom JUnit test scripts and
            automation logic to standardize evaluation across tools.
          </li>
          <h4>Appium</h4>
          <ul>
            <li>Strong cross-platform support (Android & iOS)</li>
            <li>Flexible scripting capabilities</li>
            <li>Inconsistent failure reporting</li>
          </ul>
          <h4>Espresso</h4>
          <ul>
            <li>Fast and stable test execution</li>
            <li>Deep integration with Android Studio</li>
            <li>Limited to Android only</li>
          </ul>

          <h4>Katalon Studio</h4>
          <ul>
            <li>Beginner-friendly UI</li>
            <li>Simplifies test creation with minimal coding</li>
            <li>Limited control for advanced test scenarios</li>
          </ul>
          <li>
            Framework Proposal: Proposed a hybrid testing framework to overcome
            individual tool weaknesses — combining Espresso’s speed, Appium’s
            cross-platform capability, and Katalon’s user-friendly interface.
          </li>
          <li>
            Outcome: The study contributed to the understanding of how to
            balance performance, reliability, and tool complexity in mobile QA
            pipelines.
          </li>

          <h4>Technologies Used</h4>
          {/* <div className="techUsed"> */}
          {/* <ButtonGroup> */}
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

          <Divider style={{ marginTop: "2%" }} />

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
          <img src={Stage2} alt="Stages of Analysis" className={classes.img} />
        </Paper>

        <Paper className={classes.paper}>
          <img
            src={proposedFramework}
            alt="Proposed Framework"
            className={classes.img}
          />
        </Paper>
        <Paper className={classes.paper}>
          <img
            src={inspectorSugestions}
            alt="Inspector Suggestions"
            className={classes.img}
          />
        </Paper>
        <Paper className={classes.paper}>
          <img
            src={NewSuggestion}
            alt="New Suggestion"
            className={classes.img}
          />
        </Paper>
        <Paper className={classes.paper}>
          <img src={AppiumTest} alt="Appium Test" className={classes.img} />
        </Paper>
        <Paper className={classes.paper}>
          <img
            src={KatalonLog}
            alt="Katalon Log Viewer"
            className={classes.img}
          />
        </Paper>
      </Container>
    </div>
  );
};

export default AUTmore;
