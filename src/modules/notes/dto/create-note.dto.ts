import { z } from 'zod';

export const createNoteSchema = z.object({
  meaning: z.string(),
  keywords: z.string(),
  elements_meaning: z.string(),
  specific_meaning: z.string(),
  related_theme: z.string(),
  additional_observation: z.string(),
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
