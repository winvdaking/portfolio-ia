import { tool } from "ai";
import { z } from "zod";


export const getVolunteering = tool({
    description:
        "Cet outil donne des informations sur les expériences de bénévolat de Dorian LOPEZ.",
    parameters: z.object({}),
    execute: async () => {
        return `Je suis également actif dans des communautés en ligne :

- **Modérateur pour Gentle Mates** (Mars 2024 - Présent) : Modération active de la communauté Discord (gestion des échanges, travail d'équipe).
- **Secrétaire et Tech Lead pour BOREAL** (Août 2022 - Présent) : Gestion de l'infrastructure Discord et des outils internes (site, bots...).

Vous pouvez trouver les liens vers ces communautés dans la section 'Volunteering' de mon portfolio.
    `;
    },
}); 