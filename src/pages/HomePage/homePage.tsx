import { useContext } from "react";
import { AdsContext } from "../../providers/adsContext";
import { HeaderRegister } from "../../components/Header/headerRegister";
import { json, useNavigate } from "react-router-dom";
import home_svg from "../../assets/Photo.svg";
import { StyledHomePage } from "./style";
import { Footer } from "../../components/Footer/footer";

const HomePage = () => {
  const { getAds, productDetail, ads } = useContext(AdsContext);
  const navigate = useNavigate();

  const handleProductClick = (id: string) => {
    navigate(`/product/${id}`);
    productDetail(id);
  };
  return (
    <>
      <HeaderRegister />
      <StyledHomePage>
        <div className="div-banner">
          <img src={home_svg} alt="imagem principal home" />
          <h1>Motors Shop</h1>
          <h2>A melhor plataforma de anúncios de carro do país</h2>
        </div>

        <div className="div-products">
          <ul>
            {ads
              ? ads.map(({ id, brand, model, description, mileage, year, price, image, user }) => {
                  return (
                    <li onClick={(e) => handleProductClick(e.currentTarget.id)} id={String(id)} key={id}>
                      {image.map((item) => (
                        <img src={item.image_url} alt="Imagem do anuncio" key={item.id} />
                      ))}
                      <div className="div-carName">
                        <p>{brand}</p>
                        <p>-</p>
                        <p>{model}</p>
                      </div>
                      <p className="description">{description}</p>
                      <div className="users">
                        <span className="userAvatar">{user.name[0]}</span>
                        <span className="userName">{user.name}</span>
                      </div>

                      <div className="div-informations">
                        <div>
                          <p>{mileage} KM</p>
                          <p>{year}</p>
                        </div>

                        <span>R$ {price.toLocaleString()},00</span>
                      </div>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      <Footer/>
      </StyledHomePage>
    </>
  );
};
export default HomePage;
