import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'Cet outil retourne une présentation personnelle concise de Dorian LOPEZ. Il est utilisé pour répondre à la question "Qui es-tu ?" ou "Parle-moi de toi".',
  parameters: z.object({}).nullable().transform((v) => v ?? {}),
  execute: async (_args = {}) => {
    return {
      presentation:
        "Dorian, c'est moi ! Je suis un jeune développeur full-stack et apprenti chef de projet, passionné par le développement web et la gestion de projet. Qu'est-ce que tu veux savoir sur moi ? Mes projets, mes compétences ou mon expérience ?",
    };
  },
});
