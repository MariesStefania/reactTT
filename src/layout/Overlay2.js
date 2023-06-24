import { Container, TopLeft, BottomLeft, BottomRight, Hamburger } from './styles'
import { VelvetBanana } from './VelvetBanana'

export default function Overlay2() {
  return (
    <Container>
      <TopLeft>
        <h2>
          Immersive 
          <br />
          web apps
        </h2>
        <p>Maries Stefania </p>
      </TopLeft>
      <BottomLeft>
        Click for more immersive Experiences
      </BottomLeft>
   
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
