import React from "react";

// Components
import Images from "../../Components/Images";
import Section from "../../Components/Section";
import Paragraph from "../../Components/Paragraph";

// Container
import Footer from "../../Components/Footer.js";

// Images
import logoFooter from "../../../images/logoFooter.svg";

const MyFooter = () => {
  return (
    <Footer>
      <Section
        styles={{
          "@initial": "sectionFooter",
          "@xl": "px",
          "@sm": "sectionFooterMobile",
        }}
      >
        <figure>
          <Images
            width={40}
            height={40}
            src={logoFooter}
            alt="Logo que representa a comunidade codelândia"
          />
        </figure>

        <Paragraph styles={{
          "@initial": "paragraphFooter",
          "@sm": "paragraphFooterMobile",
        }}>
          (c) 2022 - Davi Santos Dias | Codelândia
        </Paragraph>
      </Section>
    </Footer>
  );
};
export default MyFooter;
