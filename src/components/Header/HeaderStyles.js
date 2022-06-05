import styled from "styled-components";

import { BreakPoints } from "../../themes/BreakPoint";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 2rem 1rem 0;

  @media screen and (max-width: ${BreakPoints.sm}) {
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const LogoContainer = styled.div`
  //background-color: blue;
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;

  @media screen and (max-width: ${BreakPoints.sm}) {
    grid-area: 1 / 1 / 2 / 4;
  }
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  margin-bottom: 20px;

  span {
    font-size: 2rem;
    margin-left: 1rem;
  }
`;

export const NavContainer = styled.nav`
  //background-color: red;
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: ${BreakPoints.sm}) {
    grid-area: 2 / 1 / 3 / -1;
  }
`;

export const NavLink = styled.a`
  font-size: 1.5rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: 0.4s ease;

  &:hover {
    color: #f1f1f1;
    opacity: 1;
  }

  @media screen and (max-width: ${BreakPoints.sm}) {
    padding: 0.5rem;
  }
`;

export const SocialSection = styled.div`
  //background-color: green;
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 8px;

  @media screen and (max-width: ${BreakPoints.sm}) {
    grid-area: 1 / 4 / 2 / 6;
  }
`;

export const SocialIcons = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  transition: 0.4s ease;
  color: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #212d45;
    color: #f1f1f1;
    transform: scale(1);
  }
`;
