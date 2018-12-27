import { get } from 'lodash/fp'
import React from 'react'
import {
  Grid,
  TextField,
  MenuItem,
  Switch,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core'

export default SettingsFieldWrapper

function SettingsFieldWrapper({ sizes = {}, ...props }) {
  return (
    <Grid
      item
      xs={sizes.xs || false}
      sm={sizes.sm || false}
      md={sizes.md || false}
      lg={sizes.lg || false}
      xl={sizes.xl || false}
      key={props.name}
    >
      <SettingsField {...props} />
    </Grid>
  )
}

function SettingsField(props) {
  switch (props.type) {
    case 'switch':
      return <SwitchField {...props} />
    default:
      return <InputField {...props} />
  }
}

function InputField({
  name,
  type = 'text',
  sizes = {},
  label,
  select,
  options,
  value,
  onChange,
}) {
  return (
    <TextField
      type={type}
      value={get(name, value)}
      label={label}
      name={name}
      select={select}
      onChange={onChange}
      fullWidth
    >
      {options &&
        options.map(opt => (
          <MenuItem key={name + opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
    </TextField>
  )
}

function SwitchField({ name, value, label, onChange }) {
  return (
    <FormGroup row>
      <FormControlLabel
        control={<Switch checked={get(name, value)} onChange={onChange} />}
        label={label}
      />
    </FormGroup>
  )
}
