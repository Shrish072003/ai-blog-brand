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

export default function LanguageSelect({autoLangChangeid}) {

    const [langscriteriaid, Setlangscriteriaid] = useState([])


    autoLangChangeid(langscriteriaid?.langcriteriaid);
    // console.log(langscriteriaid?.langcriteriaid);

  return (
    <>
    <Autocomplete
    onChange={(event, newValue) => {
    Setlangscriteriaid(newValue);
}}
      id="country-select-demo"
      style={autoStyle}
      options={languages}
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
          label="Language"
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

const languages = [
     {
      "langcriteriaid": 1019,
      "label": "Arabic"
     },
     {
      "langcriteriaid": 1056,
      "label": "Bengali"
     },
     {
      "langcriteriaid": 1020,
      "label": "Bulgarian"
     },
     {
      "langcriteriaid": 1038,
      "label": "Catalan"
     },
     {
      "langcriteriaid": 1017,
      "label": "Chinese Simplified"
     },
     {
      "langcriteriaid": 1018,
      "label": "Chinese Traditional"
     },
     {
      "langcriteriaid": 1039,
      "label": "Croatian"
     },
     {
      "langcriteriaid": 1021,
      "label": "Czech"
     },
     {
      "langcriteriaid": 1009,
      "label": "Danish"
     },
     {
      "langcriteriaid": 1010,
      "label": "Dutch"
     },
     {
      "langcriteriaid": 1000,
      "label": "English"
     },
     {
      "langcriteriaid": 1043,
      "label": "Estonian"
     },
     {
      "langcriteriaid": 1042,
      "label": "Filipino"
     },
     {
      "langcriteriaid": 1011,
      "label": "Finnish"
     },
     {
      "langcriteriaid": 1002,
      "label": "French"
     },
     {
      "langcriteriaid": 1001,
      "label": "German"
     },
     {
      "langcriteriaid": 1022,
      "label": "Greek"
     },
     {
      "langcriteriaid": 1072,
      "label": "Gujarati"
     },
     {
      "langcriteriaid": 1027,
      "label": "Hebrew"
     },
     {
      "langcriteriaid": 1023,
      "label": "Hindi"
     },
     {
      "langcriteriaid": 1024,
      "label": "Hungarian"
     },
     {
      "langcriteriaid": 1026,
      "label": "Icelandic"
     },
     {
      "langcriteriaid": 1025,
      "label": "Indonesian"
     },
     {
      "langcriteriaid": 1004,
      "label": "Italian"
     },
     {
      "langcriteriaid": 1005,
      "label": "Japanese"
     },
     {
      "langcriteriaid": 1086,
      "label": "Kannada"
     },
     {
      "langcriteriaid": 1012,
      "label": "Korean"
     },
     {
      "langcriteriaid": 1028,
      "label": "Latvian"
     },
     {
      "langcriteriaid": 1029,
      "label": "Lithuanian"
     },
     {
      "langcriteriaid": 1102,
      "label": "Malay"
     },
     {
      "langcriteriaid": 1098,
      "label": "Malayalam"
     },
     {
      "langcriteriaid": 1101,
      "label": "Marathi"
     },
     {
      "langcriteriaid": 1013,
      "label": "Norwegian"
     },
     {
      "langcriteriaid": 1064,
      "label": "Persian"
     },
     {
      "langcriteriaid": 1030,
      "label": "Polish"
     },
     {
      "langcriteriaid": 1014,
      "label": "Portuguese"
     },
     {
      "langcriteriaid": 1032,
      "label": "Romanian"
     },
     {
      "langcriteriaid": 1031,
      "label": "Russian"
     },
     {
      "langcriteriaid": 1035,
      "label": "Serbian"
     },
     {
      "langcriteriaid": 1033,
      "label": "Slovak"
     },
     {
      "langcriteriaid": 1034,
      "label": "Slovenian"
     },
     {
      "langcriteriaid": 1003,
      "label": "Spanish"
     },
     {
      "langcriteriaid": 1015,
      "label": "Swedish"
     },
     {
      "langcriteriaid": 1130,
      "label": "Tamil"
     },
     {
      "langcriteriaid": 1131,
      "label": "Telugu"
     },
     {
      "langcriteriaid": 1044,
      "label": "Thai"
     },
     {
      "langcriteriaid": 1037,
      "label": "Turkish"
     },
     {
      "langcriteriaid": 1036,
      "label": "Ukrainian"
     },
     {
      "langcriteriaid": 1041,
      "label": "Urdu"
     },
     {
      "langcriteriaid": 1040,
      "label": "Vietnamese"
     }]