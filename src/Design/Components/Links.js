import { styled } from "../../stitches.config";

const Links = styled("a", {
  width: "$size_full",
  height: "$size_full",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$gray_light",
  fontSize: "$size_1",
  textDecoration: "none",
  fontFamily: "$dm_sans",
  transition: "all 0.3s",
  gap: "5px",

  "&:hover": {
    backgroundColor: "$purple"
  },

  variants: {
    styles: {
      borderRadiusTop: {
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
      },

      borderRadiusBottom: {
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
      },
    },
  },
});
export default Links;
