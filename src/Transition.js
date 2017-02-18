import React, {PureComponent, PropTypes} from 'react'

const EasingTypes = {
  easeIn: 'ease-in',
  easeInOut: 'ease-in-out',
  easeOut: 'ease-out',
  linear: 'linear'
}

const BaseProps = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.any,
  delay: PropTypes.number,
  duration: PropTypes.number,
  easing: PropTypes.oneOf(Object.keys(EasingTypes)),
  style: PropTypes.object,
  timing: PropTypes.string
}

export class Transition extends PureComponent {
  static baseProps = BaseProps
  static easingTypes = EasingTypes

  static defaultProps = {
    active: true,
    delay: 0,
    duration: 600,
    style: {}
  }

  static propTypes = {
    ...BaseProps,
    fromValue: PropTypes.object.isRequired,
    toValue: PropTypes.object.isRequired
  }

  getEasing() {
    const {easing, timing} = this.props
    return EasingTypes[easing] || timing || EasingTypes.linear
  }

  getProperties() {
    return Object.keys(this.props.fromValue)
  }

  getStyle() {
    const {active, fromValue, style, toValue} = this.props

    return {
      transition: this.getTransition(),
      ...(active ? toValue : fromValue),
      ...style
    }
  }

  getTransition() {
    const {delay, duration} = this.props
    const easing = this.getEasing()

    const transition = this.getProperties().map((property) => {
      return `${property} ${duration}ms ${easing} ${delay}ms`
    })

    return transition.join(',')
  }

  render() {
    const {children} = this.props
    return (
      <div style={this.getStyle()}>
        {children}
      </div>
    )
  }
}

export default Transition
