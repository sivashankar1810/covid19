// import React, { useState , useEffect} from 'react';
// import {MenuItem , FormControl , Select, Card, CardContent} from "@material-ui/core"
// import InfoBox from "./InfoBox.js";
// import './App.css';
// import Map from "./Map";
// import Table from "./Table"
// import {sortData , prettyPrintStat} from "./utils";
// import LineGraph from "./LineGraph"
// import "leaflet/dist/leaflet.css"

// function App() {

//   const[countries , setCountries]= useState([]);
//   const[country , setCountry]= useState("worldwide");
//   const[countryInfo , setCountryInfo]=useState({});
//   const[tableData, setTableData]=useState([]);
//   const[mapCenter, setMapCenter]= useState({lat : 34.80746 , lng: -40.4796});
//   const[mapZoom , setMapZoom]=useState(3);
//   const[mapCountries, setMapCountries]=useState([]);
//   const[casesType , setCasesType]=useState("cases");

//   useEffect(()=>{
//     fetch("https://disease.sh/v3/covid-19/all")
//     .then((response)=> response.json())
//     .then((data)=>{
//       setCountryInfo(data)
//     });
//   },[]);

// useEffect(()=>{

//   const getCountriesData =  async () => {
//       await fetch("https://disease.sh/v3/covid-19/countries")
//       .then((response)=> response.json())
//       .then((data)=>{
//         const countries = data.map((country)=>(
//            {
//              name : country.country,
//              value : country.countryInfo.iso2,
            
//            }));
//            const sortedData =sortData(data);
//            setTableData(sortedData);
//            setCountries(countries);
//            setMapCountries(data);
//       });
//   };
//   getCountriesData();
// }, []);

// const onCountryChange = async (event)=> {
//   const countryCode = event.target.value ;
 
//   const url = countryCode==="worldwide"? "https://disease.sh/v3/covid-19/all":`https://disease.sh/v3/covid-19/countries/${countryCode}`  
//    await fetch(url)
//    .then((response)=> response.json())
//    .then((data) => { 
//        setCountryInfo(data);
//        setCountry(countryCode);
//        setMapCenter([data.countryInfo.lat , data.countryInfo.long]);
//        setMapZoom(4);
//    });
  
// };
// console.log(countryInfo);

//   return (
//     <div className="app">
//     <div className="app__left">
//     <div className="app__header">
//     <h1>COVID-19 TRACKER</h1>
//       <FormControl className="app__dropdown">
//         <Select variant="outlined" onChange={onCountryChange} value={country}>
//         <MenuItem value="worldwide">worldwide</MenuItem>
//         {countries.map(country=> (
//           <MenuItem value={country.value}>{country.name}</MenuItem>
//         ))}
//           {/* <MenuItem value="worldwide">siva </MenuItem>
//           <MenuItem value="worldwide">shankar</MenuItem>
//           <MenuItem value="worldwide">hiii</MenuItem>
//           <MenuItem value="worldwide">policy</MenuItem> */}
//         </Select>
//       </FormControl>
//     </div>
//     <div className="app__stats">
//      <InfoBox isRed active={casesType==="cases"} onClick={(e)=> setCasesType("cases")} title="cases" cases={prettyPrintStat(countryInfo.todayCases)} total={prettyPrintStat(countryInfo.cases)}/>
//      <InfoBox active={casesType==="recovered"} onClick={(e)=> setCasesType("recovered")} title="Recovered"cases={prettyPrintStat(countryInfo.todayRecovered)} total={prettyPrintStat(countryInfo.recovered)}/>
//      <InfoBox isRed active={casesType==="deaths"} onClick={(e)=> setCasesType("deaths")} title="Deaths"cases={prettyPrintStat(countryInfo.todayDeaths)} total={prettyPrintStat(countryInfo.deaths)}/>
//      </div>
//      <Map casesType={casesType} countries={mapCountries} center={mapCenter} zoom={mapZoom} />
//      </div>
//      <Card className="app__right">
//        <CardContent>
//        <div className="app__information">
//             <h3>Live Cases by Country</h3>
//             <Table countries={tableData} />
//             <h3  className="app__graphTitle">Worldwide new {casesType}</h3>
//             <LineGraph  className="app__graph" casesType={casesType} />
//           </div>
//          {/* <h2>Live cases by country</h2>
//          <Table countries={tableData}/>
//          <h2 className="app__graphTitle">worldwide new {casesType}</h2>
//          <LineGraph className="app__graph" casesType={casesType} /> */}
//        </CardContent>
//      </Card>
//      </div>
    
//   );
// }

// export default App;



import React, { useState, useEffect } from "react";
import "./App.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./InfoBox";
import LineGraph from "./LineGraph";
import Table from "./Table";
import { sortData, prettyPrintStat } from "./util";
import numeral from "numeral";
import Map from "./Map";
import "leaflet/dist/leaflet.css";
import Resources from "./Resources";
import Footer from "./Footer"

const App = () => {
  const [country, setInputCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 28.644800, lng: 77.216721 });
  const [mapCenters , setMapCenters]= useState({ lat: 28.644800, lng: 77.216721});
  const [mapZoom, setMapZoom] = useState(3);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          let sortedData = sortData(data);
          setCountries(countries);
          setMapCountries(data);
          setTableData(sortedData);
        });
    };

    getCountriesData();
  }, []);

  console.log(casesType);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode);
        setCountryInfo(data);
        if(countryCode === "worldwide"){
          setMapCenter(mapCenters);
        } else {
          setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        }
        setMapZoom(4);
      });
  };
 

  return (
    <div className="app__top">
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem   value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app__stats">
          <InfoBox
            onClick={(e) => setCasesType("cases")}
            title="Cases"
            isRed
            active={casesType === "cases"}
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={numeral(countryInfo.cases).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            active={casesType === "recovered"}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            isRed
            active={casesType === "deaths"}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={numeral(countryInfo.deaths).format("0.0a")}
          />
        </div>
        <Map
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>
      <Card className="app__right">
        <CardContent>
            <h3>Live Cases by Country</h3>
            <Table countries={tableData} />
            <h3  className="app__graphTitle">Worldwide new {casesType}</h3>
            <LineGraph className="app__graph" casesType={casesType} />
        </CardContent>
      </Card>
    
    </div>
    <div className="app__bottom">
        <Resources />
     </div>
     <div className="app__footer">
       <Footer />
     </div>
    </div>
  );
};

export default App;
