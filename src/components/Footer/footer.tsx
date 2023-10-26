import { useState, useEffect } from "react";
import buttonUp from "../../assets/Group 30.svg";
import { StyledFooter } from "./style";
import logoFooter from "../../assets/Motors shop.svg"

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <StyledFooter>
      <img className="logo" src={logoFooter} alt="logo do footer" />
      <small>© 2022 - Todos os direitos reservados.</small>
      <img className="button" onClick={scrollToTop} src={buttonUp} alt="Botão para subir ao topo do site" />
    </StyledFooter>
  );
};
