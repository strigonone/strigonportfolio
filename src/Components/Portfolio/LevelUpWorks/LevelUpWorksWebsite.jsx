import React from "react";
import "../PortfolioStyle.css";
import LevelUpWorks from "../../../Images/levelupWorksWebsite.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import "@fontsource/titillium-web";
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
      fontFamily: "Titillium Web",
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
    buttonTechStyle: {
      background: "linear-gradient(45deg, #43A0DC 30%, #2c4d92 90%)",
      border: 0,
      borderRadius: 5,
      boxShadow: "0 3px 5px 2px rgba(35, 124, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
      marginTop: 10,
      fontWeight: "bold",
      textAlign: "center",
    },
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

const LevelUpWorksWebsite = () => {
  const classes = useStyles();

  return (
    <div className="mainPortfolioContainer">
      {/* <div className="dateLeft">
				<Typography variant="subtitle2">2021 March - 2021 April</Typography>
			</div> */}
      <Grid container spacing={2}>
        <Grid item md>
          <Paper className={classes.paper}>
            <h1>LevelUpWorks </h1>
            <h5>Date: 2021 March - April</h5>
            {/* <p>Introduction to kids' programming through a full-stack educational platform build</p> */}
            <h4>Mission Ready level 4 project.</h4>
            <li>Built using React (CRA), raw CSS, and Node.js backend</li>
            <li>Implemented MySQL database and hosted backend on ScaleGrid</li>
            <li>Two-person team project with collaborative development</li>

            <Link
              className={classes.link}
              to="/LevelUpWorksWebsileveteMoreDetails"
            >
              <Button className={classes.buttonStyle} variant="contained">
                More Details
              </Button>
            </Link>

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
          </Paper>
        </Grid>
        <Grid item lg>
          <Paper className={classes.paper}>
            <img
              src={LevelUpWorks}
              alt="LevelUpWorksWebsite"
              className={classes.img}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LevelUpWorksWebsite;
