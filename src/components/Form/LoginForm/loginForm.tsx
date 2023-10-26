import { UserContext } from "../../../providers/userContext";
import { StyleButtonForm } from "../../../styles/button";
import { HeaderRegister } from "../../Header/headerRegister";
import { StyledContainer, StyledForm } from "./style";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginFormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input/input";
import { useNavigate } from "react-router-dom";

export interface TLoginFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  //   const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({ resolver: zodResolver(loginFormSchema) });

  const submit: SubmitHandler<TLoginFormValues> = (formData) => {
    userLogin(formData);
  };

  return (
    <>
      <HeaderRegister />
      <StyledContainer>
        <StyledForm onSubmit={handleSubmit(submit)}>
          <h2>Login</h2>
          <Input
            id="email"
            type="email"
            placeholder="Digite seu email"
            label="Email"
            err={errors.email?.message || ""}
            register={register("email")}
          />
          <Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            label="Senha"
            err={errors.password?.message || ""}
            register={register("password")}
          />
          <span>Esqueci minha senha</span>
          <div>
            <StyleButtonForm color="white" className="brand1">
              Entrar
            </StyleButtonForm>
            <span>Ainda não possui conta?</span>
          </div>
        </StyledForm>
        <StyleButtonForm onClick={() => navigate("/register")} name="register" color="gray0" className="white">
          Cadastrar
        </StyleButtonForm>
      </StyledContainer>
    </>
  );
};

export default LoginForm;
