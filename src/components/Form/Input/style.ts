import styled from "styled-components";
import { mainTheme } from "../../../styles/theme";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  input {
    height: 48px;
    width: 100%;

    padding: 0 16px;

    border: 1px solid ${mainTheme.colors.gray7};
    border-radius: ${mainTheme.radius.default};

    &[id="description"] {
      height: 80px;
    }
  }

  label {
    font-size: 14px;
    font-weight: 500;
  }
`;

// export const StyledInput
