import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaCertificate } from 'react-icons/fa';

const achievementsData = [
    {
        title: "Best Tech Lead 2024",
        organization: "Company Awards",
        description: "Awarded for exceptional leadership and delivery of the flagship product.",
        icon: <FaTrophy />
    },
    {
        title: "Hackathon Winner",
        organization: "Global AI Challenge",
        description: "Secured 1st place among 500+ participants for creating an innovative healthcare solution.",
        icon: <FaAward />
    },
    {
        title: "AWS Certified Solutions Architect",
        organization: "Amazon Web Services",
        description: "Professional certification validating expertise in designing distributed systems.",
        icon: <FaCertificate />
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 bg-primary">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Achievements & Awards</h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {achievementsData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-secondary/10 p-6 rounded-xl border border-secondary hover:border-accent transition-colors text-center group"
                            >
                                <div className="text-4xl text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-xl font-bold text-text mb-2">{item.title}</h3>
                                <p className="text-accent/80 text-sm font-medium mb-3">{item.organization}</p>
                                <p className="text-muted text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
