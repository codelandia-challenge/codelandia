import { styled } from "../../stitches.config";

const Menu = styled("ul", {
  display: "none",

  variants: {
    styles: {
      menuIsActive: {
        display: "flex",
        flexDirection: "column",
        width: "$size_4",
        height: "$size_4",
        transition: "all 0.5s",
        position: "absolute",
        borderRadius: "15px",
        top: "65px",
        right: "$gap",
        border: "1px solid $purple",
        backdropFilter: "blur(5px)",
        backgroundColor: "$dark_transparent",
      },

      menuIsDefault: {
        display: "none",
      },
    },
  },
});
export default Menu;
