interface IInput {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  err: string;
  register: object;
}

const Input = ({ id, type, placeholder, label, err, register }: IInput) => (
  <div>
    <input type={type} id={id} placeholder={placeholder} {...register} />
    <label htmlFor={id}>{label}</label>
    {err ? <p>{err}</p> : null}
  </div>
);

export default Input;
