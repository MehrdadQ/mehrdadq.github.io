import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { DiAptana, DiCode, DiCodeBadge, DiCssdeck } from "react-icons/di";
import { IoCodeSlashOutline } from "react-icons/si";
import {
  BsFile,
  BsFileEarmark,
  BsFileEarmarkPlus,
  BsFileEarmarkText,
  BsFillInfoCircleFill,
} from "react-icons/bs";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

// import Pdf from "../../constants/resume.pdf";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCode size="4rem" />{" "}
          <span
            style={{
              paddingLeft: "10px",
              fontSize: "2rem",
              minWidth: "fit-content",
            }}
          >
            Mehrdad Ghannad
          </span>
        </a>
      </Link>
    </Div1>

    <Div3>
      <SocialIcons href="https://www.github.com/MehrdadQ">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mehrdadghannad/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto:mehrdad.ghannad@mail.utoronto.ca">
        <AiFillMail size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href={Pdf} target="_blank">
        <BsFileEarmarkText size="3rem" />
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
