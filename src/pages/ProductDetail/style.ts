import styled from "styled-components";
import { mainTheme } from "../../styles/theme";
import { backgroundColor } from "../../components/Header/style";

export const StyledProductDetail = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 90%;

  .section-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* background-color: ${mainTheme.colors.brand1}; */

    width: 100%;
    height: 350px;

    img {
      width: 90%;
      height: 100%;

      border-radius: ${mainTheme.radius.default};

      object-fit: contain;
    }
  }

  .car-information {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    height: 300px;

    gap: 8px;
    padding: 10px 0 10px 30px;

    background-color: ${mainTheme.colors.gray10};

    border-radius: ${mainTheme.radius.default};

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100px;
      height: 38px;

      padding: 12px 20px;

      background-color: ${mainTheme.colors.brand1};
      color: ${mainTheme.colors.white};

      border-radius: ${mainTheme.radius.default};

      font-size: 14px;
      font-weight: 600;
    }

    h2 {
      font-size: 20px;
    }

    p {
      font-weight: 500;
      font-family: "Lexend", sans-serif;
    }

    div:first-of-type {
      display: flex;
      gap: 15px;
    }

    div:nth-of-type(2) {
      display: flex;
      gap: 8px;
      span {
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
  .description {
    display: flex;
    flex-direction: column;

    height: 300px;

    gap: 8px;
    padding: 36px 28px;

    background-color: ${mainTheme.colors.gray10};

    border-radius: ${mainTheme.radius.default};

    h2 {
      font-size: 20px;
    }

    p {
      font-weight: 400;
      color: ${mainTheme.colors.gray2};
      font-size: 16px;
      line-height: 28px;

      overflow-y: auto;
    }
  }

  .photos {
    display: flex;
    flex-direction: column;

    height: 300px;
    max-height: 300px;

    overflow-y: auto;

    gap: 15px;
    padding: 26px 28px;

    background-color: ${mainTheme.colors.gray10};

    border-radius: ${mainTheme.radius.default};

    h2 {
      font-size: 20px;
    }

    img {
      width: 90px;
      height: 90px;

      object-fit: contain;

      border-radius: ${mainTheme.radius.default};
    }
  }

  .userProfile {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 300px;
    max-height: 500px;

    overflow-y: auto;

    gap: 15px;
    padding: 26px 28px;

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
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 206px;
      height: 48px;

      padding: 12px 28px;

      color: ${mainTheme.colors.white};
      background-color: ${mainTheme.colors.gray0};

      font-size: 16px;
      font-weight: 600;

      border-radius: ${mainTheme.radius.default};
    }
  }

  .comments {
    display: flex;
    flex-direction: column;

    min-height: 300px;
    max-height: 800px;
    overflow-y: auto;

    gap: 15px;
    padding: 36px 28px;

    background-color: ${mainTheme.colors.gray10};

    border-radius: ${mainTheme.radius.default};

    ul {
      display: flex;
      flex-direction: column;
      position: relative;
      gap: 50px;
    }

    li {
      display: flex;
      flex-direction: column;

      gap: 10px;
    }

    div {
      display: flex;
      align-items: center;

      gap: 8px;

      h3 {
        font-size: 14px;
        font-weight: 500;
      }
    }

    p {
      font-size: 14px;
      font-weight: 400;

      color: ${mainTheme.colors.gray2};
    }

    span {
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

    h2 {
      font-size: 20px;
    }

    .comment-notFound {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: black;

      padding: 30% 0;
    }
  }
  .comment-box {
    display: flex;
    flex-direction: column;

    min-height: 300px;
    max-height: 800px;
    overflow-y: auto;

    gap: 15px;
    padding: 36px 28px;

    background-color: ${mainTheme.colors.gray10};

    border-radius: ${mainTheme.radius.default};

    textarea {
      height: 130px;
      border: 1px solid ${mainTheme.colors.gray7};

      outline: none;
      resize: none;

      padding: 15px 15px;

      font-size: 16px;
      font-weight: 400;

      color: ${mainTheme.colors.gray3};
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100px;
      height: 38px;

      padding: 12px 20px;

      background-color: ${mainTheme.colors.brand1};
      color: ${mainTheme.colors.white};

      border-radius: ${mainTheme.radius.default};

      font-size: 14px;
      font-weight: 600;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 24px;
      width: fit-content;
      max-width: fit-content;

      font-size: 12px;
      font-weight: 500;

      background-color: ${mainTheme.colors.gray7};
      color: ${mainTheme.colors.gray3};

      padding: 0 12px;

      border-radius: 24px;
    }

    div:first-of-type {
      display: flex;
      align-items: center;

      gap: 8px;

      h3 {
        font-size: 14px;
        font-weight: 500;
      }

      span {
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
    div:nth-of-type(2) {
      display: flex;
      gap: 10px;
    }
  }
`;
