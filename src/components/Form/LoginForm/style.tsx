import styled from "styled-components";
import { mainTheme } from "../../../styles/theme";

export const StyledContainer = styled.main`
margin-top: 110px;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 412px;
  height: 542px;

  background-color: ${mainTheme.colors.gray10};

  padding: 44px 48px;
  gap: 32px;
  border-radius: ${mainTheme.radius.default};
  
  label{
    display: flex;
    flex-direction: column;
  }
`;