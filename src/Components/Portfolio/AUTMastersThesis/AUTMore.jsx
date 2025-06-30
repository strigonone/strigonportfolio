import React from "react";
import SideBar from "../../SideBar/SideBar";
import "../PortfolioStyle.css";
import Typography from "@material-ui/core/Typography";
import StrigonWebsiteDownloadPage from "../../../Images/strigonOneWebsiteDownloadPage.png";
import StrigonWebsiteEntirePage from "../../../Images/strigonOneWebsiteEntireHomePage.png";
import StrigonWebsiteModDownload from "../../../Images/strigonOneWebsiteModDownload.png";
import StrigonWebsiteGoogleAnalytics from "../../../Images/strigonOneWebsiteGoogleAnalytics.png";
import StrigonWebsiteCMSDash from "../../../Images/strigonOneWebsiteCMSDashboard.png";
import StrigonWebsite3DLumina from "../../../Images/strigonOne3DWorkLumina.jpg";
import Strigonff14Lumina from "../../../Images/strigonOneff14Lumina.jpg";
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
          <h1>Strigon One | FFXIV </h1>
          <p>
            Platform to host my 3D Mods to a popular MMORPG Game Final Fantasy
            XIV
          </p>
          <Typography
            variant="subtitle2"
            style={{ fontStyle: "italic", fontFamily: "Titillium Web" }}
          >
            Date: 2021 - Ongoing
          </Typography>
          <h4>
            A simple website that hosts and showcases my work, and also where I
            obtained the name "Strigon One"
          </h4>
          <li>
            A website for mod users to browse through my work as well and get in
            touch with me
          </li>
          <li>
            Schedule for a major overhaul to use <strong>React</strong> and{" "}
            <strong>Typescript</strong>
          </li>
          <li>Over 200 mods ported by me</li>
          <li>
            Doing this made me realize that I was more of a creative person, and
            thus my web development journey began
          </li>
          <li>
            Self taught how to use WordPress as well as hosting my website
          </li>

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

          <Divider style={{ marginTop: "2%" }} />
          <Button
            className={classes.buttonStyle}
            href="https://www.strigononeffxiv.com/"
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
            src={StrigonWebsiteEntirePage}
            alt="strigonFFXIVWebsiteEntireHomePage"
            className={classes.img}
          />
        </Paper>

        <Paper className={classes.paper}>
          <img
            src={StrigonWebsiteModDownload}
            alt="strigonFFXIVWebsiteModDownload"
            className={classes.img}
          />
        </Paper>
        <Paper className={classes.paper}>
          <img
            src={StrigonWebsiteDownloadPage}
            alt="strigonFFXIVWebsiteDownloadPage"
            className={classes.img}
          />
        </Paper>
        <Paper className={classes.paper}>
          <img
            src={StrigonWebsite3DLumina}
            alt="strigonFFXIV3DLumina"
            className={classes.img}
          />
        </Paper>
        <Paper className={classes.paper}>
          <img
            src={Strigonff14Lumina}
            alt="strigonFFXIVLumina"
            className={classes.img}
          />
        </Paper>
        <Paper className={classes.paper}>
          <img
            src={StrigonWebsiteCMSDash}
            alt="strigonFFXIVWebsiteCMSDash"
            className={classes.img}
          />
        </Paper>
        <Paper className={classes.paper}>
          <img
            src={StrigonWebsiteGoogleAnalytics}
            alt="strigonFFXIVWebsiteAnalytics"
            className={classes.img}
          />
        </Paper>

        <Paper className={classes.paper}>
          <div className="player-wrapper">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Vp1e31cwXSI"
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

export default AUTmore;
