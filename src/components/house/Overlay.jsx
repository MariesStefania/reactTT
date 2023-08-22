import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section 
      style={{
        opacity: props.opacity,
        "margin":"300px",
      }}
    >
      <div  style={{"margin-right":"800px"}}>
        <div >
          <div style={{"background":"white"}}>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

const Section2 = (props) => {
  return (
    <section 
      style={{
        opacity: props.opacity,
        "margin":"300px",
        "margin-top":"400px"

      }}
    >
      <div  style={{"margin-left":"800px"}}>
        <div >
          <div style={{"background":"white"}}>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

const Section3 = (props) => {
  return (
    <section 
    
      style={{
        opacity: props.opacity,
        "margin":"300px",
        "margin-top":"550px"
      }}
    >
      <div style={{"margin-right":"800px"}}>
        <div >
          <div style={{"background":"white"}}>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div >
        <Section opacity={opacityFirstSection}  >
          <h1  style={{"margin-left":"10px"}}>
            O reprezentare a camerelor
          </h1>
          <p  style={{"margin-left":"10px","margin-right":"10px"}}>Model 3d realizat in blender si exportat in aplicatii web</p>
          <p  style={{"margin-left":"10px"}}>camere:</p>
          <ul >
            <li>🧑‍💻 Camera de lucru</li>
            <li>🧑‍🏫 Camera de relaxare</li>
            <li>📦 Camera de idei</li>
          </ul>
          <p  style={{"margin-left":"10px"}}>↓</p>
        </Section>
        <Section2 right opacity={opacitySecondSection} mLeft={"800px"}>
          <h1  style={{"margin-left":"10px"}}>
            De la calculator la o carte 🔥
          </h1>
          <p  style={{"margin-left":"10px"}}>printr-un scroll se ajunge oriunde</p>
          <p style={{"margin-left":"10px"}}>
            <b>Interactiuni cu modelul 🔬</b>
          </p>
          <ul style={{"margin-left":"10px"}}>
            <li>Misca modelul stanga/dreapta</li>
            <li>Scroll sus/jos</li>
            <li>Misca modelul sus/jos</li>
          </ul>
          <p  style={{"margin-left":"10px"}}>toate posibile datorita ThreeJs</p>

          <p  style={{"margin-left":"10px"}}>
            <b>Cum ?</b>
          </p>
          <ul  style={{"margin-left":"10px"}}>
            <li>Modelare 3d</li>
            <li>Imaginatie</li>
            <li>Libraria perfecta</li>
            <li>ThreeJS</li>
          </ul>
          <p  style={{"margin-left":"10px"}}>↓</p>
        </Section2>
        <Section3 opacity={opacityLastSection}>
          <h1  style={{"margin-left":"10px"}}>
            Cea mai buna librarie
          </h1>
          <p  style={{"margin-left":"10px"}}>
            De la modelare 3D la aplicatii web
          </p>
          <p  style={{"margin-left":"10px"}}>
          experiente imersive
          </p>
        </Section3>
      </div>
    </Scroll>
  );
};
