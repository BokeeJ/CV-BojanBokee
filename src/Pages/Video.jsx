import { motion } from "motion/react"
const VideoComponent = () => {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 200

        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1,
                duration: 2
            }
        }
    }
    return (
        <motion.div
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
                once: true,
            }}
            className=" bg-black w-full ">
            <img src="/slika2.svg" className="w-full h-[600px] shadow-lg shadow-white" alt="sponsored" />
        </motion.div>
    );
}

export default VideoComponent;
