import { Container, TopLeft, BottomLeft, BottomRight, Hamburger } from './styles'
import { VelvetBanana } from './VelvetBanana'

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
          Immersive 
          <br />
          web apps
        </h1>
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
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      {/* <VelvetBanana /> */}
    </Container>
  )
}
