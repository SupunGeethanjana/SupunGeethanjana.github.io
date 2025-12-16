import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
    {
        role: "Associate Tech Lead (Research and Innovation)",
        company: "Cloud Solutions International",
        period: "Aug 2025 - Present",
        description: "Leading the Research and Innovation (R&I) team to explore new technologies. Driving API development and leveraging AI tools (Windsurf, Copilot, Cursor AI) to enhance development efficiency."
    },
    {
        role: "Senior Software Engineer",
        company: "Cloud Solutions International",
        period: "Aug 2023 - Aug 2025",
        description: "Led the Framework Team to deliver dynamic components across multiple teams. Spearheaded R&D efforts, ensured system stability, and mentored junior developers. Promoted code excellence through refactoring and reviews."
    },
    {
        role: "Software Engineer",
        company: "Cloud Solutions International",
        period: "Nov 2021 - Aug 2023",
        description: "Contributed to the Framework team by executing developer test cases, conducting peer reviews, and implementing new features. Engaged in R&D and POCs for continuous improvement."
    },
    {
        role: "Software Engineer",
        company: "Digiratina Technology Solutions",
        period: "Feb 2021 - Oct 2021",
        description: "Developed robust database structures and backend services for Dialog workflow projects. Implemented Camunda workflows and ensured API reliability and documentation."
    },
    {
        role: "Associate Software Engineer",
        company: "Digiratina Technology Solutions",
        period: "Feb 2020 - Feb 2021",
        description: "Backend developer for the Hallaga collaborative platform. Integrated AWS S3 for storage and social login features. Optimized Firebase notifications and web chat services."
    },
    {
        role: "Trainee Software Engineer",
        company: "Axionent Inc.",
        period: "Jul 2017 - Dec 2019",
        description: "Gained 2.5 years of experience developing time tracking and retail platform solutions using Java and Spring framework for various client projects."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-primary">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Professional Experience</h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-12">
                        {experienceData.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-8 md:pl-0"
                            >
                                {/* Timeline Line (Hidden on mobile for simplicity, or could add vertical line) */}
                                <div className="md:flex items-start justify-between group">
                                    <div className="md:w-1/3 mb-2 md:mb-0 md:text-right md:pr-8">
                                        <h3 className="text-xl font-bold text-text">{exp.role}</h3>
                                        <p className="text-accent font-medium">{exp.company}</p>
                                        <p className="text-sm text-muted mt-1">{exp.period}</p>
                                    </div>

                                    {/* Divider Circle */}
                                    <div className="hidden md:block absolute left-1/3 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-primary z-10"></div>
                                    <div className="hidden md:block absolute left-1/3 top-4 bottom-[-48px] transform -translate-x-1/2 w-0.5 bg-secondary -z-0 last:hidden"></div>

                                    <div className="md:w-2/3 md:pl-8">
                                        <p className="text-muted leading-relaxed bg-secondary/10 p-4 rounded-lg border border-secondary/30 hover:border-accent/50 transition-colors">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
