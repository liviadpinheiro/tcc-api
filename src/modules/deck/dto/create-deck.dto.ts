import { z } from 'zod';

export const createDeckSchema = z.object({
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be a string',
  }),
  description: z.string({
    required_error: 'description is required',
    invalid_type_error: 'description must be a string',
  }),
});

export type CreateDeckDTO = z.infer<typeof createDeckSchema>;
