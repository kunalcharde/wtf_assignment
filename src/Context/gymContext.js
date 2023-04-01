import { createContext, useEffect, useReducer,useState } from "react";
import { BASE_URL } from "../SiteData";

// GYM Context
export const gymContext = createContext()

export const GymContextProvider = ({children}) =>{
    const [state, setState] = useState({});
    const [locationData,setLocationData] = useState({long:"",lati:""})
    if (locationData.long== ""){
      console.log("object")
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition);
       } 
     else {
       console.log("Geolocation is not supported by this browser.");
     }
     function showPosition(position) {
       setLocationData({...locationData,long:position.coords.longitude,lati:position.coords.latitude});
       }
   }
    
	  useEffect(() => {
        const nearest_gym_url = `${BASE_URL}gym/nearestgym?lat=20.928192&long=79.007080`;
        async function fetching() {
          const fetchData = await fetch(nearest_gym_url);
          const ResponseData = await fetchData.json();
          setState({...ResponseData,location:locationData})
        }
        fetching();
               
      },[locationData]);

      useEffect(()=>{
        console.log("user context", state);
      },[state])


    return (
        <gymContext.Provider value={state}>
          {children}
        </gymContext.Provider>
      );
}

