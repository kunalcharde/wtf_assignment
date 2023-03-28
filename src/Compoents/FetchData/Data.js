import React, { useEffect } from 'react'

function Data() {

const fetchAll = async ()=>{
    const fetchData = await fetch("https://devapi.wtfup.me/gym/plan?gym_id=GLKdIYAWDS2Q8",{method: "POST",})
    const response = await fetchData.json()
    console.log(response.data)
    console.log(response.data.filter((d)=>  d.plan_type=="GLKdIYAWDS2Q8"))
}

useEffect(()=>{
    fetchAll()
})


  return (
    <div>
      Hola
    </div>
  )
}
export default Data
