import { set, get } from 'lodash/fp'
import React, { Component } from 'react'
import { CssBaseline, AppBar, Toolbar } from '@material-ui/core'

import { STORAGE_SECTION } from "./constants";
import config from './sample_config/config'
import schema from './schema.json'
import getDefaultPath from './utils/getDefaultPath'
import getSection from './utils/getSection'
import ConfigNavigation from './components/ConfigNavigation'
import ConfigComponent from './components/ConfigComponent'

class App extends Component {
  state = {
    section: restoreSection() || getDefaultPath(schema),
    config: config,
  }

  handleNavigate = section => this.setState({ section }, () => storeSection(section))
  handleConfigChange = path => value =>
    this.setState({ config: set(path, value, this.state.config) })

  render() {
    const currentSection = getSection(schema, this.state.section)
    const currentSectionValue = get(this.state.section, this.state.config) || {}

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="sticky" color="default">
          <Toolbar>
            <ConfigNavigation
              schema={schema}
              value={this.state.section}
              onNavigate={this.handleNavigate}
            />
          </Toolbar>
        </AppBar>
        <ConfigComponent
          component={currentSection.component}
          value={currentSectionValue}
          onChange={this.handleConfigChange(this.state.section)}
        />
      </React.Fragment>
    )
  }
}

export default App

function storeSection(section) {
  if (window.sessionStorage) {
    window.sessionStorage.setItem(STORAGE_SECTION, section)
  }
}

function restoreSection() {
  if (window.sessionStorage) {
    return window.sessionStorage.getItem(STORAGE_SECTION)
  }
}