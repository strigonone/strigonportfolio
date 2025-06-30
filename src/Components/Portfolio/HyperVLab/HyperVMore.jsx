import React from "react";
import SideBar from "../../SideBar/SideBar";
import "../PortfolioStyle.css";
import Typography from "@material-ui/core/Typography";
import SCCM from "../../../Images/HyperVSCCM.png";
import ActiveDirect from "../../../Images/HyperVAD.png";
import DHCPServer from "../../../Images/HyperVDHCP.png";
import WDS from "../../../Images/HyperVWDS.png";
import Unattend from "../../../Images/HyperVUnattendScript.png";
import PXEBoot from "../../../Images/HyperVPXEBoot.png";
import HostCom from "../../../Images/HyperVClientTalkingToHost.png";

import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
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

const HyperVMore = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <SideBar />
      <ScrollToTop showBelow={250} />
      <CssBaseline />
      <Container maxWidth="lg">
        <Paper className={classes.paper}>
          <h1>Hyper-V Lab / Imaging & Deployment Automation </h1>
          <Typography
            variant="subtitle2"
            style={{ fontStyle: "italic", fontFamily: "Titillium Web" }}
          >
            Date: 2025
          </Typography>
          <h4>Personal Lab Project</h4>
          <li>
            Built a lab environment in Hyper-V to simulate real-world PXE
            deployments
          </li>
          <li>
            Set up WDS with DHCP, NAT routing, and unattended Windows 10
            installs
          </li>
          <li>
            Created and customized bootable Windows images with DISM, including
            silent Chrome installation
          </li>
          <li>Wrote and used SetupComplete.cmd for post-install automation</li>
          <li>
            Practiced troubleshooting of common issues: DNS resolution, IP
            conflicts, PXE boot errors{" "}
          </li>
          <li>
            Tested image deployment using PXE boot on isolated internal VM
            network
          </li>
          <li>
            Configured PowerShell NAT and ICS settings to enable internet access
            inside lab
          </li>
          <li>
            Documented entire process in detailed step-by-step guide with
            reusable commands
          </li>
          <li>
            Purpose: improve hands-on deployment, imaging, and scripting skills
            for MSP environments
          </li>

          <h4>Technologies Used</h4>
          {/* <div className="techUsed"> */}
          {/* <ButtonGroup> */}
          <Button
            className={classes.buttonStyle}
            href="https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/hh831764(v=ws.11)"
            variant="contained"
          >
            WDS
          </Button>
          <Button
            className={classes.buttonStyle}
            href="https://learn.microsoft.com/en-us/windows-server/networking/technologies/dhcp/dhcp-top"
            variant="contained"
          >
            DHCP
          </Button>
          <Button
            className={classes.buttonStyle}
            href="https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview"
            variant="contained"
          >
            AD
          </Button>
          <Button
            className={classes.buttonStyle}
            href="https://learn.microsoft.com/en-us/powershell/"
            variant="contained"
          >
            powershell
          </Button>
          <Button
            className={classes.buttonStyle}
            href="https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/what-is-dism?view=windows-11"
            variant="contained"
          >
            DISM
          </Button>
          <Button
            className={classes.buttonStyle}
            href="https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/hyper-v-overview?pivots=windows"
            variant="contained"
          >
            Hyper-V
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
          <img src={SCCM} alt="SCCM" className={classes.img} />
        </Paper>
        <Paper className={classes.paper}>
          <img
            src={ActiveDirect}
            alt="ActiveDirectory"
            className={classes.img}
          />
        </Paper>
        <Paper className={classes.paper}>
          <img src={DHCPServer} alt="DHCPServer" className={classes.img} />
        </Paper>
        <Paper className={classes.paper}>
          <img src={WDS} alt="WDSServer" className={classes.img} />
        </Paper>
        <Paper className={classes.paper}>
          <img src={Unattend} alt="UnattendScript" className={classes.img} />
        </Paper>
        <Paper className={classes.paper}>
          <img src={PXEBoot} alt="PXEBoot" className={classes.img} />
        </Paper>
        <Paper className={classes.paper}>
          <img src={HostCom} alt="HostCommunication" className={classes.img} />
        </Paper>
      </Container>
    </div>
  );
};

export default HyperVMore;
