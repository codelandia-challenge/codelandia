import { styled } from "../../stitches.config";

const ContentImages = styled("figure", {
  height: "100%",
  width: "100%",

  variants: {
    content: {
      logo: {
        maxWidth: "$size_5",
        height: "$size_full",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        color: "$gray_light",
      }
    }
  }
});
export default ContentImages;
