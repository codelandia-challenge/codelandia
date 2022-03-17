import React from "react";
import Content from "../Design/Components/Content";
import MyHeader from "../Design/Containers/Header";
import MyMain from "../Design/Containers/Main";
import MyFooter from "../Design/Containers/Footer"

const Home = () => {
  return (
      <Content>
        <MyHeader />
        <MyMain />
        <MyFooter />
      </Content>
  );
};
export default Home;
