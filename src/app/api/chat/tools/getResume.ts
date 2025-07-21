import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'Cet outil affiche le CV de Dorian LOPEZ.',
  parameters: z.object({}),
  execute: async () => {
    return "Vous pouvez télécharger mon CV en cliquant sur le lien juste au-dessus.";
  },
});
