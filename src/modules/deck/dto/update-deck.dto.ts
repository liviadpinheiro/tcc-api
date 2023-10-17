import { z } from 'zod';
import { createDeckSchema } from './create-deck.dto';

export const updateDeckSchema = createDeckSchema.partial();

export type UpdateDeckDTO = z.infer<typeof updateDeckSchema>;
