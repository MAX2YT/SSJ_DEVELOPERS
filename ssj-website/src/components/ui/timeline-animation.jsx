"use client";

import { motion, useInView } from "framer-motion";

export const TimelineContent = ({
    as = "div",
    children,
    animationNum,
    timelineRef,
    customVariants,
    className,
    ...props
}) => {
    const Component = motion[as] || motion.div;
    const isInView = useInView(timelineRef, { once: true, margin: "-50px" });

    return (
        <Component
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={customVariants}
            custom={animationNum}
            {...props}
        >
            {children}
        </Component>
    );
};

export default TimelineContent;
