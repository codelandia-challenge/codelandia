import React from "react";

// Components
import Span from "../../Components/Span";
// Container
import MyWrapper from "../WrapperSection";
import Main from "../../Components/Main";
import Title from "../../Components/Title";
import Challenges from "../Challenges";

//Icons
import { FaMugHot } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";

const MyMain = () => {
  return (
    <Main>
      <Span
        styles={{
          "@initial": "contentSeparator",
          "@xl": "padding_x",
        }}
      >
        <Title styles="textSeparator">
          01 - Introduction
          <Span styles="margin_l">
            <FaMugHot color="#04d361" />
          </Span>
        </Title>
      </Span>

      <MyWrapper />

      <Span
        styles={{
          "@initial": "contentSeparator",
          "@xl": "padding_x",
        }}
      >
        <Title styles="textSeparator">
          02 - Challenges completed
          <Span styles="margin_l">
            <FaPizzaSlice fontSize="12px" color="#04d361" />
          </Span>
        </Title>
      </Span>
      <Challenges />
    </Main>
  );
};

export default MyMain;
