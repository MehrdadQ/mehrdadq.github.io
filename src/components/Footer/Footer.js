import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

import Typewriter from "typewriter-effect";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList></LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            <Typewriter
              options={{
                strings: [
                  "Built with React.js, Next.js, and CSS",
                  "Thanks for visiting my website!",
                  "Last Updated: October 2021",
                  "Don't forget to stay hydrated 💧",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://www.github.com/MehrdadQ">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/mehrdadghannad/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="mailto:mehrdad.ghannad@mail.utoronto.ca">
            <AiFillMail size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
