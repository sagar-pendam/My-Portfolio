import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
    const skills = [
        // Frontend
        { name: "HTML5", level: "90%" },
        { name: "CSS3", level: "90%" },
        { name: "JavaScript", level: "90%" },
        { name: "React.js", level: "85%" },
        { name: "Redux", level: "80%" },
        { name: "Tailwind CSS", level: "85%" },
        { name: "Bootstrap", level: "80%" },
    
        // Backend
        { name: "Java", level: "85%" },
        { name: "Spring Boot (basic)", level: "60%" },
        { name: "REST APIs", level: "75%" },
        { name: "JDBC", level: "75%" },
        { name: "JUnit", level: "60%" },
    
        // Databases
        { name: "MySQL", level: "75%" },
        { name: "Firebase Firestore", level: "75%" },
        { name: "Oracle PL/SQL (basic)", level: "60%" },
    
        // Tools & Platforms
        { name: "Git", level: "90%" },
        { name: "GitHub", level: "90%" },
        { name: "VS Code", level: "90%" },
        { name: "IntelliJ IDEA", level: "80%" },
        { name: "Eclipse", level: "80%" },
        { name: "Maven", level: "75%" },
        { name: "Docker (basic)", level: "50%" },
    
        // Cloud & AI Tools
        { name: "Firebase Hosting", level: "75%" },
        { name: "Firebase Auth", level: "75%" },
        { name: "ChatGPT (code assist)", level: "80%" },
        { name: "GitHub Copilot (familiar)", level: "60%" },
        { name: "Agile Workflow (basic)", level: "60%" },
      ];

    const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: educationRef, inView: educationInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: careerRef, inView: careerInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
            <div className="max-w-3xl text-center pt-40">

                {/* 🔹 About Me Section with Animation */}
                <motion.div
                    ref={aboutRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="about_me"
                >
                    {/* <h1 className="text-4xl font-bold mb-4 text-blue-400">About Me</h1>
                    <p className="text-lg mb-6">
                        Hi, I'm <span className="font-semibold">Sagar</span>, a passionate
                        <span className="text-blue-300"> Frontend Developer </span> skilled in React.js, HTML, CSS, Javascript, Python, and SQL.
                    </p> */}
                    <h1 className="text-4xl font-bold mb-4 text-blue-400">About Me</h1>
<p className="text-lg mb-6 text-gray-200">
  Hi, I'm <span className="font-semibold">Sagar</span>, a passionate 
  <span className="text-blue-300"> Full Stack Developer</span> skilled in building responsive, scalable, and real-world web applications.
</p>
<p className="text-lg text-gray-300">
  I specialize in technologies like <span className="font-semibold text-white">Java, Spring Boot, REST APIs, React.js,</span> and 
  <span className="font-semibold text-white"> Firebase</span>. I have hands-on experience with both frontend and backend development, and I'm comfortable working across the full stack — from designing responsive UIs to integrating APIs and managing databases using <span className="font-semibold text-white">MySQL</span> and <span className="font-semibold text-white">Oracle PL/SQL</span>.
</p>
<p className="text-lg mt-4 text-gray-300">
  I'm continuously learning and exploring new technologies. Tools like <span className="font-semibold text-white">Git, Maven, Docker (basic)</span>, and AI-assisted coding with <span className="font-semibold text-white">ChatGPT</span> and <span className="font-semibold text-white">GitHub Copilot</span> are part of my workflow.
</p>
<p className="text-lg mt-4 text-gray-400 italic">
  I'm eager to contribute to impactful products and grow as a developer in a collaborative, fast-paced environment.
</p>

                </motion.div>

                {/* 🔹 Skills Section */}
                <h2 className="text-2xl font-semibold mb-3 text-blue-400 mt-32">Skills</h2>
                <div ref={skillsRef} className="mt-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="p-6 bg-[#373737] rounded-2xl w-full max-w-2xl mx-auto"
                    >
                        <div className="skillsSection flex flex-col items-center justify-center w-full gap-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center justify-center w-full gap-3"
                                    initial={{ opacity: 0, y: -15 }}
                                    animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <motion.span
                                        className="text-white font-medium text-lg text-center"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                    >
                                        {skill.name}
                                    </motion.span>
                                    <div className="w-full flex flex-col items-center">
                                        <div className="w-[80%] h-[6px] bg-gray-500 rounded-full relative">
                                            <motion.div
                                                className="absolute top-0 left-0 bg-amber-300 h-[6px] rounded-full"
                                                initial={{ width: "0%" }}
                                                animate={skillsInView ? { width: skill.level } : { width: "0%" }}
                                                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeInOut" }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* 🔹 Education Timeline */}
                <h2 className="text-2xl font-semibold mb-3 text-blue-400 mt-32">Education</h2>
                <div ref={educationRef} className="w-1 h-64 bg-slate-800 relative mx-auto flex flex-col items-center gap-16 right-[110px]">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={educationInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="w-12 h-1 bg-slate-800 left-6 relative top-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={educationInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="absolute -top-3 left-12 sm:min-w-[400px] min-w-[220px]"
                        >
                          
                           <div className="flex flex-col items-start justify-center gap-1 px-2 w-full">
                           <p className="text-green-400 font-semibold text-wrap">  D.A.V velankar college of commerce, Solapur</p>
                            <div className="h-[1px] w-full bg-slate-800"></div>
                            <p className="text-green-400 font-semibold px-4">Percentage : <span className="font-medium text-sm text-blue-400">72.52 %</span></p>
                            <div className="h-[1px] w-full bg-slate-800"></div>
                            <p className="text-green-400 font-semibold px-4"> BCA - [2020-2024]</p>
                           
                           </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={educationInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="w-12 h-1 bg-slate-800 left-6 relative top-32"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={educationInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="absolute -top-3  left-12 sm:min-w-[400px] min-w-[220px]"
                        >
                           <div className="flex flex-col items-start justify-center gap-1 px-2 w-full">
                           <p className="text-green-400 font-semibold text-wrap"> Bharat-Ratna Indira Gandhi College of Engineering</p>                       
                            <div className="h-[1px] w-full bg-slate-800"></div>
                            <p className="text-green-400 font-semibold px-4">MCA  [Aug-2024] - Present</p>
                           
                           </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* 🔹 Career Goals Section with Animation */}
                <motion.div
                    ref={careerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={careerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="career_goals"
                >
                    <h2 className="text-2xl font-semibold mb-3 text-blue-400 mt-32">Career Goals</h2>
                    <p className="mb-4">
                        My goal is to become a <span className="text-blue-300 font-semibold">Full Stack Developer</span>,
                        designing impactful software solutions that align with business needs.
                    </p>
                </motion.div>

                {/* 🔹 Social Links */}
                <h2 className="text-2xl font-semibold mb-3 text-blue-400 mt-32">Let's Connect</h2>
                <div className="flex justify-center space-x-6">
                    <a href="https://github.com/sagar-pendam" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-3xl hover:text-blue-300 transition" />
                    </a>


                    <a href="https://www.linkedin.com/in/sagar-pendam-630384269/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-3xl hover:text-blue-300 transition" />
                    </a>
                    <a href="mailto:pendamsagar3@gmail.com">
                        <FaEnvelope className="text-3xl hover:text-blue-300 transition" />
                    </a>

                </div>
            </div>
        </div>
    );
}
