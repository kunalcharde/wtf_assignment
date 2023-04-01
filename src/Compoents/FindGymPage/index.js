import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../../SiteData";
import DropDown from "./DropDown";
import GymCard from "./GymCard";
import { gymContext } from "../../Context/gymContext";
import { useNavigate } from "react-router-dom";
const FindGymPage = () => {

  const {data,terms,location} = useContext(gymContext)

  const [selctedCity,setSelectedCity]= useState("all")
  const [selectedGYM,setSelectedGYM]= useState(data)
  
  const GymCities = data.map((gym)=> gym.city)
  useEffect(()=>{
   
      let setData= data.filter((gym)=> gym.city==selctedCity)
      setSelectedGYM(selctedCity=="all"?data:setData)
    
    console.log(selctedCity)
  },[selctedCity])
  return (
    <div>
      <Grid container xs={12}>
        <Grid item xs={4} sx={{paddingLeft:3}}>
          <h2 >Filter</h2>
          <h3 style={{marginBottom:20,marginTop:10}}>Location</h3>
          <TextField 
           placeholder="Enter Location"
          />
          <h3 style={{marginBottom:20,marginTop:10}}>Cities</h3>
          <DropDown GymCities={GymCities} setSelectedCity={setSelectedCity} />

        </Grid>
        <Grid item xs={8}>
           <GymCard selectedGYM={selectedGYM} selctedCity={selctedCity}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default FindGymPage;
