import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



function Projects() {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);

    const projects = [
        {
            title: "Hospital Management System",
            description: "The  Hospital Management System is a standalone desktop application designed to streamline hospital operations, improving efficiency and patient care. This system integrates various hospital management functions, such as patient registration, doctor management, appointment scheduling, and billing, into a user-friendly interface.",
            techStack: ["Python", "Mysql"],
            liveLink: "https://example.com",
            githubLink: "https://github.com/sagar-pendam/HMS",
            imgSrc: "./img/HMS.jpeg",
        },
        {
            title: "Weather App (Responsive Web Application)",
            description: "The Weather App is a responsive web application designed to provide real-time weather updates for any location worldwide. It features a clean and intuitive user interface, ensuring a smooth experience across all devices.",
            techStack: ["HTML", "CSS", "React", "WeatherAPI (Free plan) API","Axios","React Toastify"],
            liveLink: "https://weather-app-using-react-drab.vercel.app/",
            githubLink: "https://github.com/sagar-pendam/weather-App-Using-React",
            imgSrc: "./img/weather-app.jpg",
        },
        {
            title: "E-Commerce Website",
            description: "A fully responsive e-commerce web application built to deliver a seamless shopping experience. The website allows users to browse products, add items to the cart, place orders, and manage favorites and watchlists. Integrated with Google Sign-In and Firebase Authentication for secure login, and Firestore for real-time data storage and retrieval.",
            techStack: ["React Js", "Tailwind", "React Hooks", "Firebase (Authentication & Firestore)", "RapidAPI (IMDb API)"],
            liveLink: "https://e-commerce-db-f9711.web.app/",
            githubLink: "https://github.com/sagar-pendam/e-commerce-web-site",
            imgSrc: "./img/e-commerce.jpg",
        },
        {
            title: " Movie Search App",
            description: "A sleek and responsive movie search application that allows users to explore movies, view detailed information, and manage personal watchlists and favorites. Built with a clean UI and intuitive user experience in mind, this app integrates Firebase for secure authentication and Firestore for efficient data management.",
            techStack: ["React Js", "Tailwind", "React Hooks", "Firebase (Authentication & Firestore)", "RapidAPI (IMDb API)", "React Hook Form", "Lucide Icons"],
            liveLink: "https://movie-app-bd3c5.web.app/",
            githubLink: "https://github.com/sagar-pendam/movie-search-app",
            imgSrc: "./img/movie-app.jpg",
        },
    ];

 
    const ball = {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        margin: "0 auto 20px",
    };

    const projectsContainer = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        gap: "20px",
        padding: "20px",
    };

    const projectCard = {
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "rgb(30 43 69 / 88%)",
        color: "white",

    };

    const techStack = {
        display: "flex",
        gap: "10px",
        margin: "10px 0",
        flexWrap: "wrap",
    };

    const techItem = {
        padding: "5px 10px",
        backgroundColor: "black",
        borderRadius: "5px",
        fontSize: "14px",
    };

    const links = {
        display: "flex",
        gap: "10px",
        marginTop: "10px",
    };


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <div
                className={`flex items-center justify-center py-40 bg-slate-900 pbg ${isHovered ? "backdrop-blur-md" : ""}`}
                style={{ backgroundColor: isHovered ? "rgb(16 24 40 / 90%)" : "#101828" }} // Semi-transparent background when hovered
            >
                <div style={{ padding: "20px" }}>
                    {/* Animated Header */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        style={ball}
                    >
                        Projects
                    </motion.div>

                    {/* Project Details */}
                    <div
                        style={projectsContainer}
                        id="projectDtl"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {projects.map((project, index) => {
                            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

                            return (
                                <motion.div
                                    key={index}
                                    ref={ref}
                                    style={projectCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="projectDesc flex items-center justify-around flex-col py-4 gap-8">
                                        <div className="projectDescLeft flex flex-col items-center justify-center gap-4">
                                            <h3 className="font-bold text-blue-400">{project.title}</h3>
                                            <p className="font-light text-white"> {project.description}</p>
                                        </div>
                                        <div className="projectDescRight">
                                            <img src={project.imgSrc} alt={project.title} className="w-full h-auto rounded-lg" />
                                        </div>
                                    </div>
                                    <div style={techStack}>
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} style={techItem}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div style={links}>
                                        {project.title !== "Hospital Management System" && (
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-blue-400">
                                                Live Demo
                                            </a>
                                        )}
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-blue-400">
                                            GitHub
                                        </a>
                                    </div>
                                </motion.div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;