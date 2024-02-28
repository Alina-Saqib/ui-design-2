import { Box } from "@mui/material";

const UiCard = (props: any) => {
  return (
    <Box
      component="div"
      className="uiCardMain"
      sx={{ p: `${props.padding}`, background: "white", borderRadius: "12px" }}
    >
      {props.children}
    </Box>
  );
};

export default UiCard;
