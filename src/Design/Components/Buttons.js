import { styled } from "../../stitches.config";

const Button = styled("a", {
  fontFamily: "$dm_sans",
  fontSize: "$size_1",
  cursor: "pointer",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s",
  color: "$gray_light",

  "&:hover": {
    opacity: "80%",
  },

  variants: {
    styles: {
      demoApplication: {
        border: "1px solid $green",
        backgroundColor: "$green",

      },

      gitHubChallenge: {
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
    },
  },
});
export default Button;
