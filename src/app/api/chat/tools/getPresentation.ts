import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'Cet outil retourne une présentation personnelle concise de Dorian LOPEZ. Il est utilisé pour répondre à la question "Qui es-tu ?" ou "Parle-moi de toi".',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "Je suis Dorian LOPEZ, un développeur FullStack et apprenti chef de projet. Passionné, j'allie expertise technique et compétences en gestion de projet. Mon profil hybride me permet de concevoir des solutions web adaptées. Curieux, rigoureux et orienté résultats, je m'investis dans la transformation digitale en combinant innovation, coordination d'équipe et vision produit.",
    };
  },
});
