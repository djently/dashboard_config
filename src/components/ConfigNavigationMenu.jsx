import React, { Component } from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'
import getDefaultPath from '../utils/getDefaultPath'

export default class ConfigNavigationMenu extends Component {
  state = { open: false }
  buttonRef = React.createRef()
  render() {
    const { nodes, current } = this.props
    const currentNode = nodes[current]
    const label = currentNode.label || current
    return (
      <div key={currentNode} ref={this.buttonRef}>
        <Button onClick={() => this.setState({ open: true })}>{label}</Button>
        {this.renderMenu()}
      </div>
    )
  }

  renderMenu() {
    const { nodes } = this.props
    return nodes ? (
      <Menu
        open={this.state.open}
        onClose={() => this.setState({ open: false })}
        anchorEl={this.buttonRef.current}
        anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
      >
        {Object.keys(nodes).map(nodeKey => this.renderMenuItem(nodeKey))}
      </Menu>
    ) : null
  }

  renderMenuItem(key) {
    const { path, nodes, onNavigate } = this.props
    const node = nodes[key]

    const target = buildPath(buildPath(path, key), getDefaultPath(node))
    return (
      <MenuItem
        key={key}
        onClick={() => this.setState({ open: false }, () => onNavigate(target))}
      >
        {node.label || key}
      </MenuItem>
    )
  }
}

function buildPath(path, key) {
  return [...path.split('.'), key].filter(v => !!v).join('.')
}
