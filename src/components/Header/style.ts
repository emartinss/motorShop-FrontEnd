import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

export const StyledHeader = styled.header`
  padding: 0 60px;
  border-bottom: 2px solid ${mainTheme.colors.gray6};
  height: 5rem;
  max-height: 5rem;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;

    img {
      width: 9.5625rem;
      height: 1.6875rem;
    }

    div {
      display: flex;
      align-items: center;
      height: 100%;

      border-left: 2px solid ${mainTheme.colors.gray6};
      gap: 10px;
    }
  }
`;
