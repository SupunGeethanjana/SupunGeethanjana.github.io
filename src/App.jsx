import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
// import Projects from './sections/Projects';
// import Achievements from './sections/Achievements';
import Testimonials from './sections/Testimonials';
import Blogs from './sections/Blogs';
import Contact from './sections/Contact';

function App() {
    useEffect(() => {
        ReactGA.initialize("G-WQF599PV3C");
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }, []);
    // Smooth scrolling for anchor links 
    // (Note: standard CSS scroll-behavior: smooth in index.html handles most, 
    // but this ensures better compat if needed, or we can just rely on CSS)

    return (
        <div className="bg-primary min-h-screen text-text font-sans">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                {/* <Projects /> */}
                {/* <Achievements /> */}
                <Testimonials />
                <Blogs />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
