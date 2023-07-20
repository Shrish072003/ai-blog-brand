import React from 'react';
import * as XLSX from 'xlsx';
import {Button, Box, Grid } from '@mui/material';
import { CopyToClipboard } from "react-copy-to-clipboard";


function Populate({populateData, selectedRowsData, copyToClipboard}) {
  const codeSnippet = `${copyToClipboard}`;




   const downloadExcel = (populateData)  => {
        const worksheet = XLSX.utils.json_to_sheet(populateData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.utils.sheet_add_aoa(worksheet, [["Keyword", "Search Volume", "Competition", "CPC", "SERP Biding Range"]], { origin: "A1" });
        XLSX.writeFile(workbook, "DataSheet.xlsx");
      };


  return (

    <>
     
    <Box sx={{mb: 1}}>
      <Grid container >
      <Box component={Grid} item md={2}  display={{ xs: "none", md: "block" }} >
        {selectedRowsData} Selected
        </Box>
      
        <Grid item xs={6} md={7} lg={8} textAlign={{ xs: "left", md: "right" }} >
        <CopyToClipboard variant="contained" sx={{mr: 2}} color="primary" text={codeSnippet} >
       <Button>Copy to clipboard</Button>
       </CopyToClipboard>
        </Grid>
        <Grid item xs={6} md={3} lg={2} textAlign="right">
        <Button variant="contained" color="primary" onClick={()=>downloadExcel(populateData)}>Export Selected KWS</Button>

        </Grid>
      </Grid>
    </Box>
    
    </>


  )
}

export default Populate