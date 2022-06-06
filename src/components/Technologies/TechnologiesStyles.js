import styled from "styled-components";
import { BreakPoints } from "../../themes/BreakPoint";

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;

  @media screen and (max-width: ${BreakPoints.lg}) {
    margin: 64px 0;
  }

  @media screen and (max-width: ${BreakPoints.md}) {
    gap: 24px;
  }

  @media screen and (max-width: ${BreakPoints.sm}) {
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`;

export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(255, 255, 255, 0.2);
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${BreakPoints.sm}) {
    margin-left: 18px;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 800;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #fff;
  margin-bottom: 8px;

  @media screen and (max-width: ${BreakPoints.md}) {
    font-size: 24px;
    line-height: 28px;
  }

  @media screen and (max-width: ${BreakPoints.sm}) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }
`;

export const ListContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ListCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5px;
`;

export const ListParagraph = styled.p`
  font-size: 13px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media screen and (max-width: ${BreakPoints.md}) {
    font-size: 16px;
    line-height: 28px;
  }

  @media screen and (max-width: ${BreakPoints.sm}) {
    font-size: 14px;
    line-height: 22px;
  }
`;
