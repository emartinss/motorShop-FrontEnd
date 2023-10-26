import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const backgroundColor = getRandomColor();

export const StyledHeaderProfile = styled.header`
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

    .logo {
      width: 9.5625rem;
      height: 1.6875rem;
    }

    .div-profile {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 100%;
      width: 200px;

      border-left: 2px solid ${mainTheme.colors.gray6};
      gap: 10px;

      p {
        font-size: 16px;
        font-weight: 500;
        line-height: 28px;
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
    }
    .mobile-navbar {
      display: none;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    padding: 0 15px;

    .container {
      border: none;

      .mobile-navbar {
        display: flex;

        .closeModal {
          background-color: ${mainTheme.colors.gray10};
          color: ${mainTheme.colors.gray3};

          padding: 3px 10px;

          border-radius: 5px;

          font-size: 18px;
          font-weight: 600;
        }

        .navBar {
          display: flex;
          width: 32px;
          height: 32px;
        }
      }
      .div-profile {
        display: none;
      }
    }
  }
`;

export const StyledHeaderRegister = styled.header`
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

    .div-buttons {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 100%;

      border-left: 2px solid ${mainTheme.colors.gray6};
      gap: 10px;
    }
    .mobile-navbar {
      display: none;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    padding: 0 15px;

    .container {
      border: none;
      .mobile-navbar {
        display: flex;

        .closeModal {
          background-color: ${mainTheme.colors.gray10};
          color: ${mainTheme.colors.gray3};

          padding: 3px 10px;

          border-radius: 5px;

          font-size: 18px;
          font-weight: 600;
        }

        img {
          display: flex;
          width: 32px;
          height: 32px;
        }
      }
      .div-buttons {
        display: none;
      }
    }
  }
`;

export const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  transition: all 0.7s;
  position: fixed;
  top: 70px;
  right: 20px;
  z-index: 100;

  background-color: ${mainTheme.colors.gray10};
  padding: 8px;
  border-radius: ${mainTheme.radius.default};
  width: 200px;

  button {
    font-size: 16px;

    width: 90%;
    text-align: left;
    padding: 8px;
    background-color: ${mainTheme.colors.gray10};
    color: ${mainTheme.colors.gray2};
    line-height: 28px;
  }

  .logout {
    text-align: center;
    width: 100%;
  }

  button:hover {
    color: var(--grey-10);
    background-color: var(--grey-3);
  }
`;
