import React from 'react'
import Confetti from 'react-confetti'

import AddSize from '../Components/AddSize'

const menuHeight = 42

const ConfettiBackground = () => (
  <AddSize>
    {({dims: {width, height}}) => (
      <div
        style={{
          position: 'absolute',
          top: menuHeight,
          left: 0,
          width: '100%',
          height: `calc(100% - ${menuHeight}px)`,
        }}
      >
        <Confetti
          numberOfPieces={50}
          {...{width, height: height - menuHeight}}
        />
      </div>
    )}
  </AddSize>
)

export default ConfettiBackground
