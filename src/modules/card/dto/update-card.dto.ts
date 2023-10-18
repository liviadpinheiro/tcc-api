import { z } from 'zod';
import { createCardSchema } from './create-card.dto';

export const updateCardSchema = createCardSchema.partial();

export type UpdateCardDTO = z.infer<typeof updateCardSchema>;
