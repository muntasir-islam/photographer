"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import {
    Check,
    Clock,
    Users,
    Plane,
    Video,
    BookOpen,
    Sparkles,
    ArrowRight,
} from "lucide-react";

const packages = [
    {
        name: "Essential",
        price: "$499",
        description: "Perfect for individual portraits and headshots",
        features: [
            "2-hour photo session",
            "1 location",
            "20 edited digital images",
            "Online gallery",
            "Print-ready files",
            "3 days delivery",
        ],
        popular: false,
    },
    {
        name: "Professional",
        price: "$999",
        description: "Ideal for events, couples, and small businesses",
        features: [
            "4-hour photo session",
            "2 locations",
            "50 edited digital images",
            "Online gallery",
            "Print-ready files",
            "5 retouched images",
            "48-hour delivery",
            "Commercial license",
        ],
        popular: true,
    },
    {
        name: "Premium",
        price: "$1,999",
        description: "Complete coverage for weddings and large events",
        features: [
            "Full day coverage (8 hours)",
            "Multiple locations",
            "150+ edited digital images",
            "Online gallery",
            "Print-ready files",
            "15 retouched images",
            "24-hour sneak peek",
            "Commercial license",
            "Photo album design",
            "Second photographer",
        ],
        popular: false,
    },
];

const addons = [
    { name: "Extra hour of coverage", price: "+$150", icon: Clock },
    { name: "Additional retouched images (each)", price: "+$25", icon: Sparkles },
    { name: "Rush delivery (24hrs)", price: "+$200", icon: Clock },
    { name: "Second photographer", price: "+$400", icon: Users },
    { name: "Drone photography", price: "+$300", icon: Plane },
    { name: "Printed photo album", price: "+$350", icon: BookOpen },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.15,
            type: "spring" as const,
            stiffness: 100,
        },
    }),
};

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-background">
            <PageHeader
                title="Pricing"
                subtitle="Investment"
                description="Transparent pricing for quality photography that captures your vision."
            />

            {/* Packages */}
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-8 lg:grid-cols-3 perspective-1000">
                        {packages.map((pkg, i) => (
                            <motion.div
                                key={pkg.name}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ y: -16, scale: 1.02, rotateY: pkg.popular ? 0 : (i === 0 ? 3 : -3) }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className={`relative p-8 rounded-2xl border ${pkg.popular
                                    ? "border-foreground/50 bg-gradient-to-b from-foreground/10 to-foreground/5"
                                    : "border-white/10 bg-card/30"
                                    } hover:border-white/30 transition-colors group`}
                            >
                                {pkg.popular && (
                                    <motion.span
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-medium uppercase tracking-wider bg-foreground text-background rounded-full"
                                    >
                                        Most Popular
                                    </motion.span>
                                )}

                                {/* Glow effect for popular */}
                                {pkg.popular && (
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-foreground/0 via-foreground/10 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
                                )}

                                <h3
                                    className="text-2xl font-medium text-foreground"
                                    style={{ fontFamily: "var(--font-serif)" }}
                                >
                                    {pkg.name}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
                                <motion.p
                                    className="mt-6"
                                    initial={{ scale: 0.8 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                                >
                                    <span className="text-5xl font-semibold text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
                                        {pkg.price}
                                    </span>
                                </motion.p>
                                <ul className="mt-8 space-y-3">
                                    {pkg.features.map((feature, fi) => (
                                        <motion.li
                                            key={feature}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 + fi * 0.05 }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-foreground/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-foreground" />
                                            </div>
                                            <span className="text-sm text-muted-foreground">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link
                                        href="/contact"
                                        className={`mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all group/btn ${pkg.popular
                                            ? "bg-foreground text-background hover:bg-foreground/90"
                                            : "border border-white/20 bg-white/5 text-foreground hover:bg-white/10"
                                            }`}
                                    >
                                        Get Started
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Add-ons */}
            <section className="px-6 py-24 border-t border-white/10">
                <div className="mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                            Customize
                        </p>
                        <h2
                            className="text-2xl sm:text-3xl font-medium text-foreground"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            Add-On Services
                        </h2>
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {addons.map((addon, i) => (
                            <motion.div
                                key={addon.name}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                whileHover={{ scale: 1.03, x: 8 }}
                                className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-card/30 hover:bg-card/50 hover:border-white/20 transition-all cursor-default group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                    <addon.icon className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
                                </div>
                                <span className="text-foreground flex-1">{addon.name}</span>
                                <span className="text-muted-foreground font-medium">{addon.price}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ CTA */}
            <section className="px-6 py-24 border-t border-white/10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl font-medium text-foreground mb-4"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Have Questions?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground mb-8"
                    >
                        Every project is unique. Get in touch to discuss a custom package tailored to your specific needs.
                    </motion.p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all hover:bg-foreground/90 group"
                        >
                            Contact Me
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </main>
    );
}
