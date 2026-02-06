"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Instagram,
    Twitter,
    Linkedin,
    Youtube,
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
    Heart,
} from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Works", href: "/works" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
];

const socialLinks = [
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "YouTube", href: "https://youtube.com", icon: Youtube },
];

const contactInfo = [
    { icon: Mail, value: "hello@lenscraft.studio", href: "mailto:hello@lenscraft.studio" },
    { icon: Phone, value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, value: "New York City, USA" },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 lg:grid-cols-4">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <Link href="/" className="inline-block">
                            <motion.h2
                                whileHover={{ scale: 1.05 }}
                                className="text-2xl font-semibold tracking-tight text-foreground"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                LensCraft
                            </motion.h2>
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                            Capturing life&apos;s most precious moments through the art of
                            photography. Based in NYC, available worldwide.
                        </p>
                        <div className="mt-6 flex gap-3">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-white/30 hover:bg-white/10 hover:text-foreground"
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-4 w-4" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Navigation
                        </h3>
                        <ul className="mt-6 space-y-3">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.name}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Get in Touch
                        </h3>
                        <div className="mt-6 space-y-4">
                            {contactInfo.map((item, i) => (
                                <motion.div
                                    key={item.value}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                        <item.icon className="w-4 h-4 text-foreground/70 group-hover:text-foreground transition-colors" />
                                    </div>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span className="text-sm text-muted-foreground">{item.value}</span>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row"
                >
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} LensCraft. All rights reserved.
                    </p>
                    <p className="flex items-center gap-1 text-sm text-muted-foreground">
                        Developed by <Heart className="w-4 h-4 text-red-500 fill-red-500" /> Muntasir Islam
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
