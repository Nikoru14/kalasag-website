import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const NavBar = () => {
    const [activeSection, setActiveSection] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "services", "gallery", "contact"];
            let scrollPosition = window.scrollY + 150; // Adjust based on navbar height
            let currentSection = "";

            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (id === "contact" && window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
                        currentSection = "contact";
                    }

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        currentSection = id;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Run once on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false); // Close menu on click (for mobile)
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg shadow-lg px-4 lg:px-20">
            <div className="max-w-8xl flex flex-wrap items-center  justify-between py-4">
                {/* Logo */}
                <div className="flex items-center space-x-1 cursor-pointer" onClick={() => scrollToSection("home")}>
                    <img className="logo" src="./logo.png" alt="logo"></img>
                    <div className="flex flex-col text-left">
                        <h1
                            className="text-3xl md:text-5xl font-bold font-brand cursor-pointer text-primary tracking-[0.50rem]"
                            onClick={() => scrollToSection("home")}
                        >
                            KALASAG
                        </h1>
                        <p className="text-sm text-gray-400">
                            Paint Protection Film and Vinyl Wrap
                        </p>
                    </div>
                </div>


                {/* Desktop Menu */}
                <ul className="hidden lg:flex space-x-8">
                    {[
                        { name: "Home", id: "home" },
                        { name: "About", id: "about" },
                        { name: "Services", id: "services" },
                        { name: "Gallery", id: "gallery" },
                        { name: "Contact", id: "contact" },
                    ].map((section) => (
                        <motion.li
                            key={section.id}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <button
                                onClick={() => scrollToSection(section.id)}
                                className={`text-white hover:text-primary transition-all px-3 py-1 text-lg font-medium ${activeSection === section.id ? "border-b-2 border-primary" : ""
                                    }`}
                            >
                                {section.name}
                            </button>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button className="lg:hidden flex text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-32 md:top-22 left-0 w-full bg-black/90 backdrop-blur-md transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
                <ul className="flex flex-col space-y-4 text-center py-6">
                    {[
                        { name: "Home", id: "home" },
                        { name: "About", id: "about" },
                        { name: "Services", id: "services" },
                        { name: "Gallery", id: "gallery" },
                        { name: "Contact", id: "contact" },
                    ].map((section) => (
                        <motion.li
                            key={section.id}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <button
                                onClick={() => scrollToSection(section.id)}
                                className={`text-white hover:text-primary transition-all text-lg font-medium ${activeSection === section.id ? "border-b-2 border-primary" : ""
                                    }`}
                            >
                                {section.name}
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
