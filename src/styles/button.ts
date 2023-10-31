import styled from "styled-components";
import { mainTheme } from "./theme";

export const StyleButtonForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;

  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;

  padding: 16px 10px;
  gap: 10px;
  border: 2px solid ${({ name }) => (name === "register" ? mainTheme.colors.gray4 : "none")};
  border-radius: 4px;

  background-color: ${({ className }) => mainTheme.colors[className!] || "black"};
  color: ${({ color }) => mainTheme.colors[color!] || "black"};

  font-size: 16px;
  font-weight: 600;
`;

export const StyledButtonsHeader = styled.button`
  width: 9.5rem;
  height: 3rem;

  padding: 10px 22px;

  color: ${({ color }) => mainTheme.colors[color!] || "black"};
  background-color: transparent;

  border: 2px solid ${({ name }) => (name === "register" ? mainTheme.colors.gray4 : "none")};
  border-radius: 4px;

  font-size: 16px;
  font-weight: 600;
`;
