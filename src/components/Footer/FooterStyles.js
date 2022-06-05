import styled from "styled-components";
import { BreakPoints } from "../../themes/BreakPoint";

export const FooterContainer = styled.footer`
  //background-color: green;
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;

  @media screen and (max-width: ${BreakPoints.sm}) {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`;

export const LinkList = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 40px;

  @media screen and (max-width: ${BreakPoints.lg}) {
    padding: 32px 0 16px;
  }

  @media screen and (max-width: ${BreakPoints.md}) {
    width: 100%;
    gap: 16px;
  }

  @media screen and (max-width: ${BreakPoints.sm}) {
    padding: 32px 4px 16px;
    gap: 5px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
`;

export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;

  @media screen and (max-width: ${BreakPoints.md}) {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`;

export const LinkItem = styled.a`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
  transition: 0.4s ease;
  position: relative;
  left: 0;

  @media screen and (max-width: ${BreakPoints.md}) {
    display: flex;
    font-size: 16px;
    line-height: 28px;
  }

  @media screen and (max-width: ${BreakPoints.md}) {
    display: flex;
    align-items: center;
    font-size: 8px;
    line-height: 14px;
    margin-bottom: 8px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${BreakPoints.md}) {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`;

export const CompagnyContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-right: auto;

  @media screen and (max-width: ${BreakPoints.md}) {
    flex-direction: column;
  }

  @media screen and (max-width: ${BreakPoints.sm}) {
    margin: 0 0 32px;
    align-items: center;
  }
`;

export const Slogan = styled.div`
  color: rgba(255, 255, 255, 0.5);
  min-width: 280px;
  letter-spacing: 0.02em;
  font-size: 18px;
  line-height: 30px;
  padding: 1rem;

  @media screen and (max-width: ${BreakPoints.md}) {
    font-size: 16px;
    line-height: 28px;
  }

  @media screen and (max-width: ${BreakPoints.sm}) {
    font-size: 14px;
    line-height: 22px;
    width: 100px;
  }
`;

export const SocialIconsContainer = styled.div`
  max-width: 1040px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${BreakPoints.sm}) {
    width: 100%;
    justify-content: flex-end;
  }
`;
