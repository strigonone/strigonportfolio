import React from "react";
import SideBar from "../SideBar/SideBar";
import "./PortfolioStyle.css";
import StrigonOneFFXIVWebsite from "./StrigonOneFFXIVWebsite/StrigonOneFFXIVWebsite";
import MadeleinePizzutiWebsite from "./MadeleinePizzutiWebsite/MadeleinePizzutiWebsite";
// import MissionReadyLvl5Projects from "./MissionReadyLvl5Projects/MissionReadyLvl5Projects";
import Typography from "@material-ui/core/Typography";
import LevelUpWorksWebsite from "./LevelUpWorks/LevelUpWorksWebsite";
import ScrollToTop from "../ScrollToTopButton/ScrollToTop";
import Container from "@material-ui/core/Container";
import "@fontsource/titillium-web";
import KoFiWebsite from "./KoFi/KoFi";
import AUTMasters from "./AUTMastersThesis/AUTMasters";
import HyperVLab from "./HyperVLab/HyperVLab";

const Portfolio = () => {
  return (
    <div>
      <SideBar />
      <ScrollToTop showBelow={250} />
      <Container maxWidth="lg">
        {/* <div className="portfolioContent"> */}
        <div className="portfolioContentText">
          <Typography variant="h4" style={{ fontFamily: "Titillium Web" }}>
            PORTFOLIO
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ fontFamily: "Titillium Web" }}
          >
            I’m Johnny Chao, an IT Support Technician with over five years of
            experience in help desk, field service, and freelance technical
            roles. Backed by a Master’s in Computer & Information Sciences, I’ve
            supported users across Windows and macOS environments, configured
            networks, and built home labs for automated system deployment using
            PXE, DHCP, and WDS. I’ve also expanded into full-stack development
            with React (CRA), Node.js, and MySQL through structured training
            projects, giving me a well-rounded understanding of both
            infrastructure and application support. This portfolio highlights a
            range of practical work — from system imaging and asset management
            to web projects and self-hosted labs — reflecting my commitment to
            technical growth and real-world problem solving.
          </Typography>
        </div>
        <HyperVLab />
        <AUTMasters />
        <KoFiWebsite />
        {/* <MissionReadyLvl5Projects /> */}
        <MadeleinePizzutiWebsite />
        <LevelUpWorksWebsite />
        <StrigonOneFFXIVWebsite />
        {/* </div> */}
      </Container>
    </div>
  );
};

export default Portfolio;
