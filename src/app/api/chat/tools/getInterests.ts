import { tool } from "ai";
import { z } from "zod";


export const getInterests = tool({
    description:
        "Cet outil donne des informations sur les centres d'intérêt de Dorian LOPEZ (jeux vidéos et musique).",
    parameters: z.object({}),
    execute: async () => {
        return "Mes principaux centres d'intérêt sont les jeux vidéos (VALORANT, Age of Empire, Esport) et la musique (Hardstyle, Rap, Lofi, Rock).";
    },
}); 