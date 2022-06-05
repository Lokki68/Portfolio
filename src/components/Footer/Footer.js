import React from "react";

import {
  CompagnyContainer,
  FooterContainer,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = (props) => {
  return (
    <FooterContainer>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Tel :</LinkTitle>
          <LinkItem href="tel:0783191208">07.83.19.12.08</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email : </LinkTitle>
          <LinkItem href="mailto:bricel67@gmail.com">
            bricel67@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompagnyContainer>
          <Slogan>Pour vous accompagnez et créer ensemble</Slogan>
        </CompagnyContainer>
        <SocialIconsContainer>
          <SocialIcons href="https://github.com/Lokki68" target="_blank">
            <AiFillGithub size="2rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/brice-libert/"
            target="_blank"
          >
            <AiFillLinkedin size="2rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.facebook.com/brice.libert"
            target="_blank"
          >
            <AiFillFacebook size="2rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.instagram.com/lokki67/?hl=fr"
            target="_blank"
          >
            <AiFillInstagram size="2rem" />
          </SocialIcons>
        </SocialIconsContainer>
      </SocialContainer>
    </FooterContainer>
  );
};

export default Footer;
