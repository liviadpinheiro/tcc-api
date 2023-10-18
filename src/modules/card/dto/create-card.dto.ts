import { z } from 'zod';

export const createCardSchema = z.object({
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be a string',
  }),
  number: z.coerce
    .number({
      required_error: 'number is required',
      invalid_type_error: 'number must be a number',
    })
    .int({
      message: 'The provided number must be an integer',
    }),
  imageUrl: z
    .string({
      required_error: 'description is required',
      invalid_type_error: 'description must be a string',
    })
    .url({ message: 'The provided string is not a valid URL' }),
  deck_id: z
    .string({
      required_error: 'description is required',
      invalid_type_error: 'description must be a string',
    })
    .uuid({ message: 'The provided string is not a valid UUID' }),
});

export type CreateCardDTO = z.infer<typeof createCardSchema>;
