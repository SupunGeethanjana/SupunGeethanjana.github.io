import React from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaHeart, FaDev } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-secondary/30 py-8 border-t border-secondary mt-20">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="https://www.linkedin.com/in/geethanjana-jayasinghe-939958132/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/SupunGeethanjana" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://medium.com/@supungeethanjana1" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                        <FaMedium size={24} />
                    </a>
                    {/* Dev.to Link */}
                    <a href="https://dev.to/supun_geethanjana" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                        <FaDev size={24} />
                    </a>
                </div>
                <p className="text-muted text-sm flex items-center justify-center gap-2">
                    © {new Date().getFullYear()} Supun Geethanjana
                    {/* Built with <FaHeart className="text-accent" /> using React + Vite. */}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
