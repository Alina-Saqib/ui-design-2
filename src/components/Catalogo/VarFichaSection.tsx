import { Box, Divider } from "@mui/material";
import VarFichaCompanyCard from "./VarFichaCompanyCard";
import VarFichaSecondSection from "./VarFichaSecondSection";

const VarFichaSection = (props: any) => {
  return (
    <>
      <Box sx={{ p: "20px" }}>
        <VarFichaCompanyCard id={props.id} />
        <Divider></Divider>
        <VarFichaSecondSection id={props.id} />
      </Box>
    </>
  );
};

export default VarFichaSection;
