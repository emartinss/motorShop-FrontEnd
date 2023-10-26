import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 18.75rem;
  height: 18.75rem;
  background-color: ${mainTheme.colors.gray0};

  small {
    color: ${mainTheme.colors.gray10};
  }

  .logo {
    width: 150px;
    height: 30px;
  }

  .button {
    width: 53px;
    width: 50px;
  }
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;

    padding: 0 40px;

    min-height: 8.75rem;
    height: 8.75rem;
  }
`;
