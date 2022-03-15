import {styled} from "../../stitches.config";

const Span = styled("span", {
  color: "$gray_light",
  fontFamily: "$ibm_plex",

  variants: {
    styles: {
      spanCommunity: {
        color: "$green",
        fontSize: "$size",
        paddingBottom: "$gap",
        textTransform: "uppercase",
      },

      // size fontes
      text_bs: {
        fontSize: "$size",
      }
    }
  }
})
export default Span;
