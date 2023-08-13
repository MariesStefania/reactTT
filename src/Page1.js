import React from 'react'

import { Suspense, useState} from 'react'
import './index.css'
import Overlay from './layout/Overlay'
import {  LeftMiddle, Screen1, BottomCenter,BottomCenterV2} from './layout/styles'


import Bulele from './Bulele'

export default function Page1() {
    const [speed, set] = useState(1)

    return (
    <Screen1 >
    <Suspense fallback={null}>
        <Bulele speed={speed} />
      </Suspense>
      <Overlay />
      <LeftMiddle>
        <input type="range" min="0" max="10" value={speed} step="1" onChange={(e) => set(e.target.value)} />
      </LeftMiddle>
      <BottomCenter>
        <a   href ={"http://localhost:3000/spline"}>click for more immersive experiences</a> 

      </BottomCenter>
      <BottomCenterV2  >
      <a  href ={"http://localhost:3000/house"}>click for more immersive experiences V2</a>
      </BottomCenterV2>

  </Screen1>
  
  )
}
