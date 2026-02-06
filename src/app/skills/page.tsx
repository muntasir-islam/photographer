"use client";

import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import {
    User,
    Mountain,
    PartyPopper,
    Package,
    Palette,
    Zap,
    Heart,
    Globe,
    Shirt,
    ShoppingBag,
} from "lucide-react";

const expertiseAreas = [
    { name: "Portrait Photography", level: 95, description: "Natural light and studio portraits", icon: User },
    { name: "Landscape Photography", level: 90, description: "Nature and urban landscapes", icon: Mountain },
    { name: "Event Coverage", level: 88, description: "Weddings, corporate, celebrations", icon: PartyPopper },
    { name: "Commercial Work", level: 85, description: "Products and brand campaigns", icon: Package },
    { name: "Photo Editing", level: 92, description: "Color grading and retouching", icon: Palette },
    { name: "Lighting Design", level: 88, description: "Studio and location lighting", icon: Zap },
];

const software = [
    { name: "Adobe Lightroom", level: 95 },
    { name: "Adobe Photoshop", level: 90 },
    { name: "Capture One", level: 85 },
    { name: "DaVinci Resolve", level: 75 },
    { name: "Premiere Pro", level: 70 },
];

const specializations = [
    { title: "Wedding Photography", icon: Heart, description: "Capturing your special day with artistic vision and attention to detail.", color: "from-pink-500/20 to-rose-500/20" },
    { title: "Corporate Portraits", icon: User, description: "Professional headshots and team photography for businesses.", color: "from-blue-500/20 to-cyan-500/20" },
    { title: "Fine Art Prints", icon: Palette, description: "Limited edition prints for collectors and interior designers.", color: "from-purple-500/20 to-violet-500/20" },
    { title: "Travel & Adventure", icon: Globe, description: "Documentary-style photography during expeditions worldwide.", color: "from-green-500/20 to-emerald-500/20" },
    { title: "Fashion Editorial", icon: Shirt, description: "High-end fashion and editorial shoots for publications.", color: "from-orange-500/20 to-amber-500/20" },
    { title: "Product Photography", icon: ShoppingBag, description: "E-commerce and advertising product imagery.", color: "from-indigo-500/20 to-sky-500/20" },
];

export default function SkillsPage() {
    return (
        <main className="min-h-screen bg-background">
            <PageHeader
                title="Skills & Expertise"
                subtitle="Capabilities"
                description="A comprehensive overview of my photography skills and technical proficiencies."
            />

            {/* Expertise Areas */}
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl font-medium text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
                            Photography Expertise
                        </h2>
                    </motion.div>

                    <div className="space-y-8">
                        {expertiseAreas.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="group"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors"
                                    >
                                        <skill.icon className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
                                    </motion.div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <h3 className="text-lg font-medium text-foreground">{skill.name}</h3>
                                                <p className="text-sm text-muted-foreground">{skill.description}</p>
                                            </div>
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 + 0.5 }}
                                                className="text-sm font-medium text-foreground"
                                            >
                                                {skill.level}%
                                            </motion.span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-2 rounded-full bg-white/10 overflow-hidden ml-14">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                                        className="h-full rounded-full bg-gradient-to-r from-foreground/50 via-foreground/80 to-foreground relative overflow-hidden"
                                    >
                                        {/* Shimmer effect */}
                                        <motion.div
                                            animate={{ x: ["-100%", "200%"] }}
                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Software Proficiency */}
            <section className="px-6 py-24 border-t border-white/10">
                <div className="mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                            Tools
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-medium text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
                            Software Proficiency
                        </h2>
                    </motion.div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {software.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="relative p-6 rounded-xl border border-white/10 bg-card/30 text-center group hover:border-white/20 transition-all cursor-default"
                            >
                                <div className="relative w-24 h-24 mx-auto mb-4">
                                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="45"
                                            fill="none"
                                            stroke="rgba(255,255,255,0.1)"
                                            strokeWidth="6"
                                        />
                                        <motion.circle
                                            cx="50"
                                            cy="50"
                                            r="45"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="6"
                                            strokeLinecap="round"
                                            initial={{ strokeDasharray: "0 283" }}
                                            whileInView={{ strokeDasharray: `${item.level * 2.83} 283` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: i * 0.15, ease: "easeOut" }}
                                            className="text-foreground"
                                        />
                                    </svg>
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15 + 0.8 }}
                                        className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-foreground"
                                    >
                                        {item.level}%
                                    </motion.span>
                                </div>
                                <h3 className="text-lg font-medium text-foreground group-hover:text-white transition-colors">{item.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specializations */}
            <section className="px-6 py-24 border-t border-white/10">
                <div className="mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                            Specializations
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-medium text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
                            Areas of Focus
                        </h2>
                    </motion.div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {specializations.map((spec, i) => (
                            <motion.div
                                key={spec.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}
                                whileHover={{ y: -12, scale: 1.03 }}
                                className="relative p-6 rounded-xl border border-white/10 bg-card/30 hover:bg-card/50 hover:border-white/20 transition-all overflow-hidden group cursor-default"
                            >
                                {/* Gradient background on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    <motion.div
                                        whileHover={{ rotate: 12, scale: 1.1 }}
                                        className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors"
                                    >
                                        <spec.icon className="w-7 h-7 text-foreground/70 group-hover:text-foreground transition-colors" />
                                    </motion.div>
                                    <h3 className="text-xl font-medium text-foreground mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                                        {spec.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">{spec.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
