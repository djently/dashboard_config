import React from "react";
import { TextField, MenuItem } from "@material-ui/core";

const BorderStyleSelect = props => (
  <TextField select {...props}>
    <MenuItem value="none">none</MenuItem>
    <MenuItem value="solid">solid</MenuItem>
    <MenuItem value="hidden">hidden</MenuItem>
    <MenuItem value="dotted">dotted</MenuItem>
    <MenuItem value="dashed">dashed</MenuItem>
    <MenuItem value="double">double</MenuItem>
    <MenuItem value="groove">groove</MenuItem>
    <MenuItem value="ridge">ridge</MenuItem>
    <MenuItem value="ridge">ridge</MenuItem>
    <MenuItem value="inset">inset</MenuItem>
    <MenuItem value="outset">outset</MenuItem>
  </TextField>
)

export default BorderStyleSelect