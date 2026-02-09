"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { type RefObject } from "react";

interface TimelineContentProps {
    as?: any; // Using any for Framer Motion component type as generic dynamic typing is complex
    children: React.ReactNode;
    animationNum?: number;
    timelineRef: RefObject<Element | null>;
    customVariants?: Variants;
    className?: string;
    [key: string]: any;
}

export const TimelineContent = ({
    as = "div",
    children,
    animationNum,
    timelineRef,
    customVariants,
    className,
    ...props
}: TimelineContentProps) => {
    const Component = (motion as any)[as] || motion.div;
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
