import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaMedium, FaDev } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <motion.div
                        className="md:w-1/2 text-center md:text-left"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-accent text-lg font-medium tracking-wide">Hello, I'm</span>
                        <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 text-text">
                            Supun Geethanjana
                        </h1>
                        <h2 className="text-3xl md:text-4xl text-muted font-light mb-8">
                            Associate Tech Lead
                        </h2>
                        <p className="text-lg text-muted leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                            Associate Tech Lead with <span className="text-accent font-semibold">over 6 years of experience</span> in full-stack development.
                            Expert in designing scalable enterprise solutions using Java and Angular. I lead Framework and R&D teams, ensuring code quality and driving innovation.
                        </p>

                        <div className="flex justify-center md:justify-start space-x-6 mb-12">
                            <a href="https://www.linkedin.com/in/geethanjana-jayasinghe-939958132/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                                <FaLinkedin size={30} />
                            </a>
                            <a href="https://github.com/SupunGeethanjana" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                                <FaGithub size={30} />
                            </a>
                            <a href="https://blog.supungeethanjana.com/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                                <FaMedium size={30} />
                            </a>
                            <a href="https://dev.to/supun_geethanjana" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                                <FaDev size={30} />
                            </a>
                        </div>

                        {/* <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <a href="#projects" className="px-8 py-3 bg-accent text-primary font-bold rounded-full hover:bg-opacity-90 transition-all">
                                View My Work
                            </a>
                        </motion.div> */}
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        className="md:w-1/2 flex justify-center md:justify-end"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative w-64 h-64 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            <img
                                src="/Supun.png"
                                alt="Supun Geethanjana"
                                className="relative w-full h-full object-cover rounded-full border-4 border-secondary/50 shadow-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
