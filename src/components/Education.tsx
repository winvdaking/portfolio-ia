'use client';

import { motion } from 'framer-motion';
import { School } from 'lucide-react';
import Link from 'next/link';

const education = [
    {
        institution: 'CESI, Nancy',
        degree: 'MAALSI',
        date: 'Octobre 2023 - Octobre 2025',
        level: 'Bac+5',
        link: 'https://www.cesi.fr/formation/manager-en-architecture-et-applications-logicielles-des-si-en-alternance-2371646/',
    },
    {
        institution: 'IUT Nancy Charlemagne, Nancy',
        degree: 'LP CIASIE',
        date: 'Septembre 2022 - Septembre 2023',
        level: 'Bac+3',
        link: 'https://iut-charlemagne.univ-lorraine.fr/informatique/lp-informatique-ciasie/',
    },
    {
        institution: 'Lycée Jean-Mermoz, Montpellier',
        degree: 'BTS SIO SLAM',
        date: 'Septembre 2020 - Septembre 2022',
        level: 'Bac+2',
        link: 'https://jean-mermoz-montpellier.mon-ent-occitanie.fr/formations-post-bac/bts/bts-sio-services-informatiques-aux-organisations-1743.htm',
    },
];

const Education = () => {
    return (
        <div className="mx-auto w-full max-w-4xl py-8 font-sans">
            <h2 className="text-center text-3xl font-bold text-foreground mb-8">Formation</h2>
            <div className="space-y-8">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-accent p-6 rounded-lg shadow-md"
                    >
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <School className="h-8 w-8 text-primary" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold text-foreground">{edu.degree} - {edu.level}</h3>
                                <p className="text-md text-muted-foreground">{edu.institution}</p>
                                <p className="text-sm text-muted-foreground mt-1">{edu.date}</p>
                                <Link href={edu.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline mt-2 inline-block">
                                    Voir la formation
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education; 