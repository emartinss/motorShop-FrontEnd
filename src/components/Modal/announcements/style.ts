import styled from "styled-components";
import { mainTheme } from "../../../styles/theme";

export const StyledModalAds = styled.main`
  width: 100%;
  height: 80%;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 15px 16px 16px 25px;

  background-color: ${mainTheme.colors.white};

  border-radius: 8px;

  overflow-y: auto;

  .heading {
    display: flex;
    justify-content: space-between;

    width: 100%;

    span {
      color: ${mainTheme.colors.gray4};
    }

    h3 {
      font-size: 16px;
      font-family: "Lexend", sans-serif;
      font-weight: 500;
    }
  }

  .vehicle-information {
    display: flex;
    flex-direction: column;

    width: 100%;

    padding: 15px 0 0 0;

    p {
      font-size: 14px;
      font-weight: 500;
    }

    .div-buttons {
      display: flex;
    }
  }
`;
