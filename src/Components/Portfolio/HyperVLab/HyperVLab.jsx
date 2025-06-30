import React from "react";
import "../PortfolioStyle.css";
import HyperVLabPic from "../../../Images/HyperVLab.png";
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

const HyperVLab = () => {
  const classes = useStyles();

  return (
    <div className="mainPortfolioContainer">
      {/* <div className="dateLeft">
				<Typography variant="subtitle2">2021 - Ongoing</Typography>
			</div> */}

      <Grid container spacing={2}>
        <Grid item md>
          <Paper className={classes.paper}>
            <h1>Hyper V Lab</h1>
            <h5>Date: 2025</h5>
            {/* <p>
              Recently, I built a Hyper-V lab to simulate real-world deployment
              environments. I configured a PXE boot environment using WDS, DHCP,
              and NAT routing, created an unattended Windows 10 deployment, and
              set up silent installation of software like Chrome and Winamp. It
              mimicked what you'd expect in a real imaging and provisioning
              process in MSP environments. This taught me practical
              troubleshooting of network scopes, DNS issues, and remote
              application rollout.
            </p> */}
            <h4>On going self study project</h4>

            <li>Built a Hyper-V lab to simulate real-world PXE deployments</li>
            <li>
              Configured WDS, DHCP, NAT routing, and unattended Windows 10 setup
            </li>
            <li>
              Automated software installs using SetupComplete.cmd and custom
              scripts
            </li>
            <li>
              Practiced real troubleshooting around DNS, IP scopes, and
              deployment errors
            </li>

            {/* <Link
							className={classes.link}
							to="/HyperVLab
						>
							<Button className={classes.buttonStyle} variant="contained">
								More Details
							</Button>
						</Link> */}
            <Link className={classes.link} to="/HyperVMore">
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

            {/* </ButtonGroup> */}
            {/* </div> */}
          </Paper>
        </Grid>
        <Grid item lg>
          <Paper className={classes.paper}>
            <img
              src={HyperVLabPic}
              alt="HyperVLabPic"
              className={classes.img}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default HyperVLab;
