import React from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from "@react-three/fiber";

import {  useRef, useState ,useEffect} from 'react'
import './index.css'
import { lightTheme,darkTheme,} from './layout/styles'
import {gsap } from "gsap"
import { ScrollTrigger} from 'gsap/all'
import { ThemeProvider } from 'styled-components'

import { Experience } from "./components/house/Experience";

gsap.registerPlugin(ScrollTrigger)

export default function Page3() {
  const [theme, setTheme] = useState('light');



  return (
    <ThemeProvider  theme= {theme=== "dark" ? darkTheme: lightTheme}>
        
        <Canvas
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3],
      }}
    >
      <Experience />
    </Canvas>
    </ThemeProvider>
)
}
