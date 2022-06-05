import React from "react";
import Link from "next/link";

import { GiBookAura } from "react-icons/gi";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

import {
  Container,
  LogoContainer,
  LogoLink,
  NavContainer,
  NavLink,
  SocialIcons,
  SocialSection,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <LogoContainer>
      <Link href="/">
        <LogoLink>
          <GiBookAura size={25} />
          <span>Portfolio</span>
        </LogoLink>
      </Link>
    </LogoContainer>

    <NavContainer>
      <li>
        <Link href="#projets">
          <NavLink>Projets</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#propos">
          <NavLink>A propos</NavLink>
        </Link>
      </li>
    </NavContainer>

    <SocialSection>
      <SocialIcons href="https://github.com/Lokki68" target="_blank">
        <AiFillGithub size="2rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/brice-libert/"
        target="_blank"
      >
        <AiFillLinkedin size="2rem" />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/brice.libert" target="_blank">
        <AiFillFacebook size="2rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.instagram.com/lokki67/?hl=fr"
        target="_blank"
      >
        <AiFillInstagram size="2rem" />
      </SocialIcons>
    </SocialSection>
  </Container>
);

export default Header;
