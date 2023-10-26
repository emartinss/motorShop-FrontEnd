import { useNavigate } from "react-router-dom";
import { StyledHeaderRegister } from "./style";
import logo from "../../assets/Logo.svg";
import { StyledButtonsHeader } from "../../styles/button";
import navBar from "../../assets/navBar.svg";
import { useState } from "react";

export const HeaderRegister = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyledHeaderRegister>
      <div className="container">
        <img src={logo} alt="logo do site" />
        <div className="div-buttons">
          <StyledButtonsHeader onClick={() => navigate("/login")} name="login" color="brand1">
            Fazer Login
          </StyledButtonsHeader>
          <StyledButtonsHeader onClick={() => navigate("/register")} name="register" color="gray0">
            Cadastrar
          </StyledButtonsHeader>
        </div>
        <div className="mobile-navbar">
          <img src={navBar} alt="menu de navegação mobile" />
        </div>
      </div>
    </StyledHeaderRegister>
  );
};
