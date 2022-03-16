import {styled } from "../../stitches.config";

const Images = styled("img", {
  width: "100%",
  height: "100%",

  variants: {
    styles: {
      imgLogo: {
        maxWidth: "$size_3",
        height: "$size_full",
      },

      imgMenu: {
        color: "$gray_light",
        width: '$size_full',
        height: '$size_full',
      },
      imgPost: {
        color: "$gray_light",
        width: '$size_full',
        height: '$size_full',
        borderRadius: "15px",
        backgroundColor: "$dark",
        padding: "$gap",
      }

    }
  }
})
export default Images;
