import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaMedium, FaDev } from 'react-icons/fa';

const Blogs = () => {
    return (
        <section id="blog" className="py-20 bg-secondary/10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Latest Insights</h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                        <p className="text-muted mt-4">Thoughts on technology, leadership, and software development.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <motion.a
                            href="https://www.linkedin.com/newsletters/7380641236707311616/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            className="bg-primary p-8 rounded-xl border border-secondary hover:border-accent transition-colors group"
                        >
                            <div className="flex items-center mb-4 text-accent">
                                <FaLinkedin size={32} />
                                <h3 className="text-xl font-bold ml-3 text-text group-hover:text-accent transition-colors">LinkedIn Newsletter</h3>
                            </div>
                            <p className="text-muted">
                                Subscribe to my newsletter where I share weekly updates on the latest tech trends, career advice for software engineers, and best practices in development.
                            </p>
                            <span className="inline-block mt-4 text-accent font-medium group-hover:underline">Read on LinkedIn &rarr;</span>
                        </motion.a>

                        <motion.a
                            href="https://medium.com/@supungeethanjana1"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            className="bg-primary p-8 rounded-xl border border-secondary hover:border-accent transition-colors group"
                        >
                            <div className="flex items-center mb-4 text-accent">
                                <FaMedium size={32} />
                                <h3 className="text-xl font-bold ml-3 text-text group-hover:text-accent transition-colors">Medium Articles</h3>
                            </div>
                            <p className="text-muted">
                                Explore in-depth articles about coding tutorials, system design concepts, and my personal experiences in the tech industry.
                            </p>
                            <span className="inline-block mt-4 text-accent font-medium group-hover:underline">Read on Medium &rarr;</span>
                        </motion.a>

                        <motion.a
                            href="https://dev.to/supun_geethanjana"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            className="bg-primary p-8 rounded-xl border border-secondary hover:border-accent transition-colors group"
                        >
                            <div className="flex items-center mb-4 text-accent">
                                <FaDev size={32} />
                                <h3 className="text-xl font-bold ml-3 text-text group-hover:text-accent transition-colors">Dev.to Community</h3>
                            </div>
                            <p className="text-muted">
                                Sharing code snippets, quick tips, and engaging with the developer community on practical coding challenges and solutions.
                            </p>
                            <span className="inline-block mt-4 text-accent font-medium group-hover:underline">Read on Dev.to &rarr;</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Blogs;
