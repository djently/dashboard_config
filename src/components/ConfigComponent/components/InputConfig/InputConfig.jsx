import { get, set } from 'lodash/fp'
import React, { Component } from 'react'
import { Typography, TextField, Grid, Divider } from '@material-ui/core'

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
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h5">Inputs</Typography>
        </Grid>
        <Grid item>{this.renderForm(this.props.value)}</Grid>
      </Grid>
    )
  }

  renderForm = () => (
    <React.Fragment>
      {form.map((formSection, idx) => (
        <Grid
          container
          spacing={16}
          direction="row"
          key={formSection.label + idx}
        >
          <Grid item xs={12} sm={8}>
            {this.renderFormSection(formSection)}
          </Grid>
          <Grid item xs={12} sm={4}>
            {this.renderFormSample(formSection)}
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
      ))}
    </React.Fragment>
  )

  renderFormSection(formSection) {
    return (
      <Grid container direction="column" spacing={16}>
        <Grid item>
          <Typography variant="subheading">{formSection.label}</Typography>
        </Grid>
        {formSection.fields.map(field => (
          <Grid item key={field.path} sm>
            {this.renderField(field)}
          </Grid>
        ))}
      </Grid>
    )
  }

  renderFormSample(formSection) {
    const getStyle = field => {
      const path = field.path.split('.')
      return path[path.length - 1]
    }
    const sectionStyles = formSection.fields.reduce((styles, field) => ({
      ...styles,
      [getStyle(field)]: get(field.path, this.props.value),
    }), {})
    const inputStyle = Object.assign({
      width: '100%',
      height: 32,
      cursor: 'pointer',
      marginTop: 16,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
    }, sectionStyles)
    console.log(inputStyle)

    return (
      <Grid container direction="column" spacing={16}>
        <Grid item>
          <Typography variant="subheading">
            {formSection.label} Example
          </Typography>
        </Grid>
        <Grid item>
          <input
            style={inputStyle}
            defaultValue={formSection.label}
            label={formSection.label}
          />
        </Grid>
      </Grid>
    )
  }

  renderField(field) {
    switch (field.type) {
      case 'colorPicker':
        return (
          <Grid item sm>
            <ColorPicker
              name={field.path}
              onChange={this.handleChange}
              value={get(field.path, this.props.value)}
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
              value={get(field.path, this.props.value)}
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
              value={get(field.path, this.props.value)}
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
