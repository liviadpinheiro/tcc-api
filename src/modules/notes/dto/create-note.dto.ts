import { z } from 'zod';

export const createNoteSchema = z.object({
  meaning: z.string().optional(),
  keywords: z.string().optional(),
  elements_meaning: z.string().optional(),
  specific_meaning: z.string().optional(),
  related_theme: z.string().optional(),
  additional_observation: z.string().optional(),
  card_id: z
    .string({
      required_error: 'card_id is required',
      invalid_type_error: 'card_id must be a string',
    })
    .uuid({ message: 'The provided string is not a valid UUID' }),
  user_id: z
    .string({
      required_error: 'user_id is required',
      invalid_type_error: 'user_id must be a string',
    })
    .uuid({ message: 'The provided string is not a valid UUID' }),
});

export type CreateNoteDTO = z.infer<typeof createNoteSchema>;
