import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../../SiteData";
import DropDown from "./DropDown";
import GymCard from "./GymCard";
import { gymContext } from "../../Context/gymContext";

const FindGymPage = () => {
  const [state,dispatch] = useContext(gymContext)
  const { lati, long } = useParams();
  // console.log(lati,long)
  const nearest_gym_url = `${BASE_URL}gym/nearestgym?lat=${lati}&long=${long}`;
  const [gymData, setGymData] = useState([]);
  const [gymTermsData, setGymTermsData] = useState([]);
  const [gymName, setGymName] = useState([]);
  useEffect(() => {
    async function fetching() {
      const fetchData = await fetch(nearest_gym_url);
      const ResponseData = await fetchData.json();
      // console.log(ResponseData)
      setGymData(ResponseData.data);
      setGymTermsData(ResponseData.terms);
      setGymName(ResponseData.data.map((data) => data.city));
    }
    fetching();
  }, []);

  console.log("Gym Data",gymData)
  // console.log("Gym Name",gymName)
  // console.log("Gym Terms Data",gymTermsData)

  return (
    <div>
      <Grid container xs={12}>
        <Grid item xs={4}>
          <h2>Filter</h2>
          <h3>Location</h3>
          <DropDown gymname={gymName} />
        </Grid>
        <Grid item xs={8}>
           <GymCard gymData={gymData}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default FindGymPage;
