import styled from "styled-components";

import { BreakPoints } from "../../themes/BreakPoint";

export const LeftSection = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  @media screen and (max-width: 640px) {
    width: 80%;
  }
`;
