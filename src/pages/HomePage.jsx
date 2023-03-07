import React from 'react'
import '../styles/HomePage.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import img1 from '../pics/img1.jpg'



const HomePage = () => {

  return (
    <Parallax pages={2}>
      <ParallaxLayer offset={0} speed={1} factor={1} style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover'
      }}>
      </ParallaxLayer>

      {/* <ParallaxLayer offset={1} speed={0.5} factor={1} style={{
        backgroundImage: `url(${BGSecond})`,
        backgroundSize: 'cover'
      }}>
        
      </ParallaxLayer> */}
    </Parallax>
  )
  

}

export default HomePage