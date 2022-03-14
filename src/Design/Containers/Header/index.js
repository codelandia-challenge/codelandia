import React from "react";

import { useState } from "react";

// Components
import ContentImages from "../../Components/ContentImages";
import Images from "../../Components/Images";
import NavBar from "../../Components/NavBar";
import ContentButtons from "../../Components/ContentButtons";
import Button from "../../Components/Buttons.js";
import Menu from "../../Components/Menu";
import List from "../../Components/List";
import Links from "../../Components/Links";

// Container
import Header from "./styled";

// Images
import codelandiaLogo from "../../../images/codelandiaLogo.svg";

// Icons
import { ImMenu4, ImMenu3 } from "react-icons/im";
import { FaGithubAlt } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";

const MyHeader = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <Header>
      <NavBar
        space={{
          "@xl": "px",
        }}
      >
        {/* Content Image Logo */}
        <ContentImages styles="logo">
          <Images src={codelandiaLogo} alt="Logo" styles="imgLogo" />
        </ContentImages>

        {/* Contents Buttons NavBar */}
        <ContentButtons
          styles={{
            "@initial": "content",
            "@sm": "contentDisable",
          }}
        >
          <Button styles="gitHubRepository">Meu GitHub</Button>
          <Button styles="community">Entrar na comunidade</Button>
        </ContentButtons>

        {/* Button toggle menu */}
        <Button
          styles={{
            "@initial": "defaultButton",
            "@sm": "buttonMenu",
          }}
          onClick={toggleMenu}
        >
          {activeMenu ? (
            <ImMenu3 title="menu down" fontSize="32px" />
          ) : (
            <ImMenu4 title="menu up" fontSize="32px" />
          )}
        </Button>

        {/* Menu Mobile */}
        <Menu
          styles={{
            "@initial": "menuIsDefault",
            "@sm": activeMenu ? "menuIsActive" : "menuIsDefault",
          }}
        >
          <List>
            <Links
              styles="borderRadiusTop"
              href="https://github.com/davi-sant"
              target="_blank"
              rel="noopener"
            >
              <FaGithubAlt
                title="Icon Github"
                fontSize="15px"
                color="#04d361"
              />
              Meu GitHub
            </Links>
          </List>
          <List>
            <Links
              href="https://discord.gg/wNCWTVuxyz"
              target="_blank"
              rel="noopener"
            >
              <FaDiscord
                title="Icon Codelândia"
                fontSize="15px"
                color="#04d361"
              />
              Codelândia
            </Links>
          </List>
          <List
            href="https://davi-sant.github.io/codeBox-Homepage/ "
            target="_blank"
            rel="noopener"
          >
            <Links styles="borderRadiusBottom">
              <SiAboutdotme
                title="Icons About Me"
                fontSize="20px"
                color="#04d361"
              />
              About Me
            </Links>
          </List>
        </Menu>
      </NavBar>
    </Header>
  );
};
export default MyHeader;
