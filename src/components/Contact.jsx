import React from 'react';
import { useForm } from "react-hook-form";
import Spinner from './Spinner';
import * as motion from "motion/react-client"
function Contact() {
    const [submitted, setSubmitted] = React.useState(false);
    const ball = {
        
       
        
    }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm();

    const delay = (t) => new Promise((resolve) => setTimeout(resolve, t * 1000));

    const onSubmit = async (data) => {
        await delay(3);
        // console.log(data);

        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen flex-col bg-[#101828] gap-2">
            {isSubmitting && <Spinner />}
            {submitted && <p className="text-green-500 text-center mt-20 text-lg animate-bounce">Form submitted successfully! ✅</p>}
            <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={ball}
            className='max-w-md mx-auto w-[80%] mt-10'
        >
           
       
            <form className="max-w-md mx-auto w-[80%] bg-[#252f43] p-6 rounded-2xl mt-18" onSubmit={handleSubmit(onSubmit)}>
                {['name', 'email', 'mobile', 'subject'].map((field, index) => (
                    <div key={index} className="relative z-0 w-full mb-5 group">
                        <input
                            {...register(field, {
                                required: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
                                ...(field === 'email' && {
                                    pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" }
                                }),
                                ...(field === 'mobile' && {
                                    minLength: { value: 10, message: "Mobile number must be 10 digits" },
                                    maxLength: { value: 10, message: "Mobile number must be 10 digits" }
                                })
                            })}
                            type={field === 'email' ? 'email' : field === 'mobile' ? 'tel' : 'text'}
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        {errors[field] && <span className="text-red-400 text-sm animate-bounce">{errors[field].message}</span>}
                    </div>
                ))}

                <div className="relative z-0 w-full mb-5 group">
                    <textarea
                        {...register("message", {
                            required: "Message is required",
                            minLength: { value: 10, message: "Message must be at least 10 letters" }
                        })}
                        id="message"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-white bg-[#252f43] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Leave a comment..."
                    />
                    {errors.message && <span className="text-red-400 size-6 animate-bounce text-sm">{errors.message.message}</span>}
                </div>

                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-300 ease-in-out"
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
            </motion.div>
        </div>
    );
}

export default Contact;
