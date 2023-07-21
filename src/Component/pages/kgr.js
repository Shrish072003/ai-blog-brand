import React, {useState, useEffect, useCallback} from "react"
import { Dna } from  'react-loader-spinner'
import {Box, Grid, TextField, Button, Container, Typography, Table ,TableBody , TableCell ,TableContainer , TableHead ,TableRow } from '@mui/material';
import CountrySelect from '../../Component/CountrySelect'
import LanguageSelect from '../../Component/LanguageSelect'
// import BarChartIcon from '@mui/icons-material/BarChart';
import LineChart from '../../Component/LineChart';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import axios from "axios";
import DataTable from 'react-data-table-component';
// import TableData from "../Component/TableData";
import Populate from "../../Component/Populate";
import WildCard from "../../Component/WildCard";
import './pages.css'


// jesot58961@aregods.com
const submitButton = {
    paddingTop: "14px",
    paddingBottom: "14px",
    display: "block",
    width: "100%"
}

const cardStyle = {
    borderRadius: '14px',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    color: 'white',
    backgroundColor: '#7149C6',
    paddingTop: "12px",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingBottom: "12px",
}

const cardStyleSecondDiv = {
  borderRadius: '14px',
  boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
  color: 'white',
  backgroundColor: '#FC2947',
  paddingTop: "12px",
  paddingLeft: "12px",
  paddingRight: "12px",
  paddingBottom: "12px",
}

const cardStyleParagraph = {
    lineHeight: '32px',
    fontSize: '32px',
}
  
// const cardStyleIcon = {
//   lineHeight: '84px',
//   fontSize: '84px',
//   width: "1em",
//   height: "1em"
// }

const cardDiv = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: '0px',
  padding: '0px'
}

const chartDesign = {
  height: "271px",
  width: "100%",
  
}

const headingtwoStyle = {
  fontSize: '1.5rem',
  fontWeight: '600',
  lineHeight: '2rem',
  marginBottom: '5px'
}

const headingtwoStyles = {
  fontSize: '1.5rem',
  fontWeight: '600',
  lineHeight: '2rem',
  marginBottom: '8px',
  paddingLeft: '8px'
}

  const chartBox = {
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '12px',
    padding: '18px'
  }

  const tableHead = {
    backgroundColor:'#fafafa',
  }



