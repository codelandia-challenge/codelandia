import { styled } from "../../stitches.config.js";

const Title = styled("h1", {
  color: "$gray_light",
  fontFamily: "$ibm_plex",
  lineHeight: "40px",

  variants: {
    styles: {
      title_bs: {
        fontSize: "16px",
        lineHeight: "25px"
      },
      title_sm: {
        fontSize: "$size_3",
        fontWeight: "normal",
        lineHeight: "40px",
        //*"br": {
         // display: "none",
        //}
      },
      title_md: {
        fontSize: "$size_6",
        fontWeight: "normal",
        lineHeight: "50px",
      },
      title_lg: {
        fontSize: "$size_9",
        fontWeight: "500",
      },
      title_xl: {
        fontSize: "$size_11",
        fontWeight: "500",
        lineHeight: "70px",
      }

    }
  }
})
export default Title;
