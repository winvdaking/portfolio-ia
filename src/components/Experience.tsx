'use client';

import { motion } from 'framer-motion';
import { BriefcaseBusiness } from 'lucide-react';

const experiences = [
    {
        company: 'ENSIO',
        title: 'Développeur FullStack et Apprenti Chef de projet',
        date: 'Octobre 2023 - Présent',
        location: 'Fléville-devant-Nancy',
        description: [
            "Conduite de projets web : recueil des besoins, développements et planification.",
            "Participation active à la conception et à l'évolution des outils internes."
        ],
    },
    {
        company: 'ENSIO',
        title: 'Développeur FullStack',
        date: 'Septembre 2022 - Octobre 2023',
        location: 'Fléville-devant-Nancy',
        description: [
            "Développement d'applications web en Laravel et Blade avec Bootstrap et TailwindCSS.",
            "Intégration d'interfaces responsive, gestion de base de données MySQL, création d'API REST et déploiement en intégration avec Azure."
        ],
    },
];

const Experience = () => {
    return (
        <div className="mx-auto w-full max-w-4xl py-8 font-sans">
            <h2 className="text-center text-3xl font-bold text-foreground mb-8">Expériences Professionnelles</h2>
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-accent p-6 rounded-lg shadow-md"
                    >
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <BriefcaseBusiness className="h-8 w-8 text-primary" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                                <p className="text-md text-muted-foreground">{exp.company} • {exp.location}</p>
                                <p className="text-sm text-muted-foreground mt-1">{exp.date}</p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-foreground">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience; 