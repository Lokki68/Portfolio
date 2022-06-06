import styled from "styled-components";
import { BreakPoints } from "../../../themes/BreakPoint";

export const BlogCard = styled.div`
  position: relative;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  padding: ${({ noPadding }) => (noPadding ? "0" : "2px")};
  aspect-ratio: 4/3;
  cursor: pointer;

  @media screen and (max-width: ${BreakPoints.sm}) {
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  overflow: hidden;
`;

export const CardTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2c304dff;
  height: 30px;
  color: #fff;
  border-radius: 0 0 10px 10px;
`;

export const CardInfo = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  padding: 2rem 2rem 0;
  color: #e4e6e7;
  font-size: 1.8rem;
  line-height: 24px;
  text-align: justify;

  @media screen and (max-width: ${BreakPoints.sm}) {
    padding: 0.3rem;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  font-size: 2rem;
  width: 100%;
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 1.8rem;
`;

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;

export const UtilityList = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLink = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;

  &:hover {
    background: #801414;
  }
`;
