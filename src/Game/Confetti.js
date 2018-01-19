import React from 'react'
import Confetti from 'react-confetti'

import AddSize from '../Components/AddSize'

const ConfettiBackground = () => (
  <AddSize>
    {({dims}) => (
      <div
        style={{
          position: 'absolute',
          top: 42,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <Confetti numberOfPieces={50} {...dims} />
      </div>
    )}
  </AddSize>
)

export default ConfettiBackground
