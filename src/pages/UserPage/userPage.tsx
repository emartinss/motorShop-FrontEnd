import { useNavigate, useParams } from "react-router-dom";
import HeaderProfile from "../../components/Header/headerProfile";
import { useContext, useEffect, useState } from "react";
import { AdsContext } from "../../providers/adsContext";
import jwt_decode from "jwt-decode";
import { IJwtDecoded } from "../../providers/@types";
import { Footer } from "../../components/Footer/footer";

const UserPage = () => {
  const { id: urlId } = useParams();
  const userData: any = localStorage.getItem(`@motorShop:userData_${urlId}`);
  const userDataObject = JSON.parse(userData);
  const { getUserAds, userAds, productDetail } = useContext(AdsContext);
  const navigate = useNavigate();
  const [isOwner, setIsOwner] = useState(false);
  const token = localStorage.getItem("@motorShop:token");
  const userToken: IJwtDecoded | any = jwt_decode(token!);

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

  return (
    <div>
      <HeaderProfile />
      <span>{userData ? userDataObject.name[0].toUpperCase() : "?"}</span>
      <p>
        {userData ? userDataObject.name : null} <span>{userDataObject.is_advertiser ? "Anunciante" : "Comprador"}</span>
      </p>
      <p>{userData ? userDataObject.description : null}</p>
      {isOwner && <button>Criar anúncio</button>}

      {userAds ? (
        <>
          <h2>Anúncios</h2>
          <div>
            <ul>
              {userAds.map((item: any) => (
                <li onClick={(e) => handleProductClick(e.currentTarget.id)} id={item.id} key={item.id}>
                  <div>
                    {item.image.map((image: any) => (
                      <img src={image.image_url} alt="imagens do anuncio" key={image.id} />
                    ))}
                    <p>{item.brand}</p>
                    <p>{item.model}</p>
                  </div>
                  <p>{item.description}</p>
                  <div>
                    <p>{item.mileage}</p>
                    <p>{item.year}</p>
                    <div>
                      <p>{item.price}</p>
                    </div>
                    {isOwner && (
                      <div>
                        <button>Editar</button>
                        <button>Ver detalhes</button>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>Nenhum anúncio encontrado</p>
      )}
      <Footer />
    </div>
  );
};

export default UserPage;
