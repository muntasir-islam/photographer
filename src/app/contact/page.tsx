"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Loader2,
    CheckCircle2,
    Instagram,
    Linkedin,
    Globe,
    Clock,
} from "lucide-react";

interface FormState {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

const services = [
    "Portrait Session",
    "Wedding Photography",
    "Event Coverage",
    "Commercial/Product",
    "Other",
];

const socialLinks = [
    { name: "Instagram", handle: "@lenscraft", href: "https://instagram.com", icon: Instagram },
    { name: "Behance", handle: "lenscraft", href: "https://behance.net", icon: Globe },
    { name: "LinkedIn", handle: "Alex Morgan", href: "https://linkedin.com", icon: Linkedin },
];

const inputVariants = {
    focus: { scale: 1.02, borderColor: "rgba(255,255,255,0.3)" },
    blur: { scale: 1, borderColor: "rgba(255,255,255,0.1)" },
};

export default function ContactPage() {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [errors, setErrors] = useState<Partial<FormState>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const validateForm = () => {
        const newErrors: Partial<FormState> = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!form.message.trim()) newErrors.message = "Message is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
    };

    return (
        <main className="min-h-screen bg-background">
            <PageHeader
                title="Get in Touch"
                subtitle="Contact"
                description="Let's discuss your project and bring your vision to life."
            />

            <section className="px-6 pb-24">
                <div className="mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        className="p-8 rounded-2xl border border-white/10 bg-card/30 text-center"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                            className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
                                        >
                                            <CheckCircle2 className="w-10 h-10 text-green-500" />
                                        </motion.div>
                                        <h3
                                            className="text-2xl font-medium text-foreground mb-2"
                                            style={{ fontFamily: "var(--font-serif)" }}
                                        >
                                            Thank You!
                                        </h3>
                                        <p className="text-muted-foreground mb-6">
                                            Your message has been sent. I&apos;ll get back to you within 24 hours.
                                        </p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setIsSuccess(false)}
                                            className="text-sm text-foreground underline underline-offset-4 hover:text-white transition-colors"
                                        >
                                            Send another message
                                        </motion.button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <motion.div
                                            animate={focusedField === "name" ? "focus" : "blur"}
                                            variants={inputVariants}
                                        >
                                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                onFocus={() => setFocusedField("name")}
                                                onBlur={() => setFocusedField(null)}
                                                className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.name ? "border-red-500" : "border-white/10"
                                                    } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/30 transition-all`}
                                                placeholder="Your name"
                                            />
                                            <AnimatePresence>
                                                {errors.name && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="mt-1 text-sm text-red-400"
                                                    >
                                                        {errors.name}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <motion.div
                                                animate={focusedField === "email" ? "focus" : "blur"}
                                                variants={inputVariants}
                                            >
                                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={form.email}
                                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                    onFocus={() => setFocusedField("email")}
                                                    onBlur={() => setFocusedField(null)}
                                                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.email ? "border-red-500" : "border-white/10"
                                                        } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/30 transition-all`}
                                                    placeholder="you@example.com"
                                                />
                                                <AnimatePresence>
                                                    {errors.email && (
                                                        <motion.p
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            className="mt-1 text-sm text-red-400"
                                                        >
                                                            {errors.email}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                            <motion.div
                                                animate={focusedField === "phone" ? "focus" : "blur"}
                                                variants={inputVariants}
                                            >
                                                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                                                    Phone
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    value={form.phone}
                                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                                    onFocus={() => setFocusedField("phone")}
                                                    onBlur={() => setFocusedField(null)}
                                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/30 transition-all"
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </motion.div>
                                        </div>

                                        <div>
                                            <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                                                Service Type
                                            </label>
                                            <select
                                                id="service"
                                                value={form.service}
                                                onChange={(e) => setForm({ ...form, service: e.target.value })}
                                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground focus:outline-none focus:border-white/30 transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" className="bg-background">Select a service</option>
                                                {services.map((service) => (
                                                    <option key={service} value={service} className="bg-background">
                                                        {service}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <motion.div
                                            animate={focusedField === "message" ? "focus" : "blur"}
                                            variants={inputVariants}
                                        >
                                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                rows={5}
                                                value={form.message}
                                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                onFocus={() => setFocusedField("message")}
                                                onBlur={() => setFocusedField(null)}
                                                className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.message ? "border-red-500" : "border-white/10"
                                                    } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/30 transition-all resize-none`}
                                                placeholder="Tell me about your project..."
                                            />
                                            <AnimatePresence>
                                                {errors.message && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="mt-1 text-sm text-red-400"
                                                    >
                                                        {errors.message}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-all hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-12"
                        >
                            <div>
                                <h3
                                    className="text-xl font-medium text-foreground mb-6"
                                    style={{ fontFamily: "var(--font-serif)" }}
                                >
                                    Contact Information
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { icon: Mail, label: "Email", value: "hello@lenscraft.studio", href: "mailto:hello@lenscraft.studio" },
                                        { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                                        { icon: MapPin, label: "Location", value: "New York City, USA", subtext: "Available for travel worldwide" },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={item.label}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            whileHover={{ x: 8 }}
                                            className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-card/30 hover:bg-card/50 hover:border-white/20 transition-all group cursor-default"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                                <item.icon className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">{item.label}</p>
                                                {item.href ? (
                                                    <a href={item.href} className="text-foreground hover:text-white transition-colors">
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-foreground">{item.value}</p>
                                                )}
                                                {item.subtext && <p className="text-sm text-muted-foreground">{item.subtext}</p>}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3
                                    className="text-xl font-medium text-foreground mb-6"
                                    style={{ fontFamily: "var(--font-serif)" }}
                                >
                                    Follow Along
                                </h3>
                                <div className="space-y-3">
                                    {socialLinks.map((social, i) => (
                                        <motion.a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            whileHover={{ x: 8, scale: 1.02 }}
                                            className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-card/30 hover:bg-card/50 hover:border-white/20 transition-all group"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                                <social.icon className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
                                            </div>
                                            <span className="text-foreground font-medium flex-1">{social.name}</span>
                                            <span className="text-muted-foreground">{social.handle}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                                className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-card/50 to-card/30 group cursor-default"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <Clock className="w-5 h-5 text-foreground/70" />
                                    <h4 className="text-lg font-medium text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
                                        Response Time
                                    </h4>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    I typically respond within 24 hours. For urgent inquiries, please call directly.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
