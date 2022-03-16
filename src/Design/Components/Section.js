import { styled } from "../../stitches.config";

const Section = styled("section", {
  display: "block",

  variants: {
    styles: {
      SectionWrapper: {
        width: "$size_full",
        maxWidth: "$size_9",
        margin: "0 auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        paddingTop: "$gap_4"
      },
      sectionChallenge: {
        width: "$size_full",
        maxWidth: "$size_9",
        margin: "0 auto",
        paddingTop: "$gap_4",


        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        justifyContent: "center",
        gridGap: "$gap_2",
      },
      // paddings
      px: {
        paddingLeft: "$gap",
        paddingRight: "$gap",
      },
      //columns
      coll_2: {
        gridTemplateColumns: "repeat(auto-fit, minmax(295px, 1fr))"
      }
    }
  }
})
export default Section;
