import { styled } from "../../stitches.config";

const ContentButtons = styled("div", {
  display: "block",
  height: "$size_full",
  gap: "20px",

  variants: {
    styles: {
      content: {
        display: "flex",
      },
      contentDisable: {
        display: "none",
      }
    },
  }
})
export default ContentButtons;
