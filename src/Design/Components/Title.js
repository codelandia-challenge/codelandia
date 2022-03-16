import { styled } from "../../stitches.config.js";

const Title = styled("h1", {
  color: "$gray_light",
  fontFamily: "$ibm_plex",
  lineHeight: "40px",

  variants: {
    styles: {
      title_bs: {
        fontSize: "16px",
        lineHeight: "140%",
      },
      title_sm: {
        fontSize: "$size_3",
        fontWeight: "normal",
        lineHeight: "130%",
      },
      title_md: {
        fontSize: "$size_6",
        fontWeight: "normal",
        lineHeight: "120%",
      },
      title_lg: {
        fontSize: "$size_9",
        fontWeight: "500",
        lineHeight: "110%",
      },
      title_xl: {
        fontSize: "$size_11",
        fontWeight: "500",
        lineHeight: "100%",
      },
      textSeparator: {
        width: "100%",
        maxWidth: "$size_9",
        color: "$purple",
        fontSize: "$size",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        fontFamily: "$dm_sans"
      },
    },
  },
});
export default Title;
