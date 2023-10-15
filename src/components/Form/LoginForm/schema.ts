import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().nonempty("E-mail é obrigatório").email("Forneça um email válido"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export type TLoginFormValues = z.infer<typeof loginFormSchema>;
