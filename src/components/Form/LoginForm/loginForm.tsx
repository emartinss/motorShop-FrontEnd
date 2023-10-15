import { userContext } from "../../../providers/userContext";
import { StyleButtonForm } from "../../../styles/button";
import { Header } from "../../Header/header";
import { StyledContainer, StyledForm } from "./style";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginFormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input/input";

export interface TLoginFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  //   const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(userContext);

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
      <Header />
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
            <StyleButtonForm name="register" color="gray0" className="white">
              Cadastrar
            </StyleButtonForm>
          </div>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default LoginForm;
