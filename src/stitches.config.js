import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      colorOff: "transparent",
      purple: "#873eff",
      green: "#04d361",
      dark: "#0e091b",
      dark_200: "#171228",
      gray: "#aeaeae",
      gray_light: "#f9f9f9",
    },
    space: {
      gap_1: "24px",
      gap_2: "26px",
      gap_3: "29px",
      gap_4: "40px",
      gap_5: "105px",
      gap_6: "141px",
    },
    sizes: {
      // Container sizes
      size_full: "100%",
      size_1: "42px",
      size_2: "62px",
      size_3: "165px",
      size_4: "222px",
      size_5: "248px",
      size_6: "500px",
      size_7: "549px",
      size_8: "601px",
      size_9: "1228px",
    },
    fontSizes: {
      size_full: "100%",
      size_1: "15px",
      size_2: "17px",
      size_3: "24px",
      size_4: "64px",
    },
    fonts: {
      dm_sans: "DM Sans, sans-serif",
      ibm_plex: "IBM Plex Mono, monospace",
    },
  },
});
