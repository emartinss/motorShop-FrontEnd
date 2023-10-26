import { StyledHeaderProfile, StyledNavBar } from "./style";
import logo from "../../assets/Logo.svg";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { IJwtDecoded } from "../../providers/@types";
import { useNavigate } from "react-router-dom";
import navBar from "../../assets/navBar.svg";

const HeaderProfile = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({
    email: "",
    name: "",
    advertiser: 0,
    sub: "",
    iat: 0,
    exp: 0,
  });

  const searchUser = () => {
    const token = localStorage.getItem("@motorShop:token");
    const user: IJwtDecoded | any = jwt_decode(token!);
    setUser(user);
  };
  useEffect(() => {
    searchUser();
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  // const handleClickButton = (id: string) => {
  //   searchUser(id);
  //   setTimeout(() => {
  //     navigate(`/users/${id}`);
  //   }, 150);
  // };
  return (
    <StyledHeaderProfile>
      <div className="container">
        <img className="logo" src={logo} alt="logo do site" />
        <div className="div-profile">
          <span>{user.name ? user.name[0].toUpperCase() : "?"}</span>
          <p>{user.name ? user.name : "usuário"}</p>
        </div>

        {modal && (
          <StyledNavBar>
            <button onClick={() => navigate(`/users/${user.sub}`)}>Editar perfil</button>
            <button>Editar endereço</button>
            {user.advertiser ? <button>Meus anúncios</button> : null}
            <button onClick={() => logout()}>Sair</button>
          </StyledNavBar>
        )}
        <div className="mobile-navbar">
          {modal ? <span className="closeModal" onClick={() => setModal(false)}>X</span> : <img onClick={() => setModal(!modal)} className="navBar" src={navBar} alt="menu de navegação mobile" />}
        </div>
      </div>
    </StyledHeaderProfile>
  );
};
export default HeaderProfile;
