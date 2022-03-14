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
      // variates spaces
      px: {
        paddingLeft: "$gap",
        paddingRight: "$gap",
      }
    }
  }
})
export default Section;
