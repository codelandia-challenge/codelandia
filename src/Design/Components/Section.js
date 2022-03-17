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
        paddingTop: "$gap_4",
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
      sectionFooter: {
        width: "sizy_full",
        maxWidth: "$size_9",
        height: "$size_full",
        margin: "0px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "$gap_3 0"
      },
      sectionFooterMobile: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        paddingLeft: "$gap",
        paddingRight: "$gap",
      },
      // paddings
      px: {
        paddingLeft: "$gap",
        paddingRight: "$gap",
      },
      //columns
      coll_2: {
        gridTemplateColumns: "repeat(auto-fit, minmax(295px, 1fr))",
      },
    },
  },
});
export default Section;
