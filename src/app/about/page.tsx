"use client";

import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import {
    Camera,
    Aperture,
    Layers,
    Lightbulb,
    Award,
    Calendar,
    MapPin,
    Briefcase,
} from "lucide-react";

const timeline = [
    { year: "2024", title: "International Award", description: "Winner of the Global Photography Excellence Award", icon: Award },
    { year: "2022", title: "Solo Exhibition", description: "Featured exhibition at Modern Art Gallery, NYC", icon: MapPin },
    { year: "2020", title: "Published Work", description: "Photography featured in National Geographic", icon: Briefcase },
    { year: "2018", title: "Studio Launch", description: "Opened LensCraft Photography Studio", icon: Camera },
    { year: "2015", title: "First Client", description: "Started professional photography journey", icon: Calendar },
];

const equipment = [
    { name: "Sony A7R V", type: "Camera", description: "Primary body for high-resolution work", icon: Camera },
    { name: "Sony A9 III", type: "Camera", description: "Sports and action photography", icon: Camera },
    { name: "Sony 24-70mm f/2.8 GM II", type: "Lens", description: "Versatile zoom lens", icon: Aperture },
    { name: "Sony 85mm f/1.4 GM", type: "Lens", description: "Portrait photography", icon: Aperture },
    { name: "Sony 16-35mm f/2.8 GM", type: "Lens", description: "Landscape and architecture", icon: Layers },
    { name: "Profoto B10X Plus", type: "Lighting", description: "Studio and location lighting", icon: Lightbulb },
];

const awards = [
    { title: "Global Photography Excellence Award 2024", icon: Award },
    { title: "Best Portrait Photographer - NY Photography Awards 2023", icon: Award },
    { title: "Wedding Photography Association Gold Award 2022", icon: Award },
    { title: "Landscape Photographer of the Year Finalist 2021", icon: Award },
];

const floatingAnimation = {
    initial: { y: 0 },
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" as const,
        },
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <PageHeader
                title="About Me"
                subtitle="The Artist"
                description="A decade of capturing life's most precious moments."
            />

            {/* Bio Section */}
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[3/4] rounded-2xl overflow-hidden group"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90"
                                alt="Alex Morgan"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />

                            {/* Floating decorative elements */}
                            <motion.div
                                variants={floatingAnimation}
                                initial="initial"
                                animate="animate"
                                className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                            >
                                <Camera className="w-8 h-8 text-foreground/80" />
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-4xl font-medium text-foreground"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                Hello, I&apos;m Alex
                            </motion.h2>
                            <div className="space-y-4 text-muted-foreground">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    With over a decade of experience behind the lens, I&apos;ve dedicated my career to
                                    capturing the authentic beauty in every moment. My journey began in the streets
                                    of New York, where I fell in love with the interplay of light and shadow.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Today, I specialize in portrait, landscape, and event photography. Each project
                                    is an opportunity to tell a unique story, whether it&apos;s a couple&apos;s wedding day,
                                    a corporate milestone, or the raw beauty of nature.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    My philosophy is simple: authenticity over perfection. I believe the most
                                    powerful images are those that capture genuine emotion and connection.
                                </motion.p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex gap-8 pt-4"
                            >
                                {[
                                    { value: "10+", label: "Years Experience" },
                                    { value: "500+", label: "Projects Completed" },
                                    { value: "15+", label: "Awards Won" },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <p className="text-4xl font-semibold text-foreground" style={{ fontFamily: "var(--font-serif)" }}>{stat.value}</p>
                                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="px-6 py-24 border-t border-white/10">
                <div className="mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-medium text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
                            Journey
                        </h2>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute left-8 top-0 w-px bg-gradient-to-b from-foreground/50 via-foreground/20 to-transparent"
                        />
                        {timeline.map((item, i) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="relative pl-20 pb-12 last:pb-0 group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="absolute left-4 top-0 w-8 h-8 rounded-full bg-card border border-white/20 flex items-center justify-center group-hover:border-foreground/50 transition-colors"
                                >
                                    <item.icon className="w-4 h-4 text-foreground/70 group-hover:text-foreground transition-colors" />
                                </motion.div>
                                <span className="text-sm text-muted-foreground">{item.year}</span>
                                <h3 className="text-xl font-medium text-foreground mt-1" style={{ fontFamily: "var(--font-serif)" }}>
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground mt-1">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Equipment */}
            <section className="px-6 py-24 border-t border-white/10">
                <div className="mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                            Gear
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-medium text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
                            My Equipment
                        </h2>
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {equipment.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="p-6 rounded-xl border border-white/10 bg-card/30 hover:bg-card/50 hover:border-white/20 transition-all group cursor-default"
                            >
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                                    <item.icon className="w-6 h-6 text-foreground/70 group-hover:text-foreground transition-colors" />
                                </div>
                                <span className="text-xs uppercase tracking-wider text-muted-foreground">{item.type}</span>
                                <h3 className="text-lg font-medium text-foreground mt-1">{item.name}</h3>
                                <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards */}
            <section className="px-6 py-24 border-t border-white/10">
                <div className="mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                            Recognition
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-medium text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
                            Awards & Honors
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {awards.map((award, i) => (
                            <motion.div
                                key={award.title}
                                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ x: 10, scale: 1.02 }}
                                className="flex items-center gap-4 p-5 rounded-xl border border-white/10 bg-card/30 hover:bg-card/50 hover:border-white/20 transition-all cursor-default group"
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center shrink-0 group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-colors">
                                    <award.icon className="w-5 h-5 text-yellow-500" />
                                </div>
                                <p className="text-foreground font-medium">{award.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
