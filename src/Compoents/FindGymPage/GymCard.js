import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import { gymContext } from "../../Context/gymContext";
import { useContext,useEffect,useState } from "react";
import axios from "axios";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

 

// GYM CARD Component
export default function GymCard({selectedGYM,selctedCity}) {
  // const {data} = useContext(gymContext)
  // const [gym,setGYM] =useState(data)
  const navigate = useNavigate()
  // const fetchPlans = async () => {
  //   try {
  //     const res = await axios.get(`https://devapi.wtfup.me/gym/places?Noida`)
  //     //  const data1 = res.data.data.filter((gym)=> gym?.city==selctedCity)
  //      const data2 = selectedGYM.filter((gym)=> gym?.city==selctedCity)
  //     setGYM(data2)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  useEffect(() => {
  //   fetchPlans()

    console.log(selctedCity)
  },[selctedCity])

  return selectedGYM?.map((gymData) => {
    return (
      <Card sx={{ minWidth: 275,marginTop:2,cursor:'pointer',textAlign:'center' }} key={uuidv4()} onClick={()=> {navigate(`/gympage/${gymData.user_id}`)}}>
        <CardContent>
          <Grid container xs={12}>
            <Grid item xs={12}>
              <Grid  xs= {12}>
                {gymData.cover_image?<img src={gymData.cover_image} alt="logo" width={80} style={{float:'left'}}/>:""}
                <h1>{gymData.gym_name}</h1>
              </Grid>
              
              <p>{gymData.address1},{gymData.address2},{gymData.city}-{gymData.pin}</p>
              <span>{gymData.total_rating}/5 </span>
              <div> {gymData.duration_text} | {gymData.distance_text}</div>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{float:'right',marginRight:4}}>
          <Button size="small" >BOOK</Button>
        </CardActions>
      </Card>
    );
  });
}
