import { useNavigate, useParams } from "react-router-dom";
import HeaderProfile from "../../components/Header/headerProfile";
import { useContext, useEffect, useState } from "react";
import { AdsContext } from "../../providers/adsContext";
import jwt_decode from "jwt-decode";
import { IJwtDecoded } from "../../providers/@types";
import { Footer } from "../../components/Footer/footer";
import { StyledContainer, StyledUserPage } from "./style";
import { CreateAnnouncementModal } from "../../components/Modal/announcements/create";
import { ModalBackdrop } from "../../components/Modal/style";
import { EditAnnouncementModal } from "../../components/Modal/announcements/edit";

const UserPage = () => {
  const { getUserAds, userAds, productDetail, setIdAds } = useContext(AdsContext);
  const [isOwner, setIsOwner] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalCreateAds, setModalCreateAds] = useState(false);
  const [modalEditAds, setModalEditAds] = useState(false);
  const { id: urlId } = useParams();
  const navigate = useNavigate();

  const token = localStorage.getItem("@motorShop:token");
  const userToken: IJwtDecoded | any = jwt_decode(token!);
  const userData: any = localStorage.getItem(`@motorShop:userData_${urlId}`);
  const userDataObject = JSON.parse(userData);

  const perPage = 12;
  const start = (currentPage - 1) * perPage;
  const end = currentPage * perPage;
  const products = userAds.slice(start, end);

  const totalPages = () => {
    return Math.ceil(userAds.length / perPage);
  };

  const nextPage = () => {
    if (currentPage * perPage < userAds.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    if (userToken.sub == userDataObject.id) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
    getUserAds(userDataObject.id);
  }, []);

  const handleProductClick = (id: string) => {
    navigate(`/product/${id}`);
    productDetail(id);
  };

  const handleEditClick = (id: string) => {
    openModalEditAnnouncement();
    setIdAds(parseInt(id));
  };

  const openModalCreateAnnouncement = () => {
    setModalCreateAds(true);
  };
  const closeModalCreateAnnouncement = () => {
    setModalCreateAds(false);
  };
  const openModalEditAnnouncement = () => {
    setModalEditAds(true);
  };
  const closeModalEditAnnouncement = () => {
    setModalEditAds(false);
  };

  return (
    <StyledUserPage>
      <HeaderProfile />
      <StyledContainer>
        <section className="user-info">
          <span>{userData ? userDataObject.name[0].toUpperCase() : "?"}</span>
          <div>
            <h3>{userData ? userDataObject.name : null}</h3>
            <small>{userDataObject.is_advertiser ? "Anunciante" : "Comprador"}</small>
          </div>
          <p>{userData ? userDataObject.description : null}</p>
          {isOwner && <button onClick={openModalCreateAnnouncement}>Criar anúncio</button>}
        </section>
        {modalCreateAds && (
          <>
            <ModalBackdrop />
            <CreateAnnouncementModal closeModal={closeModalCreateAnnouncement} />
          </>
        )}

        <section className="section-products">
          {products ? (
            <>
              <div>
                <ul>
                  {products.map((item: any) => (
                    <li key={item.id}>
                      {modalEditAds && (
                        <>
                          <ModalBackdrop />
                          <EditAnnouncementModal closeModal={closeModalEditAnnouncement} />
                        </>
                      )}
                      {item.image.map((image: any) => (
                        <img
                          onClick={(e) => handleProductClick(e.currentTarget.id)}
                          id={item.id}
                          src={image.image_url}
                          alt="imagens do anuncio"
                          key={image.id}
                        />
                      ))}
                      <div className="div-carName">
                        <p>{item.brand.charAt(0).toUpperCase() + item.brand.slice(1)}</p>
                        <p>-</p>
                        <p>{item.model.charAt(0).toUpperCase() + item.model.slice(1)}</p>
                      </div>

                      <p className="description">{item.description}</p>

                      <div className="div-informations">
                        <div>
                          <p>{item.mileage} KM</p>
                          <p>{item.year}</p>
                        </div>
                        <span>R$ {item.price.toLocaleString()},00</span>
                      </div>

                      {isOwner && (
                        <div className="div-owner">
                          <button id={item.id} onClick={(e) => handleEditClick(e.currentTarget.id)}>
                            Editar
                          </button>
                          <button>Ver detalhes</button>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <p>Nenhum anúncio encontrado</p>
          )}
        </section>

        <div className="pagination">
          <span>
            {currentPage} de {totalPages()}
          </span>
          {currentPage != 1 ? <button onClick={previousPage}>pagina anterior</button> : null}

          {currentPage != totalPages() ? <button onClick={nextPage}>proxima página</button> : null}
        </div>
      </StyledContainer>
      <Footer />
    </StyledUserPage>
  );
};

export default UserPage;
