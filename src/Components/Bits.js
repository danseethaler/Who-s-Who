import React from 'react'

const sizeMap = {
  jumbo: 100,
  large: 80,
  medium: 60,
  small: 40,
  micro: 20,
}

const colorMap = {accent: 'rgba(255, 99, 71, 0.9)'}

export const Spacer = ({size, children, style = {}, ...rest}) => (
  <div style={{margin: `${sizeMap[size]}px 0`, ...style}} {...rest}>
    {children}
  </div>
)

export const Colorize = ({color = 'accent', children, style = {}, ...rest}) => (
  <span style={{color: colorMap[color], ...style}} {...rest}>
    {children}
  </span>
)
