import { z } from "zod";

export const addressSchema = z.object({
  cep: z.string().min(1, "insira seu cep").max(9),
  state: z.string().max(2).min(1, "informe seu estado"),
  city: z.string().max(28).min(1, "insira sua cidade"),
  street: z.string().max(45).min(1, "insira sua rua"),
  number: z.string(),
  complement: z.string().max(50).optional(),
});

export const registerSchema = z
  .object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.string().email("O e-mail é obrigatório"),
    password: z
      .string()
      .min(8, "Senha mínima de 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(/(?=.*?[!@#$%^&*()_+,])/, "É necessário pelo menos um símbolo"),
    confirm: z.string().min(1, "Confirme sua senha"),
    cpf: z.string().max(11).min(1, "insira seu cpf"),
    phone: z.string().max(11).min(1, "numero obrigatório"),
    date_of_birth: z.string().max(10).min(1, "insira sua data de nascimento"),
    description: z.string().max(300).optional(),
    is_advertiser: z.boolean(),
    address: addressSchema,
  })

  .refine(({ password, confirm }) => confirm === password, {
    message: "A senha e a confirmação devem ser iguais",
    path: ["confirm"],
  });
