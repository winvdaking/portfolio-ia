import { tool } from 'ai';
import { z } from 'zod';

export const getExperience = tool({
  description:
    "Donne un résumé des expériences professionnelles de Dorian LOPEZ.",
  parameters: z.object({}).nullable().transform((v) => v ?? {}),
  execute: async (_args = {}) => {
    return `Voici un résumé de mes expériences professionnelles :\n\n- **Développeur FullStack et Apprenti Chef de projet** chez ENSIO (Octobre 2023 - Présent) :\n  - Conduite de projets web : recueil des besoins, développements et planification.\n  - Participation active à la conception et à l'évolution des outils internes.\n\n- **Développeur FullStack** chez ENSIO (Septembre 2022 - Octobre 2023) :\n  - Développement d'applications web en Laravel et Blade avec Bootstrap et TailwindCSS.\n  - Intégration d'interfaces responsive, gestion de base de données MySQL, création d'API REST et déploiement en intégration avec Azure.\n\nVous pouvez trouver plus de détails dans la section 'Expériences' de mon portfolio.\n    `;
  },
});
