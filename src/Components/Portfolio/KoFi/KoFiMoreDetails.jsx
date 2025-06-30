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

const KoFiMoreDetails = () => {
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
          <h4>
            My KoFi shop that is still active and running with new and old
            customers.
          </h4>
          <Typography
            variant="subtitle2"
            style={{ fontStyle: "italic", fontFamily: "Titillium Web" }}
          >
            Date: 2019 - Ongoing
          </Typography>
          <p>
            I’ve operated a successful Ko-fi storefront since 2020, selling
            custom 3D mods and digital content for Final Fantasy XIV. With over
            1,000 total sales and an active base of returning customers, the
            shop continues to grow through consistent quality and community
            trust.
          </p>
          <h4>Responsibilities & Skills Demonstrated:</h4>
          <li>
            Created and managed a full suite of custom 3D mods using 3DS Max,
            ShaderMap, and Photoshop
          </li>
          <li>
            Built and maintained the entire storefront, including pricing,
            product descriptions, visual previews, and customer posts
          </li>
          <li>
            Handled customer support inquiries, update requests, and feedback
            loops with buyers
          </li>
          <li>
            Performed version control and content QA to ensure stable mod
            releases
          </li>
          <li>
            Designed marketing visuals and engaged with the gaming/modding
            community to drive organic growth
          </li>
          <li>
            Self-managed all technical, creative, and communication aspects from
            start to finish
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
            href="https://ko-fi.com/"
            variant="contained"
          >
            KoFi Platform
          </Button>
          <Button
            className={classes.buttonStyle}
            href="https://shadermap.com/home/"
            variant="contained"
          >
            ShaderMap
          </Button>
          <Button
            className={classes.buttonStyle}
            href="https://www.adobe.com/au/products/photoshop.html"
            variant="contained"
          >
            Adobe Photoshop
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
          <img src={KoFiPage1} alt="KoFiPage1" className={classes.img} />
        </Paper>
        <Paper className={classes.paper}>
          <img src={KoFiSales} alt="KoFiSales" className={classes.img} />
        </Paper>
      </Container>
    </div>
  );
};

export default KoFiMoreDetails;
