import React, { Component } from 'react'
import { Tabs, Tab, Toolbar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import getDefaultPath from '../utils/getDefaultPath'

const styles = () => ({
  toolbar: {
    padding: 0,
  },
})

class ConfigSections extends Component {
  static defaultProps = {
    sections: {},
    onNavigate: () => {},
    value: '',
  }

  componentDidMount() {
    const { value, onNavigate, sections } = this.props
    if (!value) {
      onNavigate(Object.keys(sections)[0])
    }
  }

  render() {
    const { sections, value } = this.props

    return this.renderTabs(sections, value)
  }

  renderTabs(sections, fullValue, path = '') {
    const { classes, onNavigate } = this.props
    const keys = Object.keys(sections)
    const value = fullValue.split('.')[0]
    const currentSection = sections[value] || {}
    const nextValue = fullValue
      .split('.')
      .slice(1)
      .join('.')
    const nextPath = buildPath(path, value)

    return (
      <React.Fragment>
        <Toolbar classes={{ root: classes.toolbar }} variant="dense">
          <Tabs value={value} indicatorColor="primary" fullWidth>
            {keys.map(key => (
              <Tab
                key={key}
                value={key}
                label={sections[key].label || key}
                onClick={() =>
                  onNavigate(
                    buildPath(
                      buildPath(path, key),
                      getDefaultPath(sections[key])
                    )
                  )
                }
              />
            ))}
          </Tabs>
        </Toolbar>

        {currentSection.nodes &&
          this.renderTabs(currentSection.nodes, nextValue, nextPath)}
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(ConfigSections)

function buildPath(path, key) {
  return [...path.split('.'), key].filter(v => !!v).join('.')
}
