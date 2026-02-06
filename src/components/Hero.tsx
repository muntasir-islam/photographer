"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
    name?: string;
    tagline?: string;
    description?: string;
    photographerImage?: string;
    backgroundImage?: string;
}

export default function Hero({
    name = "Alex Morgan",
    tagline = "Visual Storyteller",
    description = "Capturing authentic moments and creating timeless imagery that tells your unique story.",
    photographerImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90",
    backgroundImage = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=90",
}: HeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden"
        >
            {/* Background with Parallax */}
            <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
                <motion.div style={{ opacity }} className="relative h-full w-full">
                    <Image
                        src={backgroundImage}
                        alt="Background"
                        fill
                        priority
                        quality={90}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </motion.div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="flex min-h-screen flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 py-24 pt-32">
                    {/* Left: Text Content */}
                    <div className="flex-1 text-center lg:text-left max-w-xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground"
                        >
                            {tagline}
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight text-foreground"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            {name}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-6 text-lg text-muted-foreground max-w-md mx-auto lg:mx-0"
                        >
                            {description}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link
                                href="/works"
                                className="magnetic-btn inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all hover:bg-foreground/90"
                            >
                                View Portfolio
                            </Link>
                            <Link
                                href="/contact"
                                className="magnetic-btn inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:bg-white/10"
                            >
                                Get in Touch
                            </Link>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="mt-12 flex gap-6 justify-center lg:justify-start"
                        >
                            {["Instagram", "Behance", "LinkedIn"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {social}
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Photographer Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative flex-shrink-0"
                    >
                        <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem]">
                            {/* Main Image */}
                            <div className="relative h-full w-full overflow-hidden rounded-2xl">
                                <Image
                                    src={photographerImage}
                                    alt={name}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                            </div>

                            {/* Decorative Elements */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="absolute -bottom-4 -left-4 w-24 h-24 border border-white/20 rounded-xl -z-10"
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.1 }}
                                className="absolute -top-4 -right-4 w-32 h-32 border border-white/10 rounded-full -z-10"
                            />

                            {/* Stats Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 }}
                                className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-xl border border-white/10 rounded-xl p-4"
                            >
                                <p className="text-3xl font-semibold text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
                                    10+
                                </p>
                                <p className="text-xs text-muted-foreground">Years Experience</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Scroll
                    </span>
                    <svg
                        className="h-5 w-5 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
