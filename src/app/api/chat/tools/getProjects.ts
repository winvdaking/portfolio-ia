
import { tool } from "ai";
import { z } from "zod";


export const getProjects = tool({
  description:
    "Cet outil affiche la liste des projets réalisés par Dorian LOPEZ.",
  parameters: z.object({}).nullable().transform((v) => v ?? {}),
  execute: async (_args = {}) => {
    return "Voici le projet que j'ai réalisé. N'hésitez pas à me poser plus de questions à ce sujet !";
  },
});