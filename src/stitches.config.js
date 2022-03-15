import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  media: {
    bs: '(max-width: 360px)',
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 960px)',
    xl: '(max-width: 1024px)',
  },
  theme: {
    colors: {
      colorOff: "transparent",
      purple: "#873eff",
      green: "#04d361",
      dark: "#0e091b",
      dark_transparent: "rgba(14, 9, 27, 0.85)",
      dark_200: "#171228",
      gray: "#aeaeae",
      gray_light: "#f9f9f9",
    },
    space: {
      gap: "20px",
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
      size: "32px",
      size_1: "42px",
      size_2: "60px",
      size_3: "165px",
      size_4: "222px",
      size_5: "248px",
      size_6: "500px",
      size_7: "549px",
      size_8: "601px",
      size_9: "1228px",
      size_10: "740px"
    },
    fontSizes: {
      size_full: "100%",
      size: "12px",
      size_1: "15px",
      size_2: "20px",
      size_3: "24px",
      size_4: "28px",
      size_5: "32px",
      size_6: "36px",
      size_7: "40px",
      size_8: "44px",
      size_9: "48px",
      size_10: "52px",
      size_11: "56px",
    },
    fonts: {
      dm_sans: "DM Sans, sans-serif",
      ibm_plex: "IBM Plex Mono, monospace",
    },
  },
});
