import {
  Container,
  TopLeft,
  LeftText,
  RightText,
  BottomLeft,
  BottomRight,
  Hamburger,
} from "./styles";
import splineLogo from "../public/splineLogo.png";
import scroll2 from "../public/scroll2.png";
import {
  SplineImg,
  FlexRight,
  BottomCenter,
  ScrollImg,
  BottomCenterScroll,
} from "./styles";
export default function Overlay2() {
  return (
    <Container>
      <LeftText>
        <h2>Aplicatii web imersive</h2>
        <p>Revolutionarea aplicatiilor web folosind medii imersive </p>
      </LeftText>
      <BottomCenterScroll>
        Scroll pentru mai multe experiente !!
      </BottomCenterScroll>
      <ScrollImg src={scroll2}></ScrollImg>

      <RightText>
        <FlexRight>
          <div>
            <h2>Design interactiv al camerei</h2>
          </div>
          <div>
            <SplineImg src={splineLogo}></SplineImg>
          </div>
        </FlexRight>
        <p>Model 3d spline</p>
      </RightText>
    </Container>
  );
}
