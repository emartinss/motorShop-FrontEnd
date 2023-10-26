export interface IAddress {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string | null;
}
