import { styled } from "../../stitches.config";

export const Button = styled("a", {
  width: "$size_full",
  maxWidth: "$size_3",
  height: "$size_1",
  fontFamily: "$dm_sans",
  fontSize: "$size_1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  variants: {
    color: {
      demoApplication: {
        border: "1px solid $green",
        borderRadius: "4px",
        backgroundColor: "$green",
        color: "$gray_light",
        cursor: "pointer",

        "&:hover": {
          opacity: "90%",
        },
      },

      gitHubRepository: {
        border: "1px solid $green",
        borderRadius: "4px",
        backgroundColor: "$colorOff",
        color: "$gray_light",
        cursor: "pointer",

        "&:hover": {
          opacity: "90%",
        },
      },
    },
  },
});
