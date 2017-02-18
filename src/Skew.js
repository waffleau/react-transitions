import React, {PropTypes, PureComponent} from 'react'

import Transition from './Transition'

const NumberOrArrayOfNumbers = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.arrayOf(PropTypes.number)
])

export class Skew extends PureComponent {
  static defaultProps = {
    easing: 'easeInOut',
    from: [0, 0]
  }

  static propTypes = {
    ...Transition.baseProps,
    from: NumberOrArrayOfNumbers,
    to: NumberOrArrayOfNumbers.isRequired
  }

  getFromValue() {
    const from = this.valueAsArray(this.props.from)
    return {
      transform: `skew(${from[0]}deg, ${from[1]}deg)`
    }
  }

  getStyle() {
    const {style} = this.props
    return {
      transformOrigin: 'center center',
      ...style
    }
  }

  getToValue() {
    const to = this.valueAsArray(this.props.to)
    return {
      transform: `skew(${to[0]}deg, ${to[1]}deg)`
    }
  }

  valueAsArray(value) {
    return (typeof value === 'number')
      ? [value, value]
      : value
  }

  render() {
    const {children} = this.props
    return (
      <Transition
        {...this.props}
        style={this.getStyle()}
        fromValue={this.getFromValue()}
        toValue={this.getToValue()}>
        {children}
      </Transition>
    )
  }
}

export default Skew