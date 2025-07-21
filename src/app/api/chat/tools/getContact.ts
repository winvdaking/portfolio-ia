import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'Cet outil affiche les informations de contact de Dorian LOPEZ.',
  parameters: z.object({}).nullable().transform((v) => v ?? {}),
  execute: async (_args = {}) => {
    return "Vous pouvez trouver mes informations de contact (email, LinkedIn, Github, etc.) dans la section 'Contact' juste en dessous. N'hésitez pas à me contacter !";
  },
});
