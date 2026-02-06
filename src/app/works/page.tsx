"use client";

import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Portrait", "Landscape", "Events", "Commercial"];

const works = [
    { id: "1", src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", title: "Alpine Sunrise", category: "Landscape" },
    { id: "2", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", title: "Executive Portrait", category: "Portrait" },
    { id: "3", src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", title: "Wedding Bliss", category: "Events" },
    { id: "4", src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80", title: "Forest Path", category: "Landscape" },
    { id: "5", src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80", title: "Brand Campaign", category: "Commercial" },
    { id: "6", src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80", title: "Fashion Editorial", category: "Portrait" },
    { id: "7", src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80", title: "Misty Mountains", category: "Landscape" },
    { id: "8", src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80", title: "Corporate Event", category: "Events" },
    { id: "9", src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80", title: "Product Shot", category: "Commercial" },
    { id: "10", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80", title: "Natural Beauty", category: "Portrait" },
    { id: "11", src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80", title: "Cascading Falls", category: "Landscape" },
    { id: "12", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", title: "Conference", category: "Events" },
];

export default function WorksPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<typeof works[0] | null>(null);

    const filteredWorks = activeCategory === "All"
        ? works
        : works.filter(w => w.category === activeCategory);

    return (
        <main className="min-h-screen bg-background">
            <PageHeader
                title="Works"
                subtitle="Portfolio"
                description="A curated selection of my finest photography work across various genres."
            />

            {/* Category Filter */}
            <section className="px-6 pb-12">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                        ? "bg-foreground text-background"
                                        : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-7xl">
                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <AnimatePresence mode="popLayout">
                            {filteredWorks.map((work, i) => (
                                <motion.div
                                    key={work.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                    onClick={() => setSelectedImage(work)}
                                    className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-lg"
                                >
                                    <Image
                                        src={work.src}
                                        alt={work.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                                            {work.category}
                                        </span>
                                        <h3 className="text-lg font-medium text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
                                            {work.title}
                                        </h3>
                                    </div>
                                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-6 cursor-pointer"
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-5xl max-h-[80vh] w-full aspect-[4/3]"
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                fill
                                className="object-contain"
                                sizes="100vw"
                            />
                        </motion.div>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
