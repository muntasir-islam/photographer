"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
}

export default function PageHeader({ title, subtitle, description }: PageHeaderProps) {
    return (
        <section className="pt-32 pb-16 px-6">
            <div className="mx-auto max-w-4xl text-center">
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground"
                    >
                        {subtitle}
                    </motion.p>
                )}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-foreground"
                    style={{ fontFamily: "var(--font-serif)" }}
                >
                    {title}
                </motion.h1>
                {description && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        {description}
                    </motion.p>
                )}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-foreground/50 to-transparent"
                />
            </div>
        </section>
    );
}
