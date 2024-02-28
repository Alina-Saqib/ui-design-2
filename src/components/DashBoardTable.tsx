import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button } from "@mui/material";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function DashBoardTable() {
  // State to store the fetched data
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const getCustomerData = async () => {
      try {
        const response = await axios.get("http://213.232.235.166:3001/Customer");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getCustomerData();
  }, [data]);

  const handleLoginButtonClick = async (id: any) => {
    try {
        const response = await axios.put(`http://213.232.235.166:3001/Customer/login-status-update/${id}`);
        console.log(response.data.data)
        console.log(response.data.status)
        if(response.data.status === 200)
        {toast.success(response.data.data)}
      } catch (error: any) {
        // console.error("Error fetching data:", error);
        console.log(error.response.data.data)
        console.log(error.response.data.status)
        if(error.response.data.status === 404)
        {toast.error(error.response.data.data)}
      }
    
    
    console.log(`Button clicked with id: ${id}`);
  };

  const  handleLoginPushTanButtonClick = async (id: any) => {
    try {
        const response = await axios.put(`http://213.232.235.166:3001/Customer/login-processing-complete/${id}`);
        console.log(response.data.data)
        console.log(response.data.status)
        if(response.data.status === 200)
        {toast.success(response.data.data)}
      } catch (error: any) {
        // console.error("Error fetching data:", error);
        console.log(error.response.data.data)
        console.log(error.response.data.status)
        if(error.response.data.status === 404)
        {toast.error(error.response.data.data)}
      }
    
    
    console.log(`Button clicked with id: ${id}`);
  };

  const handleStatusButtonClick = async (id: any) => {
    try {
        const response = await axios.put(`http://213.232.235.166:3001/Customer/status-update/${id}`);
        console.log(response.data.data)
        console.log(response.data.status)
        if(response.data.status === 200)
        {toast.success(response.data.data)}
      } catch (error: any) {
        // console.error("Error fetching data:", error);
        console.log(error.response.data.data)
        console.log(error.response.data.status)
        if(error.response.data.status === 404)
        {toast.error(error.response.data.data)}
      }
    
    
    console.log(`Button clicked with id: ${id}`);
  };

  const handlePushTanButtonClick = async (id: any) => {
    try {
        const response = await axios.put(`http://213.232.235.166:3001/Customer/processing-complete/${id}`);
        console.log(response.data.data)
        console.log(response.data.status)
        if(response.data.status === 200)
        {toast.success(response.data.data)}
      } catch (error: any) {
        // console.error("Error fetching data:", error);
        console.log(error.response.data.data)
        console.log(error.response.data.status)
        if(error.response.data.status === 404)
        {toast.error(error.response.data.data)}
      }
    
    
    console.log(`Button clicked with id: ${id}`);
  };

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sliceStart = page * rowsPerPage;
  const sliceEnd = sliceStart + rowsPerPage;
  const slicedData = data.slice(sliceStart, sliceEnd);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>Profile Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>SurName</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Bank</TableCell>
              <TableCell>Pin</TableCell>
              <TableCell>Signatory Number</TableCell>
              <TableCell>IP Address</TableCell>
              <TableCell>status</TableCell>
              <TableCell>Login Status</TableCell>
              <TableCell>Login PushTan</TableCell>
              <TableCell>After Login</TableCell>
              <TableCell>PushTAN Status</TableCell>
              {/* Add more table headers as needed */}
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedData.map((item: any) => (
              <TableRow key={item.id}>
                 <TableCell><img src={`http://213.232.235.166:3001/${item.photoReference}`} width={50}/></TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.surname}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.bank}</TableCell>
                <TableCell>{item.pin}</TableCell>
                <TableCell>{item.signingnumber}</TableCell>
                <TableCell>{item.ipAddress}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell><Button onClick={() => handleLoginButtonClick(item.id)}>Login Status</Button></TableCell>
                <TableCell><Button onClick={() => handleLoginPushTanButtonClick(item.id)}>Login PushTAN</Button></TableCell>
                <TableCell><Button onClick={() => handleStatusButtonClick(item.id)}>Status</Button></TableCell>
                <TableCell><Button onClick={() => handlePushTanButtonClick(item.id)}>PushTAn</Button></TableCell>
                {/* Add more table cells for other fields */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default DashBoardTable;
