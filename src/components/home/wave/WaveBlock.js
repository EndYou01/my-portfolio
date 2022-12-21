import React from 'react'
import Wave from 'react-wavify'

export const WaveBlock = () => {
    return (
        <Wave fill='#f79902'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
  />
    )
}
