import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { v4 as uuidv4 } from 'uuid';
import { gymContext } from "../../Context/gymContext";
import { useContext,useState } from "react";


// // Drop Down Compoent
export default function DropDown({GymCities,setSelectedCity}) {
const [city,setCity]= useState([])
  const {data,terms,location} =useContext(gymContext)

  // const cites = GymCities?.filter((item, index) => GymCities?.indexOf(item) === index);

  const handleChange=(e)=>{
    const selectedCityValue = e.target.value;
    console.log(selectedCityValue)
    setSelectedCity(selectedCityValue);
  }
  React.useEffect(()=>{
    const cites = GymCities?.filter((item, index) => GymCities?.indexOf(item) === index);
    setCity(["all",...cites])
  })
  return (
    <Box sx={{ minWidth: 120 ,marginTop:3}}>
      <FormControl >
        <NativeSelect

         onChange={(e)=>{handleChange(e)}}
          defaultValue={"all"}
          inputProps={{
            name: "city",
            id: "uncontrolled-native",
          }}
        >
           {city?.map((name) => <option value={name} >{name}</option>
           )}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
