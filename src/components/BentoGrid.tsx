"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BentoItem {
    id: string;
    src: string;
    alt: string;
    title?: string;
    category?: string;
    exif?: {
        camera?: string;
        lens?: string;
        aperture?: string;
        shutter?: string;
        iso?: string;
    };
    size: "small" | "medium" | "large" | "wide" | "tall";
}

interface BentoGridProps {
    items: BentoItem[];
    onItemClick?: (item: BentoItem) => void;
}

const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 row-span-2",
    large: "col-span-2 row-span-2",
    wide: "col-span-2 row-span-1",
    tall: "col-span-1 row-span-3",
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const,
        },
    },
};

export default function BentoGrid({ items, onItemClick }: BentoGridProps) {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section className="w-full px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                        Portfolio
                    </p>
                    <h2
                        className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Selected Works
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[250px] sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
                >
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className={`group relative cursor-pointer overflow-hidden rounded-lg ${sizeClasses[item.size]}`}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => onItemClick?.(item)}
                        >
                            {/* Image */}
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            {/* Content overlay */}
                            <motion.div
                                initial={false}
                                animate={{
                                    opacity: hoveredId === item.id ? 1 : 0,
                                    y: hoveredId === item.id ? 0 : 20,
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6"
                            >
                                {item.category && (
                                    <span className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                        {item.category}
                                    </span>
                                )}
                                {item.title && (
                                    <h3
                                        className="text-lg font-medium text-foreground sm:text-xl"
                                        style={{ fontFamily: "var(--font-serif)" }}
                                    >
                                        {item.title}
                                    </h3>
                                )}

                                {/* EXIF Data */}
                                {item.exif && (
                                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                                        {item.exif.camera && (
                                            <span className="rounded bg-background/50 px-2 py-1 backdrop-blur-sm">
                                                {item.exif.camera}
                                            </span>
                                        )}
                                        {item.exif.aperture && (
                                            <span className="rounded bg-background/50 px-2 py-1 backdrop-blur-sm">
                                                {item.exif.aperture}
                                            </span>
                                        )}
                                        {item.exif.shutter && (
                                            <span className="rounded bg-background/50 px-2 py-1 backdrop-blur-sm">
                                                {item.exif.shutter}
                                            </span>
                                        )}
                                        {item.exif.iso && (
                                            <span className="rounded bg-background/50 px-2 py-1 backdrop-blur-sm">
                                                ISO {item.exif.iso}
                                            </span>
                                        )}
                                    </div>
                                )}
                            </motion.div>

                            {/* Border highlight */}
                            <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-white/20" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
