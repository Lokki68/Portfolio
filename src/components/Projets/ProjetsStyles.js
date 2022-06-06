import styled from "styled-components";

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  place-items: center;
  column-gap: 5px;
  row-gap: 60px;
  margin-bottom: 30px;

  @media screen and (max-width: 640px) {
    grid-template-columns: 300px;
    margin: 0 auto;
  }
`;
