import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { v4 as uuidv4 } from 'uuid';
export default function DropDown({ gymname }) {
  const cites = gymname.filter((item, index) => gymname.indexOf(item) === index);
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
            <option value={name} key={uuidv4()}>{name}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
