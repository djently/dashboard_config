import React, { Component } from 'react'
import { Typography, Paper } from '@material-ui/core'

import TutorialsConfig from './components/TutorialsConfig'
import InputConfig from './components/InputConfig'
import Settings from './components/Settings'

export default class ConfigComponent extends Component {
  render() {
    return (
      <div style={{ padding: 8 }}>
        <Paper style={{ padding: 8 }}>{this.renderSection()}</Paper>
      </div>
    )
  }

  renderSection() {
    const { component, ...rest } = this.props
    switch (component) {
      case 'TutorialsConfig':
        return <TutorialsConfig {...rest} />
      case 'InputConfig':
        return <InputConfig {...rest} />
      case 'Settings':
        return <Settings {...rest} />

      default:
        return <Typography>Component {component} not found</Typography>
    }
  }
}
