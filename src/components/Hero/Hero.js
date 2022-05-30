import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  TypedText,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

import Typewriter from "typewriter-effect";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there. I'm Mehrdad,
          <br />
          <TypedText>
            <Typewriter
              options={{
                strings: [
                  "Software developer 💻",
                  "passionate about Football ⚽",
                  "student at UofT 🎓",
                  "Web developer 🌐",
                  "Beginner piano player 🎹",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </TypedText>
        </SectionTitle>
        <SectionText>
          I'm an incoming third year Computer Science student at UofT Scarborough
          specializing in Software Engineering 👩‍💻. My main interests lie in
          Software and Web development 🌐. I am always happy to meet new people,
          so feel free to{" "}
          <a
            href="mailto:mehrdad.ghannad@mail.utoronto.ca"
            style={{ color: "lightblue", textDecoration: "underline" }}
          >
            contact me.
          </a>
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
