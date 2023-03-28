import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { gymContext } from '../../Context/gymContext'
const GymPage = () => {
   const {user_id} = useParams()
  //  console.log(user_id)
  const [state,dispatch] =useContext(gymContext)
  // console.log(state)
  const Data = state.filter((data)=> data.user_id===user_id)
  console.log(Data,"GyM Page")
  const gym = Data[0]
    
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
              Data[0]?.benefits?.map((data,i)=><span key={i}>{data.name}</span>)
            }
          </div>
         </div>
         <div>
          <h1>Why To Choose WTF</h1>
          <div style={{display: 'flex',justifyContent:'space-around'}}>
            {
              Data[0]?.benefits?.map((data,i)=><span key={i}>{data.name}</span>)
            }
          </div>
         </div>
        </Grid>
        <Grid item xs={6}>

        </Grid>
      </Grid>
    </div>
  )
}

export default GymPage
