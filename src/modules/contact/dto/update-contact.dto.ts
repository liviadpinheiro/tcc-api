import { z } from 'zod';
import { createContactSchema } from './create-contact.dto';

export const updateContactSchema = createContactSchema.partial();

export type UpdateContactDTO = z.infer<typeof updateContactSchema>;
