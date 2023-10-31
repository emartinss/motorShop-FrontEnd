import { StyledInput } from "./style";

interface IInput {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  err: string;
  register: object;
}

const Input = ({ id, type, placeholder, label, err, register }: IInput) => (
  <StyledInput>
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} placeholder={placeholder} {...register} />
    {err ? <p>{err}</p> : null}
  </StyledInput>
);

export default Input;
