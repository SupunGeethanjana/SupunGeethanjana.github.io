import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-primary">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">About Me</h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-muted text-lg leading-relaxed">
                            <p>
                                I am a dedicated <span className="text-accent font-semibold">Software Engineer</span> with over 6 years of experience in the industry, currently serving as an <span className="text-accent font-semibold">Associate Tech Lead</span>. My journey has been driven by a passion for solving complex problems and building scalable, high-performance web applications.
                            </p>
                            <p>
                                I value <span className="text-text font-medium">clean code, collaboration, and continuous learning</span>. My goal is to leverage technology to create meaningful impact, whether it's optimizing backend systems or crafting intuitive user interfaces.
                            </p>
                        </div>

                        <div className="bg-secondary/20 p-8 rounded-lg border border-secondary">
                            <h3 className="text-xl font-bold text-text mb-4">Why Work With Me?</h3>
                            <ul className="space-y-3">
                                {[
                                    "6+ Years of Professional Experience",
                                    "Proven Track Record in Tech Leadership",
                                    "Full-Stack Expertise",
                                    "Problem-Solving Mindset",
                                    "Commitment to Quality & Best Practices"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-muted">
                                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