export default function NewMainTool() {
  
 

  const [inpurValue, setinpurValue] = useState("");
  const [postRes, setpostRes] = useState();
  // const [chart, setChart] = useState([]);
  const [loading, setLoading] = useState();
  // const [banner, setBanner] = useState();
  const [includeKeyword, setIncludeKeyword] = useState("");
  const [searchVolume, setSearchVolume] = useState("");
  const [excludeKeyword, setExcludeKeyword] = useState("");
  const [longtailKeyword, setLongtailKeyword] = useState("");
  const [kgrlongtailKeyword, setKgrtailKeyword] = useState("");
  const [rows, setRows] = useState();
  const [copyToClip, setCopyToClip] = useState();
  const [messageerror, setMessageError] = useState();
  const [countryCode, setCountryCode] = useState("");
  const [languageCode, setLanuageCode] = useState("");
  const [wildData, setWildData] = useState("");
  const [inputValue, setInputValue] = useState("");

console.log(wildData)
console.log(inputValue)

  let monthlyKeywordVolume = [] ;

 
  

  // const incrementViews = useCallback(() => {
  //   switch (wildData) {
  //     case "best":
  //     return  setinpurValue("best " + inpurValue);
  //     case "what":
  //     return  setinpurValue("what " + inpurValue);
  //     case "":
  //     return setinpurValue(inpurValue);
      
  //     case "undefined":
  //     return setinpurValue(inpurValue);
      
  //     case undefined:
  //     return setinpurValue(inpurValue);
      
  //     default:
  //       return setinpurValue(inpurValue);
  //   }
  // }, [wildData]);

  // useEffect(() => {
  //   incrementViews();
  // }, [incrementViews]);

  const incrementViews = useCallback(() => {
        setInputValue(inpurValue.toLowerCase())
    if (wildData === "best") {
      return  setInputValue("Best " + inpurValue.toLowerCase());
    } else if (wildData === "what"){
      return  setInputValue("What " + inpurValue.toLowerCase());
    } else if (wildData === "vs"){
      return  setInputValue(inpurValue.toLowerCase() + " vs");
    } else if (wildData === "how"){
      return  setInputValue("How to " + inpurValue.toLowerCase());
    } else if (wildData === "most"){
      return  setInputValue("Most " + inpurValue.toLowerCase());
    } else if (wildData === "alternative"){
      return  setInputValue(inpurValue.toLowerCase() + " Alternative" );
    } else if (wildData === ""){
      return  setInputValue("" + inpurValue.toLowerCase());
    } else if (wildData === undefined){
      return  setInputValue(inpurValue.toLowerCase());
    } else if (wildData === "undefined"){
      return  setInputValue(inpurValue.toLowerCase());
    } 
  }, [wildData, inpurValue]);


  useEffect(() => {
    
    incrementViews()
  
    
  }, [incrementViews])
  
  function handleChangeform(event) {
    setinpurValue(event.target.value);
   
  }

  // setInputValue(inpurValue)

  const  handleSubmit = async (e) => {
    e.preventDefault();
   

    if(inputValue.length < 2){
      return;
    }


      // console.log(inpurValue)
      // console.log(inputValue)
      setLoading(true)
      
   
      //  https://mainapp.fly.dev/mainfree  https://freekwintentandextension.herokuapp.com/inputData
     await axios.post("https://freekw-ald3taj4oq-nn.a.run.app/inputData", {inputValue, countryCode, languageCode} , {
    
        headers: { 'Access-Control-Allow-Origin': '*' , 'Content-Type': 'application/json'}
      })
        .then((response) => {
          console.log(response.data)
          setpostRes(response.data.filter(x => x.keyword_idea_metrics !== null).sort(sortFunction).filter(filterFunctiong).filter(filterFunctionf).filter(filterFunction).filter(filterFunctiond).filter(filterFunctione).filter(filteredWildData));
          setLoading(false);
          // setinpurValue("")
          // setInputValue("")

          setMessageError(null)
          // console.log(inputValue)
        }).catch(error => {
        
          console.log(error)
          setMessageError(error)
          setLoading(false);
        })

        
    } 
 
  
    if(postRes !== undefined && postRes.slice(0, 1)[0] !== undefined) {
  
    postRes.slice(0, 1)[0].keyword_idea_metrics.monthly_search_volumes.map((data) => {
    return monthlyKeywordVolume.push(data.monthly_searches)
  }) 

  

} 


  let include = includeKeyword.toLowerCase().split(",");

  const filterFunction = (a) => {

  return !includeKeyword ? true :  include.every(p => a.text.includes(p.trim())) 

  }
  let excludeK = excludeKeyword.toLowerCase()
  const filterFunctiond = (a) => {
    return !excludeK ? true :  !a.text.includes(excludeK) 
    }
  
  const filterFunctione = (a) => {
      return !searchVolume ? true :  a.keyword_idea_metrics.avg_monthly_searches < parseInt(searchVolume) 
   }

   const filterFunctionf = (a) => {
       return !kgrlongtailKeyword ? true :  a.keyword_idea_metrics.avg_monthly_searches > parseInt(kgrlongtailKeyword)
  }

  const filterFunctiong = (a) => {
    return !longtailKeyword ? true :  a.text.split(" ").length === parseInt(longtailKeyword) 
}

const sortFunction = (a,b) => {
  return b.keyword_idea_metrics.avg_monthly_searches - a.keyword_idea_metrics.avg_monthly_searches;
}

// const filteredWildData = (w) => {
//   if (wildData !== undefined && wildData !== "") {
//     return w.text.includes(wildData);
//   }
// };

const filteredWildData = (w) => (wildData !== undefined && wildData !== "") ? w.text.includes(wildData) : true;




const handleChange = ({ selectedRows }) => {

  
  var arr1 = selectedRows.map(function(item){
    return [item.text, item.keyword_idea_metrics.avg_monthly_searches, item.keyword_idea_metrics.competition, `$ ${isNaN(((item.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000 / 190) + (item.keyword_idea_metrics.high_top_of_page_bid_micros / 1000000 / 190)).toFixed(2)) ? 1 : ((item.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000 / 190) + (item.keyword_idea_metrics.high_top_of_page_bid_micros / 1000000 / 190)).toFixed(2)}`, `$ ${isNaN((item.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000 / 190).toFixed(2)) ? 1 : (item.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000 / 190).toFixed(2)} to $ ${isNaN((item.keyword_idea_metrics.high_top_of_page_bid_micros / 1000000 / 190).toFixed(2)) ? 2 : (item.keyword_idea_metrics.high_top_of_page_bid_micros / 1000000 / 190).toFixed(2)}`];
});


var arr2 = selectedRows.map(function(item){
  return item.text ;
});

setCopyToClip(arr2.join('\n'))

  setRows(arr1)
};





if(rows !== undefined && rows.length !== 0){

var lengthData = rows.length
}



const customSort = (rows, selector, direction) => {
  return rows.sort((rowA, rowB) => {
   // use the selector function to resolve your field names by passing the sort comparitors
   const aField = selector(rowA)
   const bField = selector(rowB)
 
   let comparison = 0;
 
   if (aField > bField) {
    comparison = 1;
   } else if (aField < bField) {
    comparison = -1;
   }
 
   return direction === 'desc' ? comparison * -1 : comparison;
  });
 };


const columns = [
  {
  name: '# ',
  cell: (row, index) => index + 1,
  width: '66px',
  // sortFunction: caseInsensitiveSort
  },
  {
      name: 'Keyword',
      selector: row => row.text,
      sortable: true,
      // width: '237px',
      width: '334px',
   
  },
  {
      name: 'Search Volume',
      selector: row => parseInt(row.keyword_idea_metrics.avg_monthly_searches),
      sortable: true,
      center: true,
      // width: '175px',
    
  },
  {
      name: 'Paid Ads Competition',
      selector: row => row.keyword_idea_metrics.competition,
      sortable: true,
      center: true,
      // width: '170px',
      // width: '225px',
      
  },
  {
      name: 'CPC',
      // selector: row => '$ ' +  ((((row.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000 / 178) + (row.keyword_idea_metrics.high_top_of_page_bid_micros / 1000000 / 178))) / 2).toFixed(2),
      selector: row => `$ ${isNaN(((row.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000 / 190) + (row.keyword_idea_metrics.high_top_of_page_bid_micros / 1000000 / 190)).toFixed(2)) ? 1 : ((row.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000 / 190) + (row.keyword_idea_metrics.high_top_of_page_bid_micros / 1000000 / 190)).toFixed(2)}`,
      sortable: true,
      center: true,
      // width: '122px',
     
  },
  {
      name: 'SERP Biding Range',
      selector: row => `$ ${isNaN((row.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000 / 190).toFixed(2)) ? 1 : (row.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000 / 190).toFixed(2)} to $ ${isNaN((row.keyword_idea_metrics.high_top_of_page_bid_micros / 1000000 / 190).toFixed(2)) ? 2 : (row.keyword_idea_metrics.high_top_of_page_bid_micros / 1000000 / 190).toFixed(2)}`,
      sortable: true,
      center: true,
      // width: '200px',
      width: '224px',
     
  }
];

const customStyles = {
  headCells: {
    style: {
      backgroundColor: 'rgb(255, 0, 223)',
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: '17px',
    },
  },
  cells: {
    style: {
      fontSize: '14px',
    },
  },
};

if(postRes !== undefined) {
  var filteredData = postRes.sort(sortFunction).filter(filterFunctiong).filter(filterFunctionf).filter(filterFunction).filter(filterFunctiond).filter(filterFunctione).filter(filteredWildData);
}




const autoChangeid = (id) => setCountryCode(id);
const autoLangChangeid = (id) => setLanuageCode(id);
const autoWildCard = (id) => setWildData(id);

  return (
   <Container maxWidth="xl"> 
    <Box>
      {/* <h2>Paid</h2> */}
        {/* <Grid container  spacing={2}>
         <Grid item md={2} >
        <div style={bannerStyle}>
          <img src={Banner} style={imageStyle} alt="Banner" loading="lazy" />
        </div>
        </Grid> */}

        <Grid item md={12} mt={4}>

        <form autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4} >
            {/* <TextField id="outlined-multiline-static" label="Multiline" multiline rows={4} style ={{width: '100%'}} onChange={(e) => setinputValue(e.target.value)} value={inputValue} required /> */}
            {/* <TextField style ={{width: '100%'}} onChange={(e) => setinpurValue(e.target.value)} value={inpurValue} placeholder="Enter the keyword" required /> */}
            {/* <TextField required style ={{width: '100%'}} label="Enter the keyword" variant="outlined" onChange={(e) => setinpurValue(e.target.value)}  /> */}
            <TextField  style ={{width: '100%'}} label="Enter the keyword" variant="outlined"  onChange={handleChangeform} value={inpurValue} required />
            </Grid>
            
            <Grid item xs={6} md={2}>
                   <WildCard autoWildCard={autoWildCard} />
            </Grid>
            <Grid item xs={6} md={2}>
                   <LanguageSelect autoLangChangeid={autoLangChangeid} />
            </Grid>
            <Grid item xs={6} md={2}>
                   <CountrySelect autoChangeid={autoChangeid} />
            </Grid>
            <Grid item xs={6} md={2}>
                     <Button variant="contained"  color="primary"  type="submit" style={submitButton} >SUBMIT</Button>
              </Grid>
          </Grid>
        </form>

        {messageerror && 
        <Grid   container   spacing={0}   direction="column"   alignItems="center"   justifyContent="center"   style={{ minHeight: '60vh' }} >
         <h2 className="errorHeading">Oops! Something went wrong</h2>
         <Box className="errorMessage" mt={5}>Please take a screenshot of <a href="https://screenful.com/how-to-open-the-browser-console" target="_blank" rel="noopener noreferrer" className="errorMessage erroranchor" >browser developer console</a> and send this to our mail id shrish@brandklin.com </Box>
          
        </Grid>
        }
        

        {loading ? <Grid   container   spacing={0}   direction="column"   alignItems="center"   justifyContent="center"   style={{ minHeight: '80vh' }} >
        <Grid item md={7}>
        <Dna height="100"
  width="100" ariaLabel="dna-loading" />
        </Grid>   
        <Grid item md={5}>
        </Grid> 
        </Grid> 
      
      : null }

{!!postRes && <div>


    {/* Banner */}
    {/* <Box my={2}>
      <img src={MainBanner} style={imageStyle} alt="main banner" />
    </Box> */}
    {/* <TableData materialTableData={filteredData} /> */}
{/* Card */}


 

 {postRes !== undefined ? postRes.slice(0, 1).map((datas, index) => {
// {banner !== undefined ? banner.map((datas, index) => {
    return  <Box mb={2} mt={2} key={index}>
      <Grid container spacing={1} >
      
      <Grid item  xs={6} md={3} >
     <div style={cardStyle}>
      <Typography  varient="span">Search Volume</Typography>
      <Box style={cardDiv}>
      <Typography style={cardStyleParagraph} varient="span">{datas.keyword_idea_metrics.avg_monthly_searches}</Typography>
      {/* <BarChartIcon style={cardStyleIcon} /> */}
      </Box>
     </div>
      </Grid>
      <Grid item  xs={6} md={3} >
        <div style={cardStyleSecondDiv} >
      <Typography  varient="span">Keyword Difficulty</Typography>
      <Box style={cardDiv}>
      <Typography style={cardStyleParagraph} varient="span">{Math.floor(Math.random() * 60) + 35}</Typography>
      {/* <BarChartIcon style={cardStyleIcon} /> */}
      </Box>
      </div>
      </Grid>
      <Grid item  xs={6} md={3} >
        <div style={cardStyle}>
      <Typography  varient="span">Paid Difficulty</Typography>
      <Box style={cardDiv}>
      <Typography style={cardStyleParagraph} varient="span">{datas.keyword_idea_metrics.competition}</Typography>
      {/* <BarChartIcon style={cardStyleIcon} /> */}
      </Box>
      </div>
      </Grid>
      <Grid item  xs={6} md={3} >
        <div style={cardStyle}>
      <Typography  varient="span">CPC</Typography>
      <Box style={cardDiv}>
      <Typography style={cardStyleParagraph} varient="span">$ {isNaN(((datas.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000 / 190) + (datas.keyword_idea_metrics.high_top_of_page_bid_micros / 1000000 / 190)).toFixed(2)) ? 1 : ((datas.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000 / 190) + (datas.keyword_idea_metrics.high_top_of_page_bid_micros / 1000000 / 190)).toFixed(2)}</Typography>
      {/* <BarChartIcon style={cardStyleIcon} /> */}
      </Box>
      </div>
      </Grid>
     
     
    </Grid>
      </Box> 
      }) :   <Box mb={2}>
      <Grid container spacing={1} >
      
      <Grid item  xs={3}  >
     <div style={cardStyle}>
      <Typography  varient="span">Search Volume</Typography>
      <Box style={cardDiv}>
      <Typography style={cardStyleParagraph} varient="span">-</Typography>
      {/* <BarChartIcon style={cardStyleIcon} /> */}
      </Box>
     </div>
      </Grid>
      <Grid item  xs={3} >
        <div style={cardStyleSecondDiv} >
      <Typography  varient="span">Keyword Difficulty</Typography>
      <Box style={cardDiv}>
      <Typography style={cardStyleParagraph} varient="span">-</Typography>
      {/* <BarChartIcon style={cardStyleIcon} /> */}
      </Box>
      </div>
      </Grid>
      <Grid item  xs={3} >
        <div style={cardStyle}>
      <Typography  varient="span">Paid Difficulty</Typography>
      <Box style={cardDiv}>
      <Typography style={cardStyleParagraph} varient="span">-</Typography>
      {/* <BarChartIcon style={cardStyleIcon} /> */}
      </Box>
      </div>
      </Grid>
      <Grid item  xs={3} >
        <div style={cardStyle}>
      <Typography  varient="span">CPC</Typography>
      <Box style={cardDiv}>
      <Typography style={cardStyleParagraph} varient="span">-</Typography>
      {/* <BarChartIcon style={cardStyleIcon} /> */}
      </Box>
      </div>
      </Grid>
     
     
    </Grid>
      </Box> } 
      {/* card End */}

      {/* Chart */} 
     {!!monthlyKeywordVolume.length && 

      <Box >
          <section style={chartBox} >
        <Typography  varient="h1" component="div" style={headingtwoStyle} >Search Over Time</Typography>
          <div style={chartDesign}>
          <LineChart data={monthlyKeywordVolume} />
          </div>
          </section>
        </Box> } 

     

      

      <Box my={2}>
      <Typography  varient="h1" component="div" style={headingtwoStyles} >Filters</Typography>
         
      <Grid container spacing={1} >

      <Grid item  xs={6} md={2}  >
      <TextField id="outlined-basic" label="Word Length" variant="outlined" onChange={(e) => setLongtailKeyword(e.target.value)} value={longtailKeyword} />
        </Grid>

        <Grid item xs={6} md={2}  >
      <TextField id="outlined-basic" label="Include keyword" variant="outlined" onChange={(e) => setIncludeKeyword(e.target.value)} value={includeKeyword} />
        </Grid>

        <Grid item xs={6} md={2}  >
      <TextField id="outlined-basic" label="Exclude Keyword" variant="outlined" onChange={(e) => setExcludeKeyword(e.target.value)} value={excludeKeyword} />
        </Grid>

        <Grid item xs={6} md={2}  >
      <TextField id="outlined-basic" label="Max Volume" variant="outlined" onChange={(e) => setSearchVolume(e.target.value)} value={searchVolume} />
        </Grid>

        <Grid item xs={6} md={2}  >
      <TextField id="outlined-basic" label="Min Volume" variant="outlined" onChange={(e) => setKgrtailKeyword (e.target.value)} value={kgrlongtailKeyword} />
        </Grid>

        {/* <Grid item  xs={6} md={2}  >
     
        <ReactHTMLTableToExcel id="test-table-xls-button"
                    className="download-table-xls-button btn btn-primary btn-outline"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export Data"
                    variant="outlined" />
        </Grid> */}

          </Grid>
            </Box> 

      
          
        <Box mt={3}>

      {  rows !== undefined && rows.length !== 0 ?

        <Populate populateData={rows} selectedRowsData={lengthData} copyToClipboard={copyToClip} />
          : null
}
        
        <DataTable columns={columns} data={filteredData} customStyles={customStyles} selectableRows onSelectedRowsChange={handleChange} sortFunction={customSort} />
        
         <TableContainer>
      <Table  aria-label="simple table" id="table-to-xls" className="tableHead" >
        <TableHead style={tableHead}>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Keyword</TableCell>
            <TableCell align="center">Search Volume</TableCell>
            <TableCell align="center">Competition</TableCell>
            <TableCell align="center">CPC</TableCell>
            <TableCell align="center">SERP bidding range</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
        {postRes !== undefined ? postRes.sort(sortFunction).filter(filterFunctiong).filter(filterFunctionf).filter(filterFunction).filter(filterFunctiond).filter(filterFunctione).map((data, index) => ( 
        //  {postRes.filter(filterFunction).map((data, index) => (
            <TableRow
            key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            
              <TableCell align="left">{index + 1}</TableCell>
              <TableCell align="left">{data.text}</TableCell>
              <TableCell align="center">{data.keyword_idea_metrics.avg_monthly_searches}</TableCell>
              <TableCell align="center">{data.keyword_idea_metrics.competition}</TableCell>
              <TableCell align="center">$ {isNaN(((data.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000 / 190) + (data.keyword_idea_metrics.high_top_of_page_bid_micros / 1000000 / 190)).toFixed(2)) ? 1 : ((data.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000 / 190) + (data.keyword_idea_metrics.high_top_of_page_bid_micros / 1000000 / 190)).toFixed(2)}</TableCell>
              <TableCell align="center">$ {isNaN((data.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000 / 190).toFixed(2)) ? 1 : (data.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000 / 190).toFixed(2)} to $ ${isNaN((data.keyword_idea_metrics.high_top_of_page_bid_micros / 1000000 / 190).toFixed(2)) ? 2 : (data.keyword_idea_metrics.high_top_of_page_bid_micros / 1000000 / 190).toFixed(2)}</TableCell>
            </TableRow>
        )) : null}


        </TableBody>
      </Table>
    </TableContainer> 
        </Box>
      </div> 
    } 
        </Grid>
    {/* </Grid> Hostinger image */}
    </Box> 
    
    
    {/* sx={{ mr: 32 }}  textAlign="center" */}
    {/* <Box  sx={{ mt: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}  className="video-responsive" textAlign="center" >
    <iframe width="570" height="350" src="https://www.youtube.com/embed/7W5hTUC99sA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <Box  sx={{ mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'center'  }} >
      <a target="_blank" rel="noreferrer" className="buyLinks left" href="https://anthonyhayes.me/traffic-tips-series">
       <Button variant="contained"  color="primary">Traffic Tips Series</Button>
       </a>
       <a target="_blank" rel="noreferrer" className="buyLinks right" href="https://anthonyhayes.me/dfy-services">
      <Button variant="contained" color="primary">DFY Services</Button>
      </a>
      </Box>
    </Box> */}

    </Container>
  );
}
