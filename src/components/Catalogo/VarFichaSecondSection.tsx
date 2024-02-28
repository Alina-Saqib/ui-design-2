import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { Box, Divider } from "@mui/material";
import VarFichaSecondSectionCompanyInfoCard from "./VarFichaSecondSectionCompanyInfoCard";
import VarFichaSecondSectionTable from "./VarFichaSecondSectionTable";
import { listData } from "../../utility/data.json";
import { useEffect } from "react";

const VarFichaSecondSection = (props: any) => {
  const [option, setOption] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };

  const [filteredList, setFilteredList] = useState(listData);

  const filterById = (id: string) => {
    setFilteredList(
      listData.filter((item: any) => {
        return item.id == id;
      })
    );
  };

  useEffect(() => {
    filterById(props.id);
  }, [props.id]);

  // console.log(filteredList);

  const data: { id: string; count: string; title: string; imgUrl: string }[] = [
    {
      id: "1",
      count: "02",
      title: "Oficinas",
      imgUrl: "/assets/varFicha1.png",
    },
    {
      id: "2",
      count: "876",
      title: "Propiedades",
      imgUrl: "/assets/varFicha2.png",
    },
    {
      id: "3",
      count: "04",
      title: "Ejecutivos",
      imgUrl: "/assets/varFicha3.png",
    },
    {
      id: "4",
      count: "12",
      title: "Anos",
      imgUrl: "/assets/varFicha4.png",
    },
  ];

  const tableData: {
    id: string;
    img: string;
    title: string;
    email: string;
    phone: string;
  }[] = [
    {
      id: "1",
      img: "assets/avatar1.png",
      title: "Juan Carlos Latorre",
      email: "jclatorre@welink.cl",
      phone: "+569 1 393 994",
    },
    {
      id: "2",
      img: "assets/avatar1.png",
      title: "Maira Jose Garcia",
      email: "mjgarcia@welink.cl",
      phone: "+569 1 393 994",
    },
    {
      id: "3",
      img: "assets/avatar1.png",
      title: "Pedro Medina    ",
      email: "pmedina@welink.cl",
      phone: "+569 1 393 994",
    },
    {
      id: "4",
      img: "assets/avatar1.png",
      title: "Claudio Palma",
      email: "cpalma@welink.cl",
      phone: "+569 1 393 994",
    },
    {
      id: "5",
      img: "assets/avatar1.png",
      title: "Maira Jose Garcia",
      email: "mjgarcia@welink.cl",
      phone: "+569 1 393 994",
    },
    {
      id: "6",
      img: "assets/avatar1.png",
      title: "Pedro Medina",
      email: "pmedina@welink.cl",
      phone: "+569 1 393 994",
    },
    {
      id: "7",
      img: "assets/avatar1.png",
      title: "Claudio Palma",
      email: "cpalma@welink.cl",
      phone: "+569 1 393 994",
    },
  ];
  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "end",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <FormControl sx={{ minWidth: "50%" }}>
          <Select
            value={option}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "12px",
              background: "white",
              height: "46px",
              color: "rgba(0,0,0,0.6)",
            }}
          >
            <MenuItem value="">
              <em>Comuna Donde Atienden</em>
            </MenuItem>
            <MenuItem value={10}>Comuna Donde Atienden 1</MenuItem>
            <MenuItem value={20}>Comuna Donde Atienden 2</MenuItem>
            <MenuItem value={30}>Comuna Donde Atienden 3</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ margin: "20px 0px" }}>
        <VarFichaSecondSectionCompanyInfoCard filterData={filteredList} />
      </Box>
      <Divider></Divider>
      <Box>
        <VarFichaSecondSectionTable
          data={tableData}
          filterData={filteredList}
        />
      </Box>
    </>
  );
};

export default VarFichaSecondSection;
