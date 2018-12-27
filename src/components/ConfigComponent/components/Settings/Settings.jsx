import { set } from 'lodash/fp'
import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'
import form from './form'
import SettingsField from './SettingsField'

export default class Settings extends Component {
  static defaultProps = {
    value: {},
  }

  handleChange = event =>
    this.props.onChange(
      set(event.target.name, event.target.value, this.props.value)
    )

  render() {
    return (
      <Grid container spacing={16} direction="column">
        <Grid item>
          <Typography variant="h5">Settings</Typography>
        </Grid>
        <Grid item>{this.renderFields()}</Grid>
      </Grid>
    )
  }

  renderFields() {
    const { value } = this.props
    return (
      <Grid container spacing={16} direction="row">
        {form.map(field => (
          <SettingsField
            {...field}
            value={value}
            onChange={this.handleChange}
          />
        ))}
      </Grid>
    )
  }
}
