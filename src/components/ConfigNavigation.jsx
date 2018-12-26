import React, { Component } from 'react'
import ArrowIcon from "@material-ui/icons/ArrowRightAlt";
import ConfigNavigationMenu from './ConfigNavigationMenu'
import getSection from '../utils/getSection'

export default class ConfigNavigation extends Component {
  static defaultProps = {
    schema: {},
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
    const { schema, value, onNavigate } = this.props
    let paths = value
      .split('.')
      .reduce(
        (acc, key) => [
          ...acc,
          acc.length ? `${acc[acc.length - 1]}.${key}` : key,
        ],
        []
      )
    paths = ['', ...paths].slice(0, paths.length)

    return (
      <React.Fragment>
        {paths.map((path, idx) => (
          <React.Fragment key={path}>
            <ConfigNavigationMenu
              onNavigate={onNavigate}
              nodes={getSection(schema, path).nodes}
              current={value.split('.')[idx]}
              path={path}
            />
            {(idx < paths.length - 1) ? <ArrowIcon /> : null}
          </React.Fragment>
        ))}
      </React.Fragment>
    )
  }
}
