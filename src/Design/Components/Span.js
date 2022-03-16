import { styled } from "../../stitches.config";

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
      contentSeparator: {
        borderBottom: "1px solid $gray_transparent",
        width: "100%",
        display: "flex",
        marginTop: "$gap",
      },

      // size fontes
      text_bs: {
        fontSize: "$size",
      },
      //paddings
      padding_x: {
        padding: "0 $gap",
      },
      //margin
      margin_l: {
        marginLeft: "10px"
      }
    },
  },
});
export default Span;
