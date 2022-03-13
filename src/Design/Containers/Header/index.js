import React from "react";

import { useState } from "react";

// Components
import ContentImages from "../../Components/ContentImages";
import Images from "../../Components/Images";
import NavBar from "../../Components/NavBar";
import ContentButtons from "../../Components/ContentButtons";
import Button from "../../Components/Buttons.js";
// Container
import Header from "./styled";

// Images
import codelandiaLogo from "../../../images/codelandiaLogo.svg";

const MyHeader = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
    console.log("testando botão");
  };

  const toggleMenuDisable = () => {
    setActiveMenu(!activeMenu);
    console.log("testando botão");
  };

  return (
    <Header>
      <NavBar>
        <ContentImages
          content="logo"
          onMouseOver={toggleMenu}
          onMouseOut={toggleMenuDisable}
        >
          <Images src={codelandiaLogo} alt="Logo" content="imgLogo" />
        </ContentImages>

        <ContentButtons styles={{
          '@initial': 'content',
          '@sm': 'contentDisable',
        }}>
          <Button styles={activeMenu ? "gitHubRepository" : "community"}>
            Meu GitHub
          </Button>
          <Button styles="community">Entrar na comunidade</Button>
        </ContentButtons>
      </NavBar>
    </Header>
  );
};
export default MyHeader;
