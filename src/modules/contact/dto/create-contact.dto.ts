import { z } from 'zod';

export const createContactSchema = z.object({
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be a string',
  }),
  message: z.string({
    required_error: 'message is required',
    invalid_type_error: 'message must be a string',
  }),
  email: z
    .string({
      required_error: 'email is required',
      invalid_type_error: 'email must be a string',
    })
    .email({ message: 'Invalid email address' }),
  state: z.string().optional(),
  theme: z.string({
    required_error: 'theme is required',
    invalid_type_error: 'theme must be a string',
  }),
  isValidTestimonial: z
    .boolean({
      invalid_type_error: 'isValidTestimonial must be a boolean',
    })
    .optional(),
});

export type CreateContactDTO = z.infer<typeof createContactSchema>;
