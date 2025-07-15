import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

function Home() {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
        let typed;
        if (el.current) {
            typed = new Typed(el.current, {
                strings: ['<i> A Full Stack Developer</i>'],
                typeSpeed: 50,
            });
        }
        return () => {
            if (typed) typed.destroy(); // Cleanup Typed.js instance
        };
    }, []);

    const ball = {
        // width: 200,
        // height: 200,
        borderRadius: "50%",
        background: "blue",
    };

    return (
        <>
            <div className="absolute inset-0 -z-10 min-h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
            </div>

            <div className='home flex items-center justify-evenly min-h-[100%] flex-wrap-reverse py-12'>


                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    className='home_left flex flex-col gap-5 px-2'
                >
                    {/* <h1 className='text-5xl font-bold text-[#7a7a7ab8]'>
                Hi, I'm <span className='text-green-400'>Sagar</span>.
            </h1>
            <h1 className='text-5xl font-light text-green-400'>
                <span ref={el}></span>
            </h1>
            <h2 className='font-extralight'>
                Passionate about building responsive and user-friendly web apps.
            </h2> */}
                    <h1 className="text-5xl font-bold text-[#7a7a7ab8]">
                        Hi, I'm <span className="text-green-400">Sagar</span>.
                    </h1>
                    <h1 className="text-5xl font-light text-green-400">
                        <span ref={el}></span>
                    </h1>
                    <h2 className="font-extralight mt-2 text-[#c0c0c0]">
                        Full Stack Developer skilled in Java, Spring Boot, React.js, and Firebase. <br />
                        Passionate about building scalable, user-friendly, and real-world web apps.
                    </h2>


                    <div className='buttons flex flex-wrap gap-4 items-center'>
                        {/* Download Resume button */}
                        {/* <motion.a
                    href='./Sagar_s_Resume__.pdf'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    whileTap={{ scale: 0.9 }}
                    download="./Sagar_s_Resume__.pdf"


                >
                    <button className='bg-[#101828] border-2 text-white px-4 py-2 rounded-4xl flex gap-2 items-center justify-between font-bold cursor-pointer hover:text-gray-300'>
                        Download Resume <motion.img className='size-5 animate-bounce' src='./svg/download.svg' />
                    </button>
                </motion.a> */}

                        {/* Visit Button (Optional: You can animate this too) */}
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href='https://github.com/sagar-pendam'
                        >
                            <button className='bg-[#101828] text-white border-2 px-4 py-2 rounded-4xl flex gap-2 items-center justify-between font-bold cursor-pointer hover:text-gray-300'>
                                Visit <img className='' src='./svg/github.svg' />
                            </button>
                        </motion.a>
                    </div>
                </motion.div>

                <div className='home_right'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        style={ball} // Apply styles here instead of on <img>
                        className='sm-w-[200px] sm-h-[200px] w-[150px] h-[150px]'
                    >
                        <img src='./profile.jpg' alt="Profile" className='rounded-full' />
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Home;
