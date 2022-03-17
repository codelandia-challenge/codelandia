import { styled } from "../../stitches.config.js";

const Paragraph = styled("p", {
  width: "$size_full",
  color: "$gray",
  fontFamily: "$ibm_plex",
  alignItems: "center",
  lineHeight: "23px",

  variants: {
    styles: {
      paragraphWrapper: {
        display: "flex",
        alignItems: "center",
        padding: "$gap 0",
        height: "100%",
        maxWidth: "$size_10",
      },
      paragraph: {
        fontSize: "12px",
      },
      paragraph_bs: {
        fontSize: "$size",
      },
      paragraph_sm: {
        fontSize: "$size_1",
      },
      paragraph_md: {
        fontSize: "$size_1",
      },
      paragraphFooter: {
        maxWidth: "$size_6",
        fontSize: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        height: "100%",
      },
      paragraphFooterMobile: {
        justifyContent: "center",
        paddingTop: "$gap",
      },
    },
  },
});
export default Paragraph;
