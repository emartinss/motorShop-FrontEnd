import { useContext, useState } from "react";
import { AdsContext } from "../../providers/adsContext";
import { HeaderRegister } from "../../components/Header/headerRegister";
import { json, useNavigate } from "react-router-dom";
import home_svg from "../../assets/Photo.svg";
import { StyledHomePage } from "./style";
import { Footer } from "../../components/Footer/footer";

const HomePage = () => {
  const { getAds, productDetail, ads } = useContext(AdsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const perPage = 12;
  const start = (currentPage - 1) * perPage;
  const end = currentPage * perPage;
  const products = ads.slice(start, end);

  const totalPages = () => {
    return Math.ceil(ads.length / perPage);
  };

  const nextPage = () => {
    if (currentPage * perPage < ads.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
            {products
              ? products.map(({ id, brand, model, description, mileage, year, price, image, user }) => {
                  return (
                    <li onClick={(e) => handleProductClick(e.currentTarget.id)} id={String(id)} key={id}>
                      {image.map((item) => (
                        <img src={item.image_url} alt="Imagem do anuncio" key={item.id} />
                      ))}
                      <div className="div-carName">
                        <p>{brand.charAt(0).toUpperCase() + brand.slice(1)}</p>
                        <p>-</p>
                        <p>{model.charAt(0).toUpperCase() + model.slice(1)}</p>
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
        <div className="pagination">
          <span>
            {currentPage} de {totalPages()}
          </span>
          {currentPage != 1 ? <button onClick={previousPage}>pagina anterior</button> : null}

          {currentPage != totalPages() ? <button onClick={nextPage}>proxima página</button> : null}
        </div>
        <Footer />
      </StyledHomePage>
    </>
  );
};
export default HomePage;
