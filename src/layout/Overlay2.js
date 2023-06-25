import { Container, TopLeft,LeftText,RightText, BottomLeft, BottomRight, Hamburger } from './styles'
import { VelvetBanana } from './VelvetBanana'

export default function Overlay2() {
  return (
    <Container>
      <LeftText>
        <h2>
          Immersive  web apps
        </h2>
        <p>Maries Stefania </p>
      </LeftText>
      <BottomLeft>
        Click for more immersive Experiences
      </BottomLeft>
      
      <RightText>
        <h2>
          Immersive  web apps
        </h2>
        <p>Maries Stefania </p>
      </RightText>
      {/* <BottomRight>
        Inspiration and ideas
        <br />
        Fundamentals
        <br />
        Finding models
        <br />
        Preparing them for the web
        <br />
        Displaying and changing models
        <br />
        Animation fundamentals
        <br />
        Effects and making things look good
        <br />
        Performance and time to load
        <br />
      </BottomRight> */}
      {/* <VelvetBanana /> */}
    </Container>
  )
}
