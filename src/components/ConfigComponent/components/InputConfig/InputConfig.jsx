import { get, set } from 'lodash/fp'
import React, { Component } from 'react'
import { Typography, TextField, Grid } from '@material-ui/core'

import ColorPicker from 'components/ColorPicker'
import BorderStyleSelect from 'components/BorderStyleSelect'

import { form } from './form'

export default class InputConfig extends Component {
  static defaultProps = {
    value: {
      default: {},
    },
  }

  handleChange = event =>
    this.props.onChange(
      set(event.target.name, event.target.value, this.props.value)
    )

  render() {
    return (
      <div>
        <Typography variant="h5">Inputs</Typography>
        <pre style={{ whiteSpace: 'pre-wrap' }}>
          {JSON.stringify(this.props.value)}
        </pre>
        {this.renderForm(this.props.value)}
      </div>
    )
  }

  renderForm = values => (
    <React.Fragment>
      {form.map((formSection, idx) => (
        <Grid container spacing={16} direction="column" key={formSection.label + idx}>
          <Grid item>
            <Typography variant="h6">{formSection.label}</Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={16}
              key={formSection.label + idx}
            >
              {formSection.fields.map(field => (
                <Grid item key={field.path} sm>
                  {this.renderField(field, values)}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      ))}
    </React.Fragment>
  )

  renderField(field, values) {
    switch (field.type) {
      case 'colorPicker':
        return (
          <Grid item sm>
            <ColorPicker
              name={field.path}
              onChange={this.handleChange}
              value={get(field.path, values)}
              label={field.label}
              fullWidth
            />
          </Grid>
        )
      case 'number':
      case 'email':
      case 'url':
      case 'text':
        return (
          <Grid item sm>
            <TextField
              type={field.type}
              name={field.path}
              onChange={this.handleChange}
              value={get(field.path, values)}
              label={field.label}
              fullWidth
            />
          </Grid>
        )
      case 'borderStyle':
        return (
          <Grid item sm>
            <BorderStyleSelect
              name={field.path}
              onChange={this.handleChange}
              value={get(field.path, values)}
              label={field.label}
              fullWidth
            />
          </Grid>
        )

      default:
        return <Typography>{field.label}</Typography>
    }
  }
}
