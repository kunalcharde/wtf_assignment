import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import { Navigate, useParams } from 'react-router'
import { gymContext } from '../../Context/gymContext'
import PlansComponent from './PlanComponent'
import { useNavigate } from "react-router-dom";
const GymPage = () => {
  //getting an user_id From URL
  const {user_id} = useParams()
  const {data} =useContext(gymContext)
  const navigate = useNavigate()
  // console.log(data)
  if(data==undefined){
    navigate("/")
  }
  const Data = data.filter((data)=> data.user_id===user_id)
  return (
    <div>
      <Grid container xs={12}>
        <Grid item xs={6} >
          <div>
          <h1>Description</h1>
          <p>{Data[0]?.description}</p>
          </div>
         <div>
          <h1>Facilites</h1>
          <div style={{display: 'flex',justifyContent:'space-around'}}>
            {
              Data[0]?.benefits.length?Data[0]?.benefits?.map((data,i)=><span key={i}>{data.name}</span>):<span>No Data FOUND</span>
            }
          </div>
         </div>
         <div>
          <h1>Why To Choose WTF</h1>
          <div style={{display: 'flex',justifyContent:'space-around'}}>
            {
              Data[0]?.benefits.length?Data[0]?.benefits?.map((data,i)=><span key={i}>{data.name}</span>):<span>No Data FOUND</span>
            }
          </div>
         </div>
        </Grid>
        <Grid item xs={6}>
          <Grid sx={{backgroundColor: '#01010'}}>
            <PlansComponent userId={user_id}/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default GymPage
