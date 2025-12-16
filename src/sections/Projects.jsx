import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
    {
        title: "Project Alpha",
        description: "A high-performance e-commerce platform built with Next.js and Microservices. Handled 50k+ daily concurrent users.",
        tags: ["Next.js", "Node.js", "AWS", "Redis"],
        github: "#",
        demo: "#",
        image: "https://via.placeholder.com/600x400/0f172a/38bdf8?text=Project+Alpha"
    },
    {
        title: "AI Dashboard",
        description: "Real-time analytics dashboard powered by AI to predict market trends. Features data visualization and reporting.",
        tags: ["React", "Python", "TensorFlow", "D3.js"],
        github: "#",
        demo: "#",
        image: "https://via.placeholder.com/600x400/0f172a/38bdf8?text=AI+Dashboard"
    },
    {
        title: "SaaS Starter Kit",
        description: "A comprehensive boilerplate for building SaaS applications with authentication, billing, and team management.",
        tags: ["TypeScript", "Supabase", "Stripe", "Tailwind"],
        github: "#",
        demo: "#",
        image: "https://via.placeholder.com/600x400/0f172a/38bdf8?text=SaaS+Project"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-secondary/10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Featured Projects</h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                        <p className="text-muted mt-4">A selection of my recent work.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-primary rounded-xl overflow-hidden border border-secondary group hover:border-accent transition-colors shadow-lg"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                                        <a href={project.github} className="p-2 bg-secondary rounded-full text-text hover:bg-accent hover:text-primary transition-colors">
                                            <FaGithub size={20} />
                                        </a>
                                        <a href={project.demo} className="p-2 bg-secondary rounded-full text-text hover:bg-accent hover:text-primary transition-colors">
                                            <FaExternalLinkAlt size={20} />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-text mb-2">{project.title}</h3>
                                    <p className="text-muted text-sm mb-4 line-clamp-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-secondary/30 text-accent rounded-full border border-secondary/50">{tag}</span>
                                        ))}
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

export default Projects;
