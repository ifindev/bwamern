import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

const Button = (props) => {
  const className = [props.className]
  if (props.isPrimary) className.push('btn-primary')
  if (props.isPrimary) className.push('btn-primary')

  return <div></div>
}

Button.propTypes = {
  type: propTypes.oneOf(['button', 'link']),
  onClick: propTypes.func,
  target: propTypes.string, // url target
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool, // link to app route or to external?
}

export default Button
