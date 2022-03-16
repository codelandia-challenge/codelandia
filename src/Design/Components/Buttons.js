import { styled } from "../../stitches.config";

const Button = styled("a", {
  fontFamily: "$dm_sans",
  fontSize: "$size",
  cursor: "pointer",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s",
  color: "$gray_light",
  width: "$size_full",

  "&:hover": {
    opacity: "80%",
  },

  variants: {
    styles: {
      demoApplication: {
        border: "1px solid $green",
        backgroundColor: "$green",
        height: "$size_1",
      },

      gitHubChallenge: {
        height: "$size_1",
        border: "1px solid $green",
        backgroundColor: "$colorOff",
        cursor: "pointer",
      },

      gitHubRepository: {
        width: "$size_3",
        height: "$size_2",
      },

      community: {
        width: "$size_4",
        height: "$size_2",
        border: "1px solid $purple",
        cursor: "pointer",
      },

      buttonMenu: {
        display: "flex",
        justifyContent: "flex-end",
        width: "$size_2",
        height: "$size_2",
      },

      defaultButton: {
        display: "none",
      },
    },
  },
});
export default Button;
