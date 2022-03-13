import {styled } from "../../stitches.config";

const Images = styled("img", {
  width: "100%",
  height: "100%",

  variants: {
    content: {
      imgLogo: {
        maxWidth: "$size_3",
        height: "$size_1",
      }
    }
  }
})
export default Images;
