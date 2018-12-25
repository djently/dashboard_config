import { set, get } from 'lodash/fp'
import React, { Component } from 'react'
import { CssBaseline, AppBar } from '@material-ui/core'

import config from './sample_config/config'
import schema from './schema.json'
import getDefaultPath from './utils/getDefaultPath'
import getSection from './utils/getSection'
import ConfigSections from './components/ConfigSections'
import ConfigComponent from './components/ConfigComponent'

class App extends Component {
  state = {
    section: getDefaultPath(schema),
    config: config,
  }

  handleSectionChange = (key, section) => this.setState({ section })
  handleConfigChange = path => value =>
    this.setState({ config: set(path, value, this.state.config) })

  render() {
    const currentSection = getSection(schema, this.state.section)
    const currentSectionValue = get(this.state.section, this.state.config) || {}

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="sticky">
          <ConfigSections
            sections={schema.nodes}
            value={this.state.section}
            onNavigate={section => this.setState({ section })}
          />
        </AppBar>
        <ConfigComponent
          component={currentSection.component}
          value={currentSectionValue}
          onChange={this.handleConfigChange(this.state.section)}
        />
      </React.Fragment>
    )
  }

  renderSection(section) {
    return (
      <React.Fragment>
        {section.nodes && (
          <ConfigSections
            sections={section.nodes}
            value={this.state.section}
            onNavigate={this.handleSectionChange}
          />
        )}
      </React.Fragment>
    )
  }
}

export default App
