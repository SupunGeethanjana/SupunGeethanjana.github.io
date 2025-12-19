import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileDownload, FaPhone, FaDev, FaMedium } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-secondary/10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-primary rounded-2xl p-8 md:p-12 shadow-2xl border border-secondary text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Let's Connect</h2>
                    <p className="text-muted text-lg mb-8">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10 flex-wrap">
                        <a href="tel:+94711696240" className="flex items-center space-x-3 text-text hover:text-accent transition-colors text-lg">
                            <FaPhone size={24} />
                            <span>+94 71 169 6240</span>
                        </a>
                        <a href="mailto:supungeethanjana1@gmail.com" className="flex items-center space-x-3 text-text hover:text-accent transition-colors text-lg">
                            <FaEnvelope size={24} />
                            <span>supungeethanjana1@gmail.com</span>
                        </a>
                        <a href="https://www.linkedin.com/in/geethanjana-jayasinghe-939958132/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-text hover:text-accent transition-colors text-lg">
                            <FaLinkedin size={24} />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://blog.supungeethanjana.com/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-text hover:text-accent transition-colors text-lg">
                            <FaMedium size={24} />
                            <span>Medium</span>
                        </a>
                        <a href="https://github.com/SupunGeethanjana" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-text hover:text-accent transition-colors text-lg">
                            <FaGithub size={24} />
                            <span>GitHub</span>
                        </a>
                        <a href="https://dev.to/supun_geethanjana" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-text hover:text-accent transition-colors text-lg">
                            <FaDev size={24} />
                            <span>Dev.to</span>
                        </a>
                    </div>

                    <motion.a
                        href="/resume.pdf"
                        download="Supun_Geethanjana_Resume.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 bg-accent text-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all"
                    >
                        <FaFileDownload size={20} />
                        <span>Download Resume</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
