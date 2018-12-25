import React, { Component } from 'react'
import { Typography, ClickAwayListener } from '@material-ui/core'
import { ChromePicker } from 'react-color'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  container: {
    display: 'flex',
    position: 'relative',
  },
  label: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  indicator: {
    width: '100%',
    display: 'flex',
    boxSizing: 'border-box',
    cursor: 'pointer',
    height: 32,
    padding: '6px 6px 7px',
    marginTop: 16,
    border: '1px solid rgba(0, 0, 0, .12)',
  },
  pickerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    zIndex: 10,
  },
  picker: {
    transform: 'translateY(48px)',
  },
})

class ColorPicker extends Component {
  static defaultProps = {
    onFocus: () => {},
  }

  state = {
    isPickerOpen: false,
  }
  handlePickerChange = color =>
    this.props.onChange({
      target: {
        name: this.props.name,
        value: color.hex,
      },
    })

  handleFocus = e =>
    this.setState({ pickerOpen: true }, () => this.props.onFocus(e))

  render() {
    const { value, name, classes, label } = this.props
    return (
      <ClickAwayListener
        onClickAway={() => this.setState({ isPickerOpen: false })}
      >
        <div className={classes.container}>
          <Typography
            className={classes.label}
            variant="caption"
            color="textSecondary"
          >
            {label}
          </Typography>
          <button
            className={classes.indicator}
            style={{ backgroundColor: value }}
            onClick={() =>
              this.setState({ isPickerOpen: !this.state.isPickerOpen })
            }
          >
            <Typography style={{ color: idealTextColor(value) }}>
              {value}
            </Typography>
          </button>
          {this.state.isPickerOpen && (
            <div className={classes.pickerContainer}>
              <ChromePicker
                className={classes.picker}
                color={value}
                onChange={this.handlePickerChange}
                name={name}
                disableAlpha
              />
            </div>
          )}
        </div>
      </ClickAwayListener>
    )
  }
}
export default withStyles(styles)(ColorPicker)

function idealTextColor(bgColor) {
  // https://stackoverflow.com/a/4726403
  var nThreshold = 105
  var components = getRGBComponents(bgColor)
  var bgDelta =
    components.R * 0.299 + components.G * 0.587 + components.B * 0.114

  console.log(bgColor, bgDelta, 255 - bgDelta < nThreshold)
  return 255 - bgDelta < nThreshold ? 'rgba(0, 0, 0, 0.87)' : 'white'
}

function getRGBComponents(color) {
  var r = color.substring(1, 3)
  var g = color.substring(3, 5)
  var b = color.substring(5, 7)

  return {
    R: parseInt(r, 16),
    G: parseInt(g, 16),
    B: parseInt(b, 16),
  }
}
