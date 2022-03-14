import {styled} from "../../stitches.config";

const Span = styled("span", {
  color: "$gray_light",
  fontFamily: "$ibm_plex",

  variants: {
    styles: {
      spanCommunity: {
        color: "$green",
        fontSize: "$size_1",
        paddingBottom: "$gap",
        textTransform: "uppercase",
      },

      // size fontes
      text_2: {
        fontSize: "$size_1",
      }
    }
  }
})
export default Span;
