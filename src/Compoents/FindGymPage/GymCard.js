import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import { gymContext } from "../../Context/gymContext";
import { useContext } from "react";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function GymCard({gymData}) {
  // const[gymData,setGymData] = React.useState([])
  const navigate = useNavigate()
  const [state,dispatch] = useContext(gymContext)
  // setGymData(state)
   console.log(state)
  // console.log(gymData);
  return state.map((gymData) => {
    return (
      <Card sx={{ minWidth: 275,marginTop:2,cursor:'pointer'}} key={uuidv4()} onClick={()=> {navigate(`/gympage/${gymData.user_id}`)}}>
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
