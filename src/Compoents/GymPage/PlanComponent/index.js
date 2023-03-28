import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import "./style.css"
const PlanComponent = ({ userId }) => {
    const[plans,setPlans] = useState([])
    const fetchPlans = async () => {
        try {
          const res = await axios.post(`https://devapi.wtfup.me/gym/plan?gym_id=${userId}`)
          const plandata = res.data.data.filter((data)=> data.plan_type==userId)
          setPlans(plandata)
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(() => {
        fetchPlans()
      }, [])
    return (
        <div className='plan-container'>
            <h1>Choose Membership</h1>
            <div className='plans'>
                {
                    plans.map((plan,idx) => (
                        <div className="plan-card" style={{backgroundImage: "linear-gradient(to right, #76be7a, #12e43b"}}>
                            
                            <div className="plan-info">
                                <p>plan {idx+1}</p>
                                <h5><img src="https://wtfup.me/assets/public/logo-final-white-1@2x.png" alt="" />{plan.plan_name}</h5>
                            </div>
                            <span className="price">${plan.plan_price}</span>
                        </div>))
                }
            </div>
        </div>
    )
}

export default PlanComponent