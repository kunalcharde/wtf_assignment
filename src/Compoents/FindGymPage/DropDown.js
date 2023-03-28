import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { v4 as uuidv4 } from 'uuid';
import { gymContext } from "../../Context/gymContext";
import { useContext } from "react";

export default function DropDown({ gymname, gymData }) {
  const [state,dispatch] =useContext(gymContext)
  
  const cites = gymname.filter((item, index) => gymname.indexOf(item) === index);

  const handleOnchange=(e)=>{
    console.log(e.target.value)
    const data = gymData.filter((item) => item.city==e.target.value)
    console.log(data)
    dispatch({
      type: "ADD_GYM",
      payload: data
    });
  }
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "city",
            id: "uncontrolled-native",
          }}
        >
          {cites.map((name) => (
            <option value={name} key={uuidv4()} onClick={(e)=>{handleOnchange(e)}}>{name}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
