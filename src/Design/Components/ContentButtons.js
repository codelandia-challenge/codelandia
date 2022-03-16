import { styled } from "../../stitches.config";

const ContentButtons = styled("div", {
  display: "block",
  gap: "20px",

  variants: {
    styles: {
      content: {
        display: "flex",
      },
      contentButtonPost: {
        marginTop: "$gap_3",
        display: "flex",
      },
      flex_col: {
        display: "flex",
        flexWrap: "wrap",
      },
      contentDisable: {
        display: "none",
      },
    },
  },
});
export default ContentButtons;
