import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonialsData = [
    {
        name: "Kavinda Nishshanka",
        role: "Software Architect | Consultant AI/R&D/Platform",
        text: "I had the pleasure of working with Supun and was consistently impressed by his strong sense of ownership and leadership. He has an exceptional ability to quickly grasp new technologies and project requirements, allowing him to deliver effective and timely solutions. Supun is not only technically proficient but also a fantastic team player.",
        image: "/kavinda.jpg"
    },
    {
        name: "Himashmy Benaragama",
        role: "Senior Software QA Engineer",
        text: "Supun is a true asset to any development team. Whether guiding junior developers, making strategic technical decisions, or ensuring cross-functional alignment, Supun leads with confidence and clarity. He is always willing to support teammates, share knowledge, and contribute to a positive and productive work environment.",
        image: "/himashmy.jpg"
    },
    {
        name: "Buddhi Ranasinghe",
        role: "Senior Software Engineer",
        text: "It was a privilege to collaborate with Supun on the same team. He is a truly collaborative team player who consistently approaches challenges with excellent problem-solving and critical thinking skills. Supun's expertise as a full-stack engineer is comprehensive, with a strong command of technologies including Java, NodeJS, and Angular, among others.",
        image: "/buddhi.jpg"
    },
    {
        name: "Dumindu Karunarathna",
        role: "Software Engineer",
        text: "I’ve had the pleasure of working with Supun and can confidently say he’s not just technically excellent, but also a fantastic team player and mentor. On top of that, he is a good friend and one of the most talkative people around, always bringing energy and positivity to the team. Highly recommend!",
        image: "/dumindu.jpg"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-primary">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Testimonials</h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {testimonialsData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-secondary/10 p-8 rounded-xl border border-secondary relative flex flex-col"
                            >
                                <FaQuoteLeft className="text-accent/20 text-6xl absolute top-4 left-4 -z-0" />
                                <p className="text-text italic mb-6 relative z-10 leading-relaxed flex-grow">"{item.text}"</p>
                                <div className="flex items-center mt-auto">
                                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full mr-4 border border-accent/50 object-cover" />
                                    <div>
                                        <h4 className="text-text font-bold">{item.name}</h4>
                                        <p className="text-muted text-sm">{item.role}</p>
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

export default Testimonials;
