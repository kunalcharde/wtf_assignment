import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import { Navigate, useParams } from 'react-router'
import { gymContext } from '../../Context/gymContext'
const GymPage = () => {
   const {user_id} = useParams()
  //  console.log(user_id)
  const [state,dispatch] =useContext(gymContext)
  // console.log(state)
  const Data = state.filter((data)=> data.user_id===user_id)
  // console.log(Data,"GyM Page")

// Card Components
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
            Card Item
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default GymPage
