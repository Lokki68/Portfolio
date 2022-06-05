import styled from "styled-components";

import { IoIosArrowDown } from "react-icons/io";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 2rem 1rem 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
