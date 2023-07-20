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

export default function CountrySelect({autoChangeid}) {

    const [getcountryid, setCountryId] = useState({})


    autoChangeid(getcountryid?.criteriaid);

  return (
    <>
    <Autocomplete
    onChange={(event, newValue) => {
  setCountryId(newValue);
}}
      id="country-select-demo"
      style={autoStyle}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
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
const countries = [
   {
    "code": "AF",
    "criteriaid": 2004,
    "label": "Afghanistan"
   },
   {
    "code": "AL",
    "criteriaid": 2008,
    "label": "Albania"
   },
   {
    "code": "AQ",
    "criteriaid": 2010,
    "label": "Antarctica"
   },
   {
    "code": "DZ",
    "criteriaid": 2012,
    "label": "Algeria"
   },
   {
    "code": "AS",
    "criteriaid": 2016,
    "label": "American Samoa"
   },
   {
    "code": "AD",
    "criteriaid": 2020,
    "label": "Andorra"
   },
   {
    "code": "AO",
    "criteriaid": 2024,
    "label": "Angola"
   },
   {
    "code": "AG",
    "criteriaid": 2028,
    "label": "Antigua and Barbuda"
   },
   {
    "code": "AZ",
    "criteriaid": 2031,
    "label": "Azerbaijan"
   },
   {
    "code": "AR",
    "criteriaid": 2032,
    "label": "Argentina"
   },
   {
    "code": "AU",
    "criteriaid": 2036,
    "label": "Australia"
   },
   {
    "code": "AT",
    "criteriaid": 2040,
    "label": "Austria"
   },
   {
    "code": "BS",
    "criteriaid": 2044,
    "label": "The Bahamas"
   },
   {
    "code": "BH",
    "criteriaid": 2048,
    "label": "Bahrain"
   },
   {
    "code": "BD",
    "criteriaid": 2050,
    "label": "Bangladesh"
   },
   {
    "code": "AM",
    "criteriaid": 2051,
    "label": "Armenia"
   },
   {
    "code": "BB",
    "criteriaid": 2052,
    "label": "Barbados"
   },
   {
    "code": "BE",
    "criteriaid": 2056,
    "label": "Belgium"
   },
   {
    "code": "BT",
    "criteriaid": 2064,
    "label": "Bhutan"
   },
   {
    "code": "BO",
    "criteriaid": 2068,
    "label": "Bolivia"
   },
   {
    "code": "BA",
    "criteriaid": 2070,
    "label": "Bosnia and Herzegovina"
   },
   {
    "code": "BW",
    "criteriaid": 2072,
    "label": "Botswana"
   },
   {
    "code": "BR",
    "criteriaid": 2076,
    "label": "Brazil"
   },
   {
    "code": "BZ",
    "criteriaid": 2084,
    "label": "Belize"
   },
   {
    "code": "SB",
    "criteriaid": 2090,
    "label": "Solomon Islands"
   },
   {
    "code": "BN",
    "criteriaid": 2096,
    "label": "Brunei"
   },
   {
    "code": "BG",
    "criteriaid": 2100,
    "label": "Bulgaria"
   },
   {
    "code": "MM",
    "criteriaid": 2104,
    "label": "Myanmar (Burma)"
   },
   {
    "code": "BI",
    "criteriaid": 2108,
    "label": "Burundi"
   },
   {
    "code": "BY",
    "criteriaid": 2112,
    "label": "Belarus"
   },
   {
    "code": "KH",
    "criteriaid": 2116,
    "label": "Cambodia"
   },
   {
    "code": "CM",
    "criteriaid": 2120,
    "label": "Cameroon"
   },
   {
    "code": "CA",
    "criteriaid": 2124,
    "label": "Canada"
   },
   {
    "code": "CV",
    "criteriaid": 2132,
    "label": "Cape Verde"
   },
   {
    "code": "CF",
    "criteriaid": 2140,
    "label": "Central African Republic"
   },
   {
    "code": "LK",
    "criteriaid": 2144,
    "label": "Sri Lanka"
   },
   {
    "code": "TD",
    "criteriaid": 2148,
    "label": "Chad"
   },
   {
    "code": "CL",
    "criteriaid": 2152,
    "label": "Chile"
   },
   {
    "code": "CN",
    "criteriaid": 2156,
    "label": "China"
   },
   {
    "code": "CX",
    "criteriaid": 2162,
    "label": "Christmas Island"
   },
   {
    "code": "CC",
    "criteriaid": 2166,
    "label": "Cocos (Keeling) Islands"
   },
   {
    "code": "CO",
    "criteriaid": 2170,
    "label": "Colombia"
   },
   {
    "code": "KM",
    "criteriaid": 2174,
    "label": "Comoros"
   },
   {
    "code": "CG",
    "criteriaid": 2178,
    "label": "Republic of the Congo"
   },
   {
    "code": "CD",
    "criteriaid": 2180,
    "label": "Democratic Republic of the Congo"
   },
   {
    "code": "CK",
    "criteriaid": 2184,
    "label": "Cook Islands"
   },
   {
    "code": "CR",
    "criteriaid": 2188,
    "label": "Costa Rica"
   },
   {
    "code": "HR",
    "criteriaid": 2191,
    "label": "Croatia"
   },
   {
    "code": "CY",
    "criteriaid": 2196,
    "label": "Cyprus"
   },
   {
    "code": "CZ",
    "criteriaid": 2203,
    "label": "Czechia"
   },
   {
    "code": "BJ",
    "criteriaid": 2204,
    "label": "Benin"
   },
   {
    "code": "DK",
    "criteriaid": 2208,
    "label": "Denmark"
   },
   {
    "code": "DM",
    "criteriaid": 2212,
    "label": "Dominica"
   },
   {
    "code": "DO",
    "criteriaid": 2214,
    "label": "Dominican Republic"
   },
   {
    "code": "EC",
    "criteriaid": 2218,
    "label": "Ecuador"
   },
   {
    "code": "SV",
    "criteriaid": 2222,
    "label": "El Salvador"
   },
   {
    "code": "GQ",
    "criteriaid": 2226,
    "label": "Equatorial Guinea"
   },
   {
    "code": "ET",
    "criteriaid": 2231,
    "label": "Ethiopia"
   },
   {
    "code": "ER",
    "criteriaid": 2232,
    "label": "Eritrea"
   },
   {
    "code": "EE",
    "criteriaid": 2233,
    "label": "Estonia"
   },
   {
    "code": "GS",
    "criteriaid": 2239,
    "label": "South Georgia and the South Sandwich Islands"
   },
   {
    "code": "FJ",
    "criteriaid": 2242,
    "label": "Fiji"
   },
   {
    "code": "FI",
    "criteriaid": 2246,
    "label": "Finland"
   },
   {
    "code": "FR",
    "criteriaid": 2250,
    "label": "France"
   },
   {
    "code": "PF",
    "criteriaid": 2258,
    "label": "French Polynesia"
   },
   {
    "code": "TF",
    "criteriaid": 2260,
    "label": "French Southern and Antarctic Lands"
   },
   {
    "code": "DJ",
    "criteriaid": 2262,
    "label": "Djibouti"
   },
   {
    "code": "GA",
    "criteriaid": 2266,
    "label": "Gabon"
   },
   {
    "code": "GE",
    "criteriaid": 2268,
    "label": "Georgia"
   },
   {
    "code": "GM",
    "criteriaid": 2270,
    "label": "The Gambia"
   },
   {
    "code": "DE",
    "criteriaid": 2276,
    "label": "Germany"
   },
   {
    "code": "GH",
    "criteriaid": 2288,
    "label": "Ghana"
   },
   {
    "code": "KI",
    "criteriaid": 2296,
    "label": "Kiribati"
   },
   {
    "code": "GR",
    "criteriaid": 2300,
    "label": "Greece"
   },
   {
    "code": "GD",
    "criteriaid": 2308,
    "label": "Grenada"
   },
   {
    "code": "GU",
    "criteriaid": 2316,
    "label": "Guam"
   },
   {
    "code": "GT",
    "criteriaid": 2320,
    "label": "Guatemala"
   },
   {
    "code": "GN",
    "criteriaid": 2324,
    "label": "Guinea"
   },
   {
    "code": "GY",
    "criteriaid": 2328,
    "label": "Guyana"
   },
   {
    "code": "HT",
    "criteriaid": 2332,
    "label": "Haiti"
   },
   {
    "code": "HM",
    "criteriaid": 2334,
    "label": "Heard Island and McDonald Islands"
   },
   {
    "code": "VA",
    "criteriaid": 2336,
    "label": "Vatican City"
   },
   {
    "code": "HN",
    "criteriaid": 2340,
    "label": "Honduras"
   },
   {
    "code": "HU",
    "criteriaid": 2348,
    "label": "Hungary"
   },
   {
    "code": "IS",
    "criteriaid": 2352,
    "label": "Iceland"
   },
   {
    "code": "IN",
    "criteriaid": 2356,
    "label": "India"
   },
   {
    "code": "ID",
    "criteriaid": 2360,
    "label": "Indonesia"
   },
   {
    "code": "IQ",
    "criteriaid": 2368,
    "label": "Iraq"
   },
   {
    "code": "IE",
    "criteriaid": 2372,
    "label": "Ireland"
   },
   {
    "code": "IL",
    "criteriaid": 2376,
    "label": "Israel"
   },
   {
    "code": "IT",
    "criteriaid": 2380,
    "label": "Italy"
   },
   {
    "code": "CI",
    "criteriaid": 2384,
    "label": "Cote d'Ivoire"
   },
   {
    "code": "JM",
    "criteriaid": 2388,
    "label": "Jamaica"
   },
   {
    "code": "JP",
    "criteriaid": 2392,
    "label": "Japan"
   },
   {
    "code": "KZ",
    "criteriaid": 2398,
    "label": "Kazakhstan"
   },
   {
    "code": "JO",
    "criteriaid": 2400,
    "label": "Jordan"
   },
   {
    "code": "KE",
    "criteriaid": 2404,
    "label": "Kenya"
   },
   {
    "code": "KR",
    "criteriaid": 2410,
    "label": "South Korea"
   },
   {
    "code": "KW",
    "criteriaid": 2414,
    "label": "Kuwait"
   },
   {
    "code": "KG",
    "criteriaid": 2417,
    "label": "Kyrgyzstan"
   },
   {
    "code": "LA",
    "criteriaid": 2418,
    "label": "Laos"
   },
   {
    "code": "LB",
    "criteriaid": 2422,
    "label": "Lebanon"
   },
   {
    "code": "LS",
    "criteriaid": 2426,
    "label": "Lesotho"
   },
   {
    "code": "LV",
    "criteriaid": 2428,
    "label": "Latvia"
   },
   {
    "code": "LR",
    "criteriaid": 2430,
    "label": "Liberia"
   },
   {
    "code": "LY",
    "criteriaid": 2434,
    "label": "Libya"
   },
   {
    "code": "LI",
    "criteriaid": 2438,
    "label": "Liechtenstein"
   },
   {
    "code": "LT",
    "criteriaid": 2440,
    "label": "Lithuania"
   },
   {
    "code": "LU",
    "criteriaid": 2442,
    "label": "Luxembourg"
   },
   {
    "code": "MG",
    "criteriaid": 2450,
    "label": "Madagascar"
   },
   {
    "code": "MW",
    "criteriaid": 2454,
    "label": "Malawi"
   },
   {
    "code": "MY",
    "criteriaid": 2458,
    "label": "Malaysia"
   },
   {
    "code": "MV",
    "criteriaid": 2462,
    "label": "Maldives"
   },
   {
    "code": "ML",
    "criteriaid": 2466,
    "label": "Mali"
   },
   {
    "code": "MT",
    "criteriaid": 2470,
    "label": "Malta"
   },
   {
    "code": "MR",
    "criteriaid": 2478,
    "label": "Mauritania"
   },
   {
    "code": "MU",
    "criteriaid": 2480,
    "label": "Mauritius"
   },
   {
    "code": "MX",
    "criteriaid": 2484,
    "label": "Mexico"
   },
   {
    "code": "MC",
    "criteriaid": 2492,
    "label": "Monaco"
   },
   {
    "code": "MN",
    "criteriaid": 2496,
    "label": "Mongolia"
   },
   {
    "code": "MD",
    "criteriaid": 2498,
    "label": "Moldova"
   },
   {
    "code": "ME",
    "criteriaid": 2499,
    "label": "Montenegro"
   },
   {
    "code": "MA",
    "criteriaid": 2504,
    "label": "Morocco"
   },
   {
    "code": "MZ",
    "criteriaid": 2508,
    "label": "Mozambique"
   },
   {
    "code": "OM",
    "criteriaid": 2512,
    "label": "Oman"
   },
   {
    "code": "NA",
    "criteriaid": 2516,
    "label": "Namibia"
   },
   {
    "code": "NR",
    "criteriaid": 2520,
    "label": "Nauru"
   },
   {
    "code": "NP",
    "criteriaid": 2524,
    "label": "Nepal"
   },
   {
    "code": "NL",
    "criteriaid": 2528,
    "label": "Netherlands"
   },
   {
    "code": "CW",
    "criteriaid": 2531,
    "label": "Curacao"
   },
   {
    "code": "SX",
    "criteriaid": 2534,
    "label": "Sint Maarten"
   },
   {
    "code": "BQ",
    "criteriaid": 2535,
    "label": "Caribbean Netherlands"
   },
   {
    "code": "NC",
    "criteriaid": 2540,
    "label": "New Caledonia"
   },
   {
    "code": "VU",
    "criteriaid": 2548,
    "label": "Vanuatu"
   },
   {
    "code": "NZ",
    "criteriaid": 2554,
    "label": "New Zealand"
   },
   {
    "code": "NI",
    "criteriaid": 2558,
    "label": "Nicaragua"
   },
   {
    "code": "NE",
    "criteriaid": 2562,
    "label": "Niger"
   },
   {
    "code": "NG",
    "criteriaid": 2566,
    "label": "Nigeria"
   },
   {
    "code": "NU",
    "criteriaid": 2570,
    "label": "Niue"
   },
   {
    "code": "NF",
    "criteriaid": 2574,
    "label": "Norfolk Island"
   },
   {
    "code": "NO",
    "criteriaid": 2578,
    "label": "Norway"
   },
   {
    "code": "MP",
    "criteriaid": 2580,
    "label": "Northern Mariana Islands"
   },
   {
    "code": "UM",
    "criteriaid": 2581,
    "label": "United States Minor Outlying Islands"
   },
   {
    "code": "FM",
    "criteriaid": 2583,
    "label": "Federated States of Micronesia"
   },
   {
    "code": "MH",
    "criteriaid": 2584,
    "label": "Marshall Islands"
   },
   {
    "code": "PW",
    "criteriaid": 2585,
    "label": "Palau"
   },
   {
    "code": "PK",
    "criteriaid": 2586,
    "label": "Pakistan"
   },
   {
    "code": "PA",
    "criteriaid": 2591,
    "label": "Panama"
   },
   {
    "code": "PG",
    "criteriaid": 2598,
    "label": "Papua New Guinea"
   },
   {
    "code": "PY",
    "criteriaid": 2600,
    "label": "Paraguay"
   },
   {
    "code": "PE",
    "criteriaid": 2604,
    "label": "Peru"
   },
   {
    "code": "PH",
    "criteriaid": 2608,
    "label": "Philippines"
   },
   {
    "code": "PN",
    "criteriaid": 2612,
    "label": "Pitcairn Islands"
   },
   {
    "code": "PL",
    "criteriaid": 2616,
    "label": "Poland"
   },
   {
    "code": "PT",
    "criteriaid": 2620,
    "label": "Portugal"
   },
   {
    "code": "GW",
    "criteriaid": 2624,
    "label": "Guinea-Bissau"
   },
   {
    "code": "TL",
    "criteriaid": 2626,
    "label": "Timor-Leste"
   },
   {
    "code": "QA",
    "criteriaid": 2634,
    "label": "Qatar"
   },
   {
    "code": "RO",
    "criteriaid": 2642,
    "label": "Romania"
   },
   {
    "code": "RU",
    "criteriaid": 2643,
    "label": "Russia"
   },
   {
    "code": "RW",
    "criteriaid": 2646,
    "label": "Rwanda"
   },
   {
    "code": "SH",
    "criteriaid": 2654,
    "label": "Saint Helena, Ascension and Tristan da Cunha"
   },
   {
    "code": "KN",
    "criteriaid": 2659,
    "label": "Saint Kitts and Nevis"
   },
   {
    "code": "LC",
    "criteriaid": 2662,
    "label": "Saint Lucia"
   },
   {
    "code": "PM",
    "criteriaid": 2666,
    "label": "Saint Pierre and Miquelon"
   },
   {
    "code": "VC",
    "criteriaid": 2670,
    "label": "Saint Vincent and the Grenadines"
   },
   {
    "code": "SM",
    "criteriaid": 2674,
    "label": "San Marino"
   },
   {
    "code": "ST",
    "criteriaid": 2678,
    "label": "Sao Tome and Principe"
   },
   {
    "code": "SA",
    "criteriaid": 2682,
    "label": "Saudi Arabia"
   },
   {
    "code": "SN",
    "criteriaid": 2686,
    "label": "Senegal"
   },
   {
    "code": "RS",
    "criteriaid": 2688,
    "label": "Serbia"
   },
   {
    "code": "SC",
    "criteriaid": 2690,
    "label": "Seychelles"
   },
   {
    "code": "SL",
    "criteriaid": 2694,
    "label": "Sierra Leone"
   },
   {
    "code": "SG",
    "criteriaid": 2702,
    "label": "Singapore"
   },
   {
    "code": "SK",
    "criteriaid": 2703,
    "label": "Slovakia"
   },
   {
    "code": "VN",
    "criteriaid": 2704,
    "label": "Vietnam"
   },
   {
    "code": "SI",
    "criteriaid": 2705,
    "label": "Slovenia"
   },
   {
    "code": "SO",
    "criteriaid": 2706,
    "label": "Somalia"
   },
   {
    "code": "ZA",
    "criteriaid": 2710,
    "label": "South Africa"
   },
   {
    "code": "ZW",
    "criteriaid": 2716,
    "label": "Zimbabwe"
   },
   {
    "code": "ES",
    "criteriaid": 2724,
    "label": "Spain"
   },
   {
    "code": "SD",
    "criteriaid": 2736,
    "label": "Sudan"
   },
   {
    "code": "SR",
    "criteriaid": 2740,
    "label": "Suriname"
   },
   {
    "code": "SZ",
    "criteriaid": 2748,
    "label": "Eswatini"
   },
   {
    "code": "SE",
    "criteriaid": 2752,
    "label": "Sweden"
   },
   {
    "code": "CH",
    "criteriaid": 2756,
    "label": "Switzerland"
   },
   {
    "code": "TJ",
    "criteriaid": 2762,
    "label": "Tajikistan"
   },
   {
    "code": "TH",
    "criteriaid": 2764,
    "label": "Thailand"
   },
   {
    "code": "TG",
    "criteriaid": 2768,
    "label": "Togo"
   },
   {
    "code": "TK",
    "criteriaid": 2772,
    "label": "Tokelau"
   },
   {
    "code": "TO",
    "criteriaid": 2776,
    "label": "Tonga"
   },
   {
    "code": "TT",
    "criteriaid": 2780,
    "label": "Trinidad and Tobago"
   },
   {
    "code": "AE",
    "criteriaid": 2784,
    "label": "United Arab Emirates"
   },
   {
    "code": "TN",
    "criteriaid": 2788,
    "label": "Tunisia"
   },
   {
    "code": "TR",
    "criteriaid": 2792,
    "label": "Turkey"
   },
   {
    "code": "TM",
    "criteriaid": 2795,
    "label": "Turkmenistan"
   },
   {
    "code": "TV",
    "criteriaid": 2798,
    "label": "Tuvalu"
   },
   {
    "code": "UG",
    "criteriaid": 2800,
    "label": "Uganda"
   },
   {
    "code": "UA",
    "criteriaid": 2804,
    "label": "Ukraine"
   },
   {
    "code": "MK",
    "criteriaid": 2807,
    "label": "North Macedonia"
   },
   {
    "code": "EG",
    "criteriaid": 2818,
    "label": "Egypt"
   },
   {
    "code": "GB",
    "criteriaid": 2826,
    "label": "United Kingdom"
   },
   {
    "code": "GG",
    "criteriaid": 2831,
    "label": "Guernsey"
   },
   {
    "code": "JE",
    "criteriaid": 2832,
    "label": "Jersey"
   },
   {
    "code": "TZ",
    "criteriaid": 2834,
    "label": "Tanzania"
   },
   {
    "code": "US",
    "criteriaid": 2840,
    "label": "United States"
   },
   {
    "code": "BF",
    "criteriaid": 2854,
    "label": "Burkina Faso"
   },
   {
    "code": "UY",
    "criteriaid": 2858,
    "label": "Uruguay"
   },
   {
    "code": "UZ",
    "criteriaid": 2860,
    "label": "Uzbekistan"
   },
   {
    "code": "VE",
    "criteriaid": 2862,
    "label": "Venezuela"
   },
   {
    "code": "WF",
    "criteriaid": 2876,
    "label": "Wallis and Futuna"
   },
   {
    "code": "WS",
    "criteriaid": 2882,
    "label": "Samoa"
   },
   {
    "code": "YE",
    "criteriaid": 2887,
    "label": "Yemen"
   },
   {
    "code": "ZM",
    "criteriaid": 2894,
    "label": "Zambia"
   }
  ]