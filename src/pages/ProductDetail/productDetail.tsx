import { useContext, useEffect, useState } from "react";
import { AdsContext } from "../../providers/adsContext";
import { StyledContainer, StyledProductDetail } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import HeaderProfile from "../../components/Header/headerProfile";
import { UserContext } from "../../providers/userContext";

const ProductDetail = () => {
  const { adsById, currentId, setCurrentId, setAdsById } = useContext(AdsContext);
  const { user, searchUser } = useContext(UserContext);
  const { id: urlId } = useParams();
  const [valueInput, setValueInput] = useState("");
  const navigate = useNavigate();

  const loadProductDetails = async (id: any) => {
    try {
      const response = await api.get(`announcements/${id}`);
      setAdsById(response.data);
      setCurrentId(id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (urlId && urlId !== currentId) {
      loadProductDetails(urlId);
    }
  }, [urlId, currentId]);

  const handleClickButton = (id: string) => {
    searchUser(id);
    setTimeout(() => {
      navigate(`/users/${id}`);
    }, 150);
  };

  const handleCommentButtonClick = () => {
    const textarea = document.querySelector("textarea");
    if (textarea) {
      const commentText = textarea.value;
      setValueInput(commentText);
    } else {
      console.log("Nenhum elemento <textarea> encontrado na página.");
    }
  };

  return (
    <StyledProductDetail>
      <HeaderProfile />
      <StyledContainer>
        <section className="section-image">
          {
            adsById.image
              .map((image) => <img key={image.id} src={image.image_url} alt="imagem do anuncio" />)
              .values()
              .next().value
          }
        </section>

        <section className="car-information">
          <div>
            <h2>{adsById.brand}</h2>
            <h2>{adsById.model}</h2>
          </div>

          <div>
            <span>{adsById.year}</span>
            <span>{adsById.mileage} KM</span>
          </div>
          <p>R$ {adsById.price.toLocaleString()},00</p>
          <button>Comprar</button>
        </section>

        <section className="description">
          <h2>Descrição</h2>
          <p>{adsById ? adsById.description : "Esse anúncio não possui descrição"}</p>
        </section>

        <section className="photos">
          <h2>Fotos</h2>
          <ul>
            {adsById.image.map((image) => (
              <li key={image.id}>
                <img src={image.image_url} alt="fotos do anúncio" />
              </li>
            ))}
          </ul>
        </section>

        <section className="userProfile">
          <span>{adsById.user.name[0]}</span>
          <h3>{adsById.user.name}</h3>
          <p>{adsById.user.description}</p>
          <button id={String(adsById.user.id)} onClick={(e) => handleClickButton(e.currentTarget.id)}>
            Ver todos os anúncios
          </button>
        </section>

        <section className="comments">
          <h2>Comentários</h2>
          <ul>
            {adsById.comment?.length ? (
              adsById.comment?.map((comment) => (
                <li key={comment.id}>
                  <div>
                    <span>{comment.user.name[0]}</span>
                    <h3>{comment.user.name}</h3>
                  </div>
                  <p>{comment.comment}</p>
                </li>
              ))
            ) : (
              <p className="comment-notFound">Seja o primeiro a comentar...</p>
            )}
          </ul>
        </section>

        <section className="comment-box">
          <div>
            <span>{adsById.user.name[0]}</span>
            <h3>{adsById.user.name}</h3>
          </div>

          <textarea
            value={valueInput}
            onClick={() => setValueInput("")}
            onChange={(e) => setValueInput(e.target.value)}
            name="comment-box"
            placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
          ></textarea>
          <button onClick={handleCommentButtonClick}>Comentar</button>
          <div>
            <span onClick={() => setValueInput("Gostei muito")}>Gostei muito!</span>
            <span onClick={() => setValueInput("Incrível")}>Incrível</span>
          </div>
          <span onClick={() => setValueInput("Recomendarei para meus amigos!")}> Recomendarei para meus amigos!</span>
        </section>
      </StyledContainer>
    </StyledProductDetail>
  );
};

export default ProductDetail;
