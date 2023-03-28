import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../../SiteData";
import DropDown from "./DropDown";
import GymCard from "./GymCard";
import { gymContext } from "../../Context/gymContext";

const FindGymPage = () => {
  const [state,dispatch] = useContext(gymContext)
  // excessing the Lattitude and Longitude from the URL
  const { lati, long } = useParams();

  const nearest_gym_url = `${BASE_URL}gym/nearestgym?lat=${lati}&long=${long}`;
  const [gymData, setGymData] = useState(state);
  const [gymTermsData, setGymTermsData] = useState([]);
  const [gymName, setGymName] = useState([]);

  // Fetching Data from The API
  useEffect(() => {
    async function fetching() {
      const fetchData = await fetch(nearest_gym_url);
      const ResponseData = await fetchData.json();
      setGymData(ResponseData.data);
      setGymTermsData(ResponseData.terms);
      setGymName(ResponseData.data.map((data) => data.city));
    }
    fetching();
  }, []);

  // console.log("Gym Data",gymData)
  // console.log("Gym Name",gymName)
  // console.log("Gym Terms Data",gymTermsData)

  // Setting my data to 
  useEffect(()=>{
    function setData (){
      dispatch({
        type: "ADD_GYM",
        payload: [...gymData]
      });
    }
    setData()
  },[gymData])
 

  return (
    <div>
      <Grid container xs={12}>
        <Grid item xs={4} sx={{paddingLeft:3}}>
          <h2 >Filter</h2>
          <h3 style={{marginBottom:20,marginTop:10}}>Location</h3>
          <TextField 
          />
          <h3 style={{marginBottom:20,marginTop:10}}>Cities</h3>
          <DropDown gymname={gymName} gymData={gymData} />

        </Grid>
        <Grid item xs={8}>
           <GymCard gymData={gymData}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default FindGymPage;
