import styled from "styled-components";
import { mainTheme } from "../../styles/theme";
import { backgroundColor } from "../../components/Header/style";

export const StyledUserPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to bottom, ${mainTheme.colors.brand1} 320px, ${mainTheme.colors.gray8} 0%);

  @media (min-width: 900px) {
    background-image: linear-gradient(to bottom, ${mainTheme.colors.brand1} 400px, ${mainTheme.colors.gray8} 0%);
  }
`;

export const StyledContainer = styled.div`
  padding: 50px 0 0px 0;
  width: 90%;

  div {
    display: flex;
    gap: 10px;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    height: 420px;

    gap: 8px;
    padding: 10px 0 10px 30px;

    background-color: ${mainTheme.colors.gray10};

    border-radius: ${mainTheme.radius.default};

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 77px;
      height: 77px;

      font-size: 27px;
      font-weight: 500;

      border-radius: 100%;

      background-color: ${backgroundColor};
      color: ${mainTheme.colors.white};
    }

    h3 {
      font-size: 20px;
      font-weight: 600;
      font-family: "Lexend", sans-serif;
    }

    p {
      font-weight: 400;
      color: ${mainTheme.colors.gray2};
      font-size: 16px;
      line-height: 28px;

      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;

      overflow: hidden;
      text-overflow: ellipsis;
    }

    small {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 92px;
      height: 32px;

      padding: 4px 8px;

      font-size: 14px;
      font-weight: 500;

      color: ${mainTheme.colors.brand1};
      background-color: ${mainTheme.colors.brand4};

      border-radius: ${mainTheme.radius.default};
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 206px;
      height: 48px;

      padding: 12px 28px;

      color: ${mainTheme.colors.brand1};
      background-color: transparent;

      font-size: 16px;
      font-weight: 600;

      border-radius: ${mainTheme.radius.default};
      border: 2px solid ${mainTheme.colors.brand1};
    }
    button:hover {
      transition: 280ms;

      color: ${mainTheme.colors.gray10};
      background-color: ${mainTheme.colors.brand1};
    }
  }

  .section-products {
    margin-top: 30px;
    margin-bottom: 100px;

    ul {
      display: flex;
      gap: 30px;

      height: 500px;

      padding: 30px 15px;

      overflow-x: auto;

      li {
        display: flex;
        flex-direction: column;

        min-width: 300px;
        max-width: 300px;
        height: 100%;
        gap: 10px;
        cursor: pointer;

        img {
          background-color: #d9d9d9;
          min-width: 300px;
          width: 300px;
          max-width: 300px;

          height: 180px;
          max-height: 180px;
          min-height: 180px;

          border-radius: ${mainTheme.radius.default};
        }

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
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;

          overflow: hidden;
          text-overflow: ellipsis;

          color: ${mainTheme.colors.gray2};

          min-height: 50px;

          font-size: 14px;
          font-weight: 400;
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

  .div-owner {
    padding: 15px 0 0 0;
    button {
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${mainTheme.colors.gray1};
      background-color: transparent;

      border: 2px solid ${mainTheme.colors.gray1};
      border-radius: ${mainTheme.radius.default};

      height: 38px;

      padding: 12px 20px;

      font-size: 14px;
      font-weight: 600;
    }
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 100px 0 0 0;

    .user-info {
      width: 77%;
    }

    .section-products {
        display: flex;
        justify-content: center;
      padding: 10px;

      ul {
        width: 100%;
        height: fit-content;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        li{
           
            width: calc(25% - 10px); 
    margin: 5px; 
        }
      }
    }
  }
`;
