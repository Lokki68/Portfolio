import React from "react";
import Link from "next/link";

import { GiBookAura } from "react-icons/gi";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import {
  Container,
  LogoContainer,
  NavContainer,
  NavLink,
  SocialSection,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <LogoContainer>
      <Link href="/">
        <a className="logocontainer-link">
          <GiBookAura size={30} />
          <span>Portfolio</span>
        </a>
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
      <h2>Social</h2>
    </SocialSection>
  </Container>
);

export default Header;
