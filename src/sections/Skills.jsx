import React from 'react';
import { motion } from 'framer-motion';

const skillsData = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
    "Backend": ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "GraphQL"],
    "DevOps & Tools": ["Docker", "AWS", "CI/CD", "Git", "Jest", "Webpack"],
    "Soft Skills": ["Team Leadership", "Mentoring", "Agile/Scrum", "Problem Solving", "Communication", "Code Review"]
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-secondary/10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Skills & Expertise</h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                        <p className="text-muted mt-4 max-w-2xl mx-auto">
                            A comprehensive toolset developed over 6 years of hands-on experience in software development and leadership.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Object.entries(skillsData).map(([category, skills], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-primary p-6 rounded-xl border border-secondary hover:border-accent transition-colors shadow-lg"
                            >
                                <h3 className="text-xl font-bold text-accent mb-6 text-center">{category}</h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {skills.map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-secondary/30 text-muted text-sm rounded-full border border-secondary/50">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
