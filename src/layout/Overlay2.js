import { Container, TopLeft,LeftText,RightText, BottomLeft, BottomRight, Hamburger } from './styles'
import splineLogo from "../public/splineLogo.png"
import scroll2 from "../public/scroll2.png"
import { SplineImg, FlexRight,BottomCenter,ScrollImg} from './styles'
export default function Overlay2() {
  return (
    <Container>
      <LeftText>
        <h2>
          Immersive  web apps
        </h2>
        <p>Maries Stefania </p>
      </LeftText>
      <BottomCenter>
       Scroll for more immersive Experiences
      </BottomCenter>
      <ScrollImg src={scroll2}></ScrollImg>

      <RightText>
        <FlexRight>
          <div>
            <h2>
              Interactive room desgin
            </h2>
          </div>
          <div>
            <SplineImg src={splineLogo} ></SplineImg>
          </div>
        </FlexRight>
        <p>spline 3d model</p>
      </RightText>

    </Container>
  )
}
