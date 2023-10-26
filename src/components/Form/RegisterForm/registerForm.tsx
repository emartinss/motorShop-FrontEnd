import { SubmitHandler, useForm } from "react-hook-form";
import { registerSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import Input from "../Input/input";
import { UserContext } from "../../../providers/userContext";
import { StyledForm } from "./style";
import { IRegister } from "../../../interfaces/register/register.interface";
import { StyleButtonForm } from "../../../styles/button";

const RegisterForm = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    // resolver: zodResolver(registerSchema),
    // mode: "onChange",
  });
  const submit: SubmitHandler<IRegister> = (formData) => {
    formData.address.number = Number(formData.address.number);
    registerUser(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <h1>Cadastro</h1>
      <Input
        type="text"
        placeholder="Ex: Samuel Leão"
        label="Nome"
        err={errors.name?.message || ""}
        id="name"
        register={register("name")}
      />
      <Input
        type="text"
        placeholder="Ex: samuel@kenzie.com.br"
        label="Email"
        err={errors.email?.message || ""}
        id="email"
        register={register("email")}
      />
      <Input type="text" placeholder="000000000-00" label="cpf" err={errors.cpf?.message || ""} id="cpf" register={register("cpf")} />

      <Input
        type="number"
        placeholder="(DDD) 90000-0000"
        label="Celular"
        err={errors.phone?.message || ""}
        id="phone"
        register={register("phone")}
      />
      <Input
        type="text"
        placeholder="00/00/00"
        label="Data de nascimento"
        err={errors.date_of_birth?.message || ""}
        id="date_of_birth"
        register={register("date_of_birth")}
      />
      <Input
        type="text"
        placeholder="Digitar a descrição"
        label="Descrição"
        err={errors.description?.message || ""}
        id="description"
        register={register("description")}
      />
      <Input
        type="text"
        placeholder="00000-000"
        label="CEP"
        err={errors.address?.cep?.message || ""}
        id="cep"
        register={register("address.cep")}
      />

      <Input
        type="text"
        placeholder="Digitar Estado"
        label="Estado"
        err={errors.address?.state?.message || ""}
        id="state"
        register={register("address.state")}
      />
      <Input
        type="text"
        placeholder="Digitar cidade"
        label="Cidade"
        err={errors.address?.city?.message || ""}
        id="city"
        register={register("address.city")}
      />
      <Input
        type="text"
        placeholder="Digitar rua"
        label="Rua"
        err={errors.address?.street?.message || ""}
        id="street"
        register={register("address.street")}
      />

      <Input
        type="number"
        placeholder="Digitar número"
        label="Número"
        err={errors.address?.number?.message || ""}
        id="number"
        register={register("address.number")}
      />
      <Input
        type="text"
        placeholder="Ex: apart 307"
        label="Complemento"
        err={errors.address?.complement?.message || ""}
        id="complement"
        register={register("address.complement")}
      />
      <input type="checkbox" {...register("is_advertiser")} />
      <Input
        type="password"
        placeholder="Digitar senha"
        label="senha"
        err={errors.password?.message || ""}
        id="password"
        register={register("password")}
      />
      <Input
        type="password"
        placeholder="Digitar senha"
        label="confirme a senha"
        err={errors.confirm_password?.message || ""}
        id="confirm_password"
        register={register("confirm_password")}
      />
      <StyleButtonForm className="brand1" color="white">
        Finalizar Cadastro
      </StyleButtonForm>
    </StyledForm>
  );
};
export default RegisterForm;
