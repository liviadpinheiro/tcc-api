import { z } from 'zod';
import { createNoteSchema } from './create-note.dto';

export const updateNoteSchema = createNoteSchema.partial();

export type UpdateNoteDTO = z.infer<typeof updateNoteSchema>;
