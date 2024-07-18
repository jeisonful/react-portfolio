import { RiReactjsLine } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io"
import { DiJava } from "react-icons/di"
import { FaHtml5 } from "react-icons/fa6"
import { IoLogoFirebase } from "react-icons/io5"
import { DiMysql } from "react-icons/di"
import { FaPhp } from "react-icons/fa6"
import { IoLogoCss3 } from "react-icons/io5"
import { motion } from "framer-motion"

const iconVariants = (duration) => (
    {
        initial: {y: -10},
        animate: {
            y: [10, -10],
            transition: {
                duration, duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    }
)



const Technologies = () => {

    return (
        <div className="'border-b border-neutral-800 pb-4">
        <motion.h2 whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}} className="my-20 text-center text-4xl">Tecnologías</motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
    <motion.div
    variants={iconVariants(2.5)}
    initial="initial"
    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className="text-7xl text-cyan-400"/>
    </motion.div>
    <motion.div
    variants={iconVariants(3)}
    initial="initial"
    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <IoLogoJavascript className="text-7xl text-yellow-500"/>
    </motion.div>
    <motion.div 
    variants={iconVariants(5)}
    initial="initial"
    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <DiJava className="text-7xl text-red-600"/>
    </motion.div>
    <motion.div 
    variants={iconVariants(2)}
    initial="initial"
    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaHtml5 className="text-7xl text-orange-600"/>
    </motion.div>
    <motion.div 
    variants={iconVariants(4)}
    initial="initial"
    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <IoLogoFirebase className="text-7xl text-yellow-400"/>
    </motion.div>
    <motion.div 
    variants={iconVariants(3)}
    initial="initial"
    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <DiMysql className="text-7xl text-blue-600"/>
    </motion.div>
    <motion.div variants={iconVariants(5)}
    initial="initial"
    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaPhp className="text-7xl text-indigo-700"/>
    </motion.div>
    <motion.div variants={iconVariants(2)}
    initial="initial"
    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <IoLogoCss3 className="text-7xl text-blue-500"/>
    </motion.div>
</motion.div>
        </div>
       
    )

}

export default Technologies