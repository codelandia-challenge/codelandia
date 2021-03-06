import { styled } from "../../stitches.config";

const NavBar = styled("nav", {
  width: "$size_full",
  maxWidth: "$size_9",
  height: "$size_2",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  transition: "all 0.3s",

  variants: {
    space: {
      px: {
        padding: "0 $gap",
      },
    },
  },
});
export default NavBar;
