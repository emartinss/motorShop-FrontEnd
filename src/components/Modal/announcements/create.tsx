import { useContext } from "react";
import { StyleButtonForm } from "../../../styles/button";
import Input from "../../Form/Input/input";
import { AdsContext } from "../../../providers/adsContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICreateAds } from "../../../interfaces/ads/ads.interfaces";
import { StyledModalAds } from "./style";

export const CreateAnnouncementModal = ({ closeModal }: any) => {
  const { createAnnouncement } = useContext(AdsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateAds>();

  const submit: SubmitHandler<ICreateAds> = (formData) => {
    formData.mileage = Number(formData.mileage);
    formData.fipe = Number(formData.fipe);
    formData.price = Number(formData.price);
    createAnnouncement(formData);
  };

  return (
    <StyledModalAds className="modal-createAds">
      <div className="heading">
        <h3>criar anúncio</h3>
        <span onClick={closeModal}>X</span>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="vehicle-information">
          <p>informações do veículo</p>
          <Input id="brand" type="text" placeholder="Chevrolet" label="Marca" err="" register={register("brand")} />
          <Input id="model" type="text" placeholder="Camaro ss 6.2 v8 16v" label="Modelo" err="" register={register("model")} />
          <div>
            <Input id="year" type="text" placeholder="2018" label="Ano" err="" register={register("year")} />
            <Input id="fuel" type="text" placeholder="Gasolina / Etanol" label="Combustível" err="" register={register("fuel")} />
          </div>
          <div>
            <Input id="mileage" type="text" placeholder="30.000" label="Quilometragem" err="" register={register("mileage")} />
            <Input id="color" type="text" placeholder="Branco" label="Cor" err="" register={register("color")} />
          </div>
          <div>
            <Input id="fipe" type="text" placeholder="48.000,00" label="Preço tabela FIPE" err="" register={register("fipe")} />
            <Input id="price" type="text" placeholder="50.000,00" label="Preço" err="" register={register("price")} />
          </div>
          <Input
            id="description"
            type="text"
            placeholder="Digite uma descrição"
            label="Descrição"
            err=""
            register={register("description")}
          />
          <Input id="image" type="text" placeholder="http://image.com" label="Imagem de capa" err="" register={register("image_url")} />
          <div className="div-buttons">

            <StyleButtonForm onClick={closeModal} color="gray2" className="gray6">
              Cancelar
            </StyleButtonForm>

            <StyleButtonForm color="gray10" className="brand1">
              Criar anúncio
            </StyleButtonForm>
          </div>
        </div>
      </form>
    </StyledModalAds>
  );
};
