import styled from "styled-components";
import { mainTheme } from "../../styles/theme";
import { backgroundColor } from "../../components/Header/style";

export const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;

  .div-banner {
    position: relative;
    text-align: center;
    min-height: 100%;
    height: 100%;
    width: 100%;

    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0));

    img {
      position: absolute;
      top: 60%;
      transform: translate(-50%, -50%);
      width: 130%;
      height: 100%;
    }

    h1 {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      font-size: 24px;
      z-index: 10000;
      font-family: "Lexend", sans-serif;
      font-weight: 400;
    }
    h2 {
      position: absolute;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      font-size: 24px;
      line-height: 30px;
      width: 99%;
      font-family: "Lexend", sans-serif;
      font-weight: 400;
    }
  }
  .div-products {
    margin-top: 30px;
    margin-bottom: 200px;
    .users {
      display: flex;
      align-items: center;
      gap: 10px;

      .userName {
        font-size: 14px;
        font-weight: 500;
        line-height: 28px;
        color: ${mainTheme.colors.gray2};
      }
      .userAvatar {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 32px;
        height: 32px;

        font-size: 14px;
        font-weight: 700;

        border-radius: 100%;

        background-color: ${backgroundColor};
        color: ${mainTheme.colors.white};
      }
    }

    ul {
      display: flex;
      gap: 15px;

      padding: 30px 15px;

      overflow-x: auto;

      li {
        display: flex;
        flex-direction: column;
        width: 250px;
        gap: 10px;
        cursor: pointer;
        .div-carName {
          display: flex;
          gap: 5px;

          p {
            font-family: "Lexend", sans-serif;
            font-weight: 600;
            font-size: 16px;
          }
        }
        .description {
          font-weight: 400;
          color: ${mainTheme.colors.gray2};
          font-size: 14px;
          line-height: 24px;
        }
        .div-informations {
          display: flex;
          justify-content: space-between;

          span {
            font-weight: 500;
          }

          div {
            display: flex;
            gap: 8px;
          }

          p {
            display: flex;
            background-color: ${mainTheme.colors.brand4};
            color: ${mainTheme.colors.brand1};
            height: 25px;

            justify-content: center;
            align-items: center;
            padding: 8px 8px;

            font-weight: 500;
          }
        }
      }
    }
  }
  @media (min-width: 900px) {
    align-items: center;
    .div-banner {
      img {
        position: absolute;
        top: 40%;
        width: 100%;
        height: 100%;
      }

      h1 {
        top: 35%;
        font-weight: 500;
      }
      h2 {
        top: 43%;
        font-weight: 500;
      }
    }

    .div-products {
      width: 65%;
      display: flex;
      justify-content: center;

      ul {
        width: 100%;
        justify-content: space-evenly;
      }
    }
  }
`;
