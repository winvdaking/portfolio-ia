import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    'Cet outil affiche une liste des compétences de Dorian LOPEZ.',
  parameters: z.object({}),
  execute: async () => {
    return "Vous pouvez voir toutes mes compétences affichées juste au-dessus.";
  },
});
