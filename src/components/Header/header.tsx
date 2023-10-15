import { useNavigate } from "react-router-dom";
import { StyledHeader } from "./style";
import logo from "../../assets/Logo.svg";
import { StyledButtonsHeader } from "../../styles/button";

export const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyledHeader>
      <div className="container">
        <img src={logo} alt="logo do site" />
        <div className="div-buttons">
          <StyledButtonsHeader name="login" color="brand1">
            Fazer Login
          </StyledButtonsHeader>
          <StyledButtonsHeader name="register" color="gray0">
            Cadastrar
          </StyledButtonsHeader>
        </div>
      </div>
    </StyledHeader>
  );
};
