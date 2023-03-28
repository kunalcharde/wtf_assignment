import React from 'react'
import { useParams } from 'react-router'

const GymPage = () => {
   const {user_id} = useParams()
   console.log(user_id)
  return (
    <div>
      <h3>Desicription</h3>
    </div>
  )
}

export default GymPage
