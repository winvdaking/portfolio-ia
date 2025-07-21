import { tool } from 'ai';
import { z } from 'zod';

export const getExperience = tool({
  description:
    "Donne un résumé des expériences professionnelles de Dorian LOPEZ.",
  parameters: z.object({}),
  execute: async () => {
    return `Voici un résumé de mes expériences professionnelles :

- **Développeur FullStack et Apprenti Chef de projet** chez ENSIO (Octobre 2023 - Présent) :
  - Conduite de projets web : recueil des besoins, développements et planification.
  - Participation active à la conception et à l'évolution des outils internes.

- **Développeur FullStack** chez ENSIO (Septembre 2022 - Octobre 2023) :
  - Développement d'applications web en Laravel et Blade avec Bootstrap et TailwindCSS.
  - Intégration d'interfaces responsive, gestion de base de données MySQL, création d'API REST et déploiement en intégration avec Azure.

Vous pouvez trouver plus de détails dans la section 'Expériences' de mon portfolio.
    `;
  },
});
