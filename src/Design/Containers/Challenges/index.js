import React from "react";
import Article from "../../Components/Article";
import Figure from "../../Components/Figure";
import Images from "../../Components/Images";
import Section from "../../Components/Section";
import Title from "../../Components/Title";
import Paragraph from "../../Components/Paragraph";
import ContentButtons from "../../Components/ContentButtons"
import Buttons from "../../Components/Buttons"
import posts from "../../../Posts";

const Challenges = () => {
  return (
    <Section
      styles={{
        "@initial": "sectionChallenge",
        "@xl": "px",
        "@lg": "coll_2",
      }}
    >
      {posts.map((post, index) => {
        return (
          <Article key={index}>
            <Figure>
              <Images styles="imgPost" src={post.assets} />
            </Figure>
            <Title>{post.titleProject}</Title>
            <Paragraph
              styles={{ "@initial": "paragraph_md", "@sm": "paragraph" }}
            >
              {post.descriptionProject}
            </Paragraph>
            <ContentButtons styles={{
              "@initial": "contentButtonPost",
              "@md": "flex_col",
            }}>
              <Buttons styles="demoApplication">Demo</Buttons>
              <Buttons styles="gitHubChallenge">GitHub</Buttons>
            </ContentButtons>
          </Article>
        );
      })}
    </Section>
  );
};
export default Challenges;
