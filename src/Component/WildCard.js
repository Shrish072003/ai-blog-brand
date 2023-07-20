import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const autoStyle = {
    width: "100%",
    display: "inline-block",
    // marginLeft: "10px",
    // marginRight: "10px",
}

export default function WildCard({autoWildCard}) {

    const [wildCardData, setWildCardData] = useState([])

    autoWildCard(wildCardData?.langcriteriaid);

    // autoLangChangeid(langscriteriaid?.langcriteriaid);
    // console.log(langscriteriaid?.langcriteriaid);

  return (
    <>
    <Autocomplete
    onChange={(event, newValue) => {
    setWildCardData(newValue);
}}
      id="country-select-demo"
      style={autoStyle}
      options={wildcard}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          
          {option.label} 
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="WildCard"
          inputProps={{
            ...params.inputProps,
            autoComplete: false, // disable autocomplete and autofill
          }}
        />
      )}
    />
    </>
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js

const wildcard = [ 
    {
        "langcriteriaid": "what",
        "label": "Questions"
    },
    {
        "langcriteriaid": "best",
        "label": "Best"
    },
    {
        "langcriteriaid": "vs",
        "label": "Compare"
    },
    {
        "langcriteriaid": "how",
        "label": "How to"
    },
    {
        "langcriteriaid": "most",
        "label": "Most"
    },
    {
        "langcriteriaid": "alternative",
        "label": "Alternatives"
    },
    {
        "langcriteriaid": "",
        "label": "Ideas"
    }
]

