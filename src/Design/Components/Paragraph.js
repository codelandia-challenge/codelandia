import { styled } from "../../stitches.config.js";

const Paragraph = styled("p", {
  width: "$size_full",
  maxWidth: "$size_10",
  color: "$gray",
  fontFamily: "$ibm_plex",
  paddingTop: "$gap",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
 lineHeight: "23px",


  variants: {
    styles: {
      paragraph_bs: {
        fontSize: "$size",
       
      },
      paragraph_sm: {
        fontSize: "$size_1",
      },
      paragraph_md: {
        fontSize: "$size_1",
      }
    }
  }
})
export default Paragraph;
