import React from "react";
import Section from "../../Components/Section";
import Span from "../../Components/Span";
import Title from "../../Components/Title";
import Paragraph from "../../Components/Paragraph";

const MyWrapper = () => {
  return (
    <Section styles={{
      "@initial": "SectionWrapper",
      "@xl": "px"
    }}>
      <Span styles={{
        "@initial": "spanCommunity",
        "@sm": "text_bs",
      }}>
        comunidade dev
      </Span>
      <Title styles={{
        "@initial": "title_xl",
        "@lg": "title_lg",
        "@md": "title_md",
        "@sm": "title_sm",
        "@bs": "title_bs",
      }}>
        Projetos da <br />
        comunidade Codelândia
      </Title>
      <Paragraph styles={{
        "@initial": "paragraphWrapper",
        "@sm": "paragraph_bs",
      }}>
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Donec felis ligula, accumsan nec cursus in,
        eleifend sit amet dui.
      </Paragraph>


    </Section>
  );
}
export default MyWrapper;
