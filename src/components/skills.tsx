'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Wrench, Cpu, Shield, Users, Languages } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'PHP',
      icon: <Code className="h-5 w-5" />,
      skills: ['Laravel', 'Symfony', 'Slim', 'CakePHP'],
    },
    {
      category: 'JavaScript',
      icon: <Code className="h-5 w-5" />,
      skills: ['ES6', 'VueJS', 'React', 'TypeScript'],
    },
    {
      category: 'HTML/CSS',
      icon: <Code className="h-5 w-5" />,
      skills: ['SCSS', 'TailwindCSS', 'Bootstrap'],
    },
    {
      category: 'Base de données',
      icon: <Database className="h-5 w-5" />,
      skills: ['SQL', 'MySQL', 'NoSQL'],
    },
    {
      category: 'Environnement',
      icon: <Wrench className="h-5 w-5" />,
      skills: ['Composer', 'Node.js', 'Windows', 'Linux'],
    },
    {
      category: 'Outils',
      icon: <Wrench className="h-5 w-5" />,
      skills: ['Git', 'Github', 'Docker', 'Azure', 'Github Actions'],
    },
    {
      category: 'Logiciels',
      icon: <Cpu className="h-5 w-5" />,
      skills: ['VS Code', 'Suite Office 365', 'Suite Google', 'Suite Jetbrains'],
    },
    {
      category: 'IA',
      icon: <Cpu className="h-5 w-5" />,
      skills: ['ChatGPT', 'Claude', 'Copilot'],
    },
    {
      category: 'Langues',
      icon: <Languages className="h-5 w-5" />,
      skills: ['Français (maternelle)', 'Anglais (professionnel)'],
    },
    {
      category: 'Savoir-être',
      icon: <Users className="h-5 w-5" />,
      skills: ['Curiosité', 'Rigueur', 'Orienté résultats', 'Coordination d\'équipe', 'Vision produit'],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl rounded-4xl"
    >
      <Card className="w-full border-none px-0 pb-12 shadow-none">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Compétences & Expertise
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-8 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((section, index) => (
              <motion.div
                key={index}
                className="space-y-3 px-0"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-accent-foreground text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={badgeVariants}
                      whileHover={{
                        scale: 1.04,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Badge className={`border px-3 py-1.5 font-normal`}>
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
