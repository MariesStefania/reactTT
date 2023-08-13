import styled, { keyframes } from 'styled-components'

export const fade = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`
export const fadei = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const FadeIn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: #ffd863;
  animation: ${fade} 4s normal forwards ease-in-out;
`

export const Container = styled.div`
  font-family: 'Inter';
  font-size: 16px;
  color: ${(props)=>props.theme.text};
  & h1 {
    padding: 0;
    margin: 0 0 0.05em 0;
    font-family: 'Ayer Poster', serif;
    font-weight: 400;
    font-size: min(18vw, 14em);
    line-height: 0.85em;
  }
`

export const TopLeft = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;

`

export const LeftText = styled.div`
font-size: 33px;
  position: absolute;
  

  top: 30vw;
  left: 7vw;
  z-index: 1;
`;

export const RightText = styled.div`
font-size: 20px;
 position: absolute;
 
  top: 20vw;
  right: 13vw;
  z-index: 1;
`;


export const BottomLeft = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 15vw;
  width: 30ch;
  max-width: 40%;
`

export const BottomRight = styled.div`
  position: absolute;
  bottom: 5vw;
  right: 5vw;
  width: 35ch;
  max-width: 40%;
  line-height: 1em;
  letter-spacing: -0.01em;
  text-align: right;
`

export const BottomCenter = styled.div`
  position: absolute;
  bottom: 5vw;
  right: 40vw;
  max-width: 40%;
  line-height: 1em;
  letter-spacing: -0.01em;
  text-align: right;
  border-style:solid;
  padding:20px;
  border-radius:40px;
  font-size:20px;
`
export const BottomCenterV2 = styled.div`
  position: absolute;
  bottom: 1vw;
  right: 40vw;
  max-width: 40%;
  line-height: 1em;
  letter-spacing: -0.01em;
  text-align: right;
  border-style:solid;
  padding:20px;
  border-radius:40px;
  font-size:20px;
`
export const FlexRight = styled.div`
  display:flex;
  margin-bottom:-20px;
`

export const SplineImg = styled.img`
  width: 50px;
  margin-top:15px;
  margin-left:15px;
`

export const ScrollImg = styled.img`
  position: absolute;
  width: 50px;
  margin-top:15px;
  margin-left:15px;
  bottom: 2.5vw;
  right: 49vw;

`

export const Hamburger = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 5vw;
  right: 5vw;
  & > div {
    position: relative;
    width: 24px;
    height: 2px;
    background: #E0B59A;
    margin-bottom: 6px;
  }
`

export const LeftMiddle = styled.div`
  position: absolute;
  bottom: 50%;
  right: 5vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 12px;
  transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
`

export const LeftMiddleScreen2 = styled.div`
  position: absolute;
  bottom: -35%;
  right: 1vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 12px;
  transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
`

export const LeftMiddleScreen3 = styled.div`
  position: absolute;
  bottom: -240%;
  left: -6vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 12px;
  transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
`

export const RoomDiv = styled.div`
width: 50vw;
height: 90vh;
margin:10px;
margin-top:80px;
margin-left:25vw;
position: fixed;
z-index: 1;

`

export const TextRoom = styled.div`
  // border-style:solid;
  width: 50vw;

  border-radius: 30px;
  background-color: ${(props)=>props.theme.backgroundTxt};
  color: ${(props)=>props.theme.text};
  text-align:center;
  
  & h1 {
    color: '#565656';
  }
  & div{
    // border-style:solid;
    // margin-left:40px;
    margin-top:250px;
  }

`
  // animation: ${fadei} 4s normal forwards ease-in-out;



export const Screen1 = styled.div`
height:100%;
`

export const ScreenRoom = styled.div`
display:flex;
height:100%;

`

export const Screen2 = styled.div`
display:flex;
height:100vh;
margin-left:50vw;
width: 50vw;
// border-style:solid;
justify-content:right;

`

export const Screen3 = styled.div`
display:flex;
height:100vh;


`
export const ScreenBlank = styled.div`
height:100vh;

`

export const DarkLightSwitch = styled.div`
  margin:20px;
  margin-left:90vw;
`



export const darkTheme = {
  text: "#E3DAC9",
  backgroundTxt: '#2b2235'

}

export const lightTheme = {
    text: "#1f1826",
    backgroundTxt: '#F7EFE6',
}

export const VideoDiv = styled.div`
  margin-top:600px;
`

export const Textp = styled.p`
font-family: 'Ayer Poster', serif;
color:red;

`

export const TextScreen3 = styled.div`
  margin-left:40px;
`

export const TextScreen2 = styled.div`
  margin-right:40px;
`

