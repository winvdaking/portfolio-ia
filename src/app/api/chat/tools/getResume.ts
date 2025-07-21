import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'Cet outil affiche le CV de Dorian LOPEZ.',
  parameters: z.object({}).nullable().transform((v) => v ?? {}),
  execute: async (_args = {}) => {
    return "Vous pouvez télécharger mon CV en cliquant sur le lien juste au-dessus.";
  },
});
