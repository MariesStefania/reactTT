import React from 'react'
import { createRoot } from 'react-dom/client'
import {  useRef, useState ,useEffect} from 'react'
import './index.css'
import Overlay2 from './layout/Overlay2'
import { FadeIn,lightTheme,darkTheme,VideoDiv, TextScreen3,TextScreen2, LeftMiddleScreen2,LeftMiddleScreen3, RoomDiv,  Screen2, Screen3,ScreenBlank, BottomCenter, TextRoom,ScreenRoom, DarkLightSwitch} from './layout/styles'
import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";
import Switch from "./components/Switch";

import Room from './components/Room'
import {gsap } from "gsap"
import { ScrollTrigger} from 'gsap/all'
import { ThemeProvider } from 'styled-components'
import videoEdit from "./public/Edit1.mp4"

gsap.registerPlugin(ScrollTrigger)

export default function Page2() {
    const [fontSize, setFontSize] = useState(40);
    const [fontSize2, setFontSize2] = useState(40);
  
    const [hiddenScreen1, setHiddenScreen1] = useState(false);
    const [theme, setTheme] = useState('light');
    const roomRef = useRef(null);
    const screen2Ref = useRef(null);
    const screen3Ref = useRef(null); 
    const animationRef = useRef(null);
    const animation2Ref = useRef(null);
  
  
    const toggleTheme  = () =>{
      if(theme === "dark"){
      setTheme("light")
      setDarkMode("light")
      }else{
        setTheme("dark")
        setDarkMode("dark")
      }
    }
  
  
    const setDarkMode = (mode) => {
      if(mode == "dark")
      {
        console.log("darkkk")
        // document.querySelector("body").setAttribute("background","#426177")
        document.body.style.backgroundColor = "#1f1826"
      }else{
  
        console.log("lighhtt")
  
        // document.querySelector("body").setAttribute("background","#E0B59A")
        document.body.style.backgroundColor = "#E3DAC9";
  
      }
    }
  
    useEffect(()=>{
      const el = roomRef.current;
      const t = screen2Ref.current;
      const t3 = screen3Ref.current;
      const an = animationRef.current;
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:t,
          endTrigger:t3,
          scrub: 1,
          toggleActions: "restart none none none",
          // markers:{
          //   endColor:"black",
          //   startColor:"black"
          // }
        },
      });
      tl.to(el, {
        x:-500,
        
      })
      .to(el,{
        x:500,
      })
  
      ScrollTrigger.create({
        trigger:t,
        // markers:true,
        toggleClass: "fadeSlow"
      })
  
    }, [])
  
  
    useEffect(()=>{
      const an = animationRef.current
      const an2 = animation2Ref.current
      gsap.to(an,{
        scrollTrigger:{
          trigger:an,
          toggleClass: "show",
          start:"top 50%",
          end: "top -10%",
          // markers:true
        }
      })
      gsap.to(an2,{
        scrollTrigger:{
          trigger:an2,
          toggleClass: "show",
          start:"top 50%",
          end: "top -10%",
          // markers:true
        }
      })
  
    },[])


  return (
    <ThemeProvider  theme= {theme=== "dark" ? darkTheme: lightTheme}>
        
        <ScreenRoom >
        <RoomDiv ref ={roomRef} >
          <Room/>
        </RoomDiv>
        <Overlay2/>
        <DarkLightSwitch>
          <SunIcon />
          <Switch toggleTheme = {toggleTheme} isDarkTheme={theme === "dark"} />
          <MoonIcon />
        </DarkLightSwitch>
    
      </ScreenRoom>

      <Screen2 ref={screen2Ref} >

        <TextRoom ref={animationRef} className="textShow">
        <LeftMiddleScreen2>
        <input type="range" min="40" max="100" value={fontSize2} step="10" onChange={(e) => setFontSize2(e.target.value)} />
        </LeftMiddleScreen2>
          <TextScreen2>
            <h1 >
              camera facuta cu spline
            </h1>

            <h1 style={{"font-size":`${fontSize2}px`}} >
              Spline ne da posibilitatea sa modelam elemente si sa generam medii imersive.
            </h1>
            
       
            </TextScreen2>
        </TextRoom>
      </Screen2>

      <ScreenBlank  >

      </ScreenBlank>

      <Screen3  >
        
        <TextRoom ref={animation2Ref} className="textShow">
        <LeftMiddleScreen3>
          <input type="range" min="40" max="100" value={fontSize} step="10" onChange={(e) => setFontSize(e.target.value)} />
        </LeftMiddleScreen3>
        <TextScreen3>
            <h1 >
              camera facuta cu spline
            </h1>
            <h1 style={{"font-size":`${fontSize}px`}} ref={screen3Ref}>
            Spline ne da posibilitatea sa modelam elemente si sa generam medii imersive.
            </h1>
         

          </TextScreen3>

      
        </TextRoom>
      </Screen3>

      {/* <ScreenBlank  >
        
      <div style={{"display":"flex"}}>
        <div class="wavy"></div>
        </div>
        </ScreenBlank>
        <ScreenBlank  >
        <div style={{"display":"flex"}}>
        <div class="wavy"></div>
        </div>

        </ScreenBlank>

        <ScreenBlank  >
          <VideoDiv>
            <video src={videoEdit} autoPlay loop muted/>
          </VideoDiv>

        </ScreenBlank> */}
    </ThemeProvider>
)
}
