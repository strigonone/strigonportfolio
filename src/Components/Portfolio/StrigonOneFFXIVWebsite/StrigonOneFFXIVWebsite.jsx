import React from "react";
import "../PortfolioStyle.css";
import { Link } from "react-router-dom";
import StrigonWebsite from "../../../Images/strigonOneWebsite1080p.png";
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

const StrigonOneFFXIVWebsite = () => {
  const classes = useStyles();

  return (
    <div className="mainPortfolioContainer">
      {/* <div className="dateLeft">
				<Typography variant="subtitle2">2021 - Ongoing</Typography>
			</div> */}

      <Grid container spacing={2}>
        <Grid item md>
          <Paper className={classes.paper}>
            <h1>Strigon One | FFXIV (Decomissioned)</h1>
            <h5>Date: 2021</h5>
            <p>
              Platform to host my 3D Mods to a popular MMORPG Game Final Fantasy
              XIV
            </p>
            <h4>
              A simple site that showcased my 3D modding work — and the origin
              of the name 'Strigon One’.
            </h4>
            <li>
              Built using WordPress and customized with Elementor, tracked site
              engagement via Google Analytics.
            </li>
            <li>
              Taught me the fundamentals of CMS platforms, asset organization,
              and user engagement tracking.
            </li>
            <li>
              Was planned for React/TypeScript rebuild but decommissioned in
              2022 as I transitioned focus to other technologies.
            </li>

            <Link
              className={classes.link}
              to="/StrigonOneFFXIVWebsiteMoreDetails"
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
              href="https://www.autodesk.co.nz/products/3ds-max/overview?term=1-YEAR"
              variant="contained"
            >
              3DS Max
            </Button>
            <Button
              className={classes.buttonStyle}
              href="https://wordpress.com/"
              variant="contained"
            >
              WordPress
            </Button>
            <Button
              className={classes.buttonStyle}
              href="https://elementor.com/"
              variant="contained"
            >
              Elementor
            </Button>
            <Button
              className={classes.buttonStyle}
              href="https://analytics.google.com/analytics/web/provision/#/provision"
              variant="contained"
            >
              Google Analytics
            </Button>
            {/* </ButtonGroup> */}
            {/* </div> */}
          </Paper>
        </Grid>
        <Grid item lg>
          <Paper className={classes.paper}>
            <img
              src={StrigonWebsite}
              alt="strigonFFXIVWebsite"
              className={classes.img}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default StrigonOneFFXIVWebsite;
