import styled from "styled-components";
import { BreakPoints } from "../../../themes/BreakPoint";

export const BlogCard = styled.div`
  position: relative;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  padding: ${({ noPadding }) => (noPadding ? "0" : "2px")};
  aspect-ratio: 16/9;
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
  background: #f1f1f1;
  color: #000;
  border-radius: 0 0 10px 10px;
`;
