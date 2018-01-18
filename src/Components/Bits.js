import React from 'react'

const sizeMap = {
  jumbo: 100,
  large: 80,
  medium: 60,
  small: 40,
  micro: 20,
}

export const Spacer = ({size, children}) => (
  <div style={{margin: `${sizeMap[size]}px 0`}}>{children}</div>
)
