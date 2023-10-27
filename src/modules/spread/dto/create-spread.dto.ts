import { z } from 'zod';

export const createSpreadSchema = z.object({
  consultantName: z.string({
    required_error: 'consultantName is required',
    invalid_type_error: 'consultantName must be a string',
  }),
  deck: z.string({
    required_error: 'deck is required',
    invalid_type_error: 'deck must be a string',
  }),
  theme: z.string({
    required_error: 'theme is required',
    invalid_type_error: 'theme must be a string',
  }),
  spread: z.string({
    required_error: 'spread is required',
    invalid_type_error: 'spread must be a string',
  }),
  spreadOverview: z.string({
    required_error: 'spread is required',
    invalid_type_error: 'spread must be a string',
  }),
  consultantBirthdate: z.string({
    required_error: 'consultantBirthdate is required',
    invalid_type_error: 'consultantBirthdate must be a string',
  }),
  image: z.any({
    required_error: 'image is required',
  }),
  cards: z.array(
    z.object({
      name: z.string({
        required_error: 'cards name is required',
        invalid_type_error: 'cards name must be a string',
      }),
      position: z.string({
        required_error: 'cards position is required',
        invalid_type_error: 'cards position must be a string',
      }),
      meaning: z.string({
        required_error: 'cards meaning is required',
        invalid_type_error: 'cards meaning must be a string',
      }),
    }),
  ),
});

export type CreateSpreadDTO = z.infer<typeof createSpreadSchema>;
