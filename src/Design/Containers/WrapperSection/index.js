import React from "react";
import Section from "../../Components/Section";
import Span from "../../Components/Span";

const MyWrapper = () => {
  return (
    <Section styles={{
      "@initial": "SectionWrapper",
      "@xl": "px"
    }}>
      <Span styles={{
        "@initial": "spanCommunity",
        "@sm": "text_2",
      }}>
        comunidade dev
      </Span>
    </Section>
  );
}
export default MyWrapper;
