import React from "react";

// Components
import ContentImages from "../../Components/ContentImages";
import Images from "../../Components/Images";
import NavBar from "../../Components/NavBar";
import ContentButtons from "../../Components/ContentButtons";
import Button from "../../Components/Buttons.js"
// Container
import Header from "./styled";

// Images
import codelandiaLogo from "../../../images/codelandiaLogo.svg";

const MyHeader = () => {
  return (
    <Header>
      <NavBar>
        <ContentImages content="logo">
          <Images src={codelandiaLogo} alt="Logo" content="imgLogo" />
        </ContentImages>

        <ContentButtons>
         <Button styles="gitHubRepository">Meu GitHub</Button>     
          <Button styles="community">Entrar na comunidade</Button>
        </ContentButtons>
      </NavBar>
    </Header>
  );
};
export default MyHeader;
