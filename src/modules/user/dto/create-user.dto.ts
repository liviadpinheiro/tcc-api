import { z } from 'zod';

export const createUserSchema = z.object({
  fullName: z.string({
    required_error: 'fullName is required',
    invalid_type_error: 'fullName must be a string',
  }),
  cpf: z
    .string({
      required_error: 'cpf is required',
      invalid_type_error: 'cpf must be a string',
    })
    .length(14, { message: 'Must be exactly 14 characters long' }),
  password: z
    .string({
      required_error: 'password is required',
      invalid_type_error: 'password must be a string',
    })
    .min(8, { message: 'Must be 5 or more characters long' }),
  email: z
    .string({
      required_error: 'email is required',
      invalid_type_error: 'email must be a string',
    })
    .email({ message: 'Invalid email address' }),
  birthdate: z.string({
    required_error: 'birthdate is required',
    invalid_type_error: 'birthdate must be a string',
  }),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;
