"use client";

import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  User,
  PartyPopper,
  Package,
  Mountain,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// Sample portfolio items
const portfolioItems = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    alt: "Mountain landscape at sunrise",
    title: "Alpine Sunrise",
    category: "Landscape",
    size: "large" as const,
    exif: { camera: "Sony A7R IV", aperture: "f/8", shutter: "1/250s", iso: "100" },
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80",
    alt: "City at night",
    title: "Urban Nights",
    category: "Urban",
    size: "medium" as const,
    exif: { camera: "Canon R5", aperture: "f/2.8", shutter: "1/60s", iso: "3200" },
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    alt: "Forest path",
    title: "Into the Wild",
    category: "Nature",
    size: "small" as const,
    exif: { camera: "Nikon Z7", aperture: "f/4", shutter: "1/125s", iso: "400" },
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    alt: "Waterfall",
    title: "Cascading Dreams",
    category: "Nature",
    size: "tall" as const,
    exif: { camera: "Sony A7R IV", aperture: "f/11", shutter: "2s", iso: "50" },
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
    alt: "Misty mountains",
    title: "Morning Mist",
    category: "Landscape",
    size: "wide" as const,
    exif: { camera: "Canon R5", aperture: "f/8", shutter: "1/500s", iso: "200" },
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
    alt: "Autumn forest",
    title: "Golden Hour",
    category: "Nature",
    size: "small" as const,
    exif: { camera: "Fujifilm X-T5", aperture: "f/5.6", shutter: "1/200s", iso: "160" },
  },
];

// Services section
const services = [
  { title: "Portrait Sessions", description: "Professional headshots and personal portraits", icon: User, color: "from-pink-500/20 to-rose-500/20" },
  { title: "Event Coverage", description: "Weddings, corporate events, and celebrations", icon: PartyPopper, color: "from-purple-500/20 to-violet-500/20" },
  { title: "Commercial Work", description: "Product photography and brand campaigns", icon: Package, color: "from-blue-500/20 to-cyan-500/20" },
  { title: "Landscape Art", description: "Fine art prints for collectors", icon: Mountain, color: "from-green-500/20 to-emerald-500/20" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero
        name="Alex Morgan"
        tagline="Visual Storyteller"
        description="Capturing authentic moments and creating timeless imagery that tells your unique story."
        photographerImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90"
        backgroundImage="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=90"
      />

      {/* Featured Works */}
      <BentoGrid items={portfolioItems} />

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground"
            >
              Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              What I Offer
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative p-8 rounded-2xl border border-white/10 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-white/20 transition-all overflow-hidden cursor-default"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors"
                  >
                    <service.icon className="w-7 h-7 text-foreground/70 group-hover:text-foreground transition-colors" />
                  </motion.div>
                  <h3
                    className="text-xl font-medium text-foreground mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                View Pricing
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-white/10 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/0 via-foreground/5 to-foreground/0" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 mx-auto mb-8 rounded-full bg-white/5 flex items-center justify-center"
          >
            <Sparkles className="w-8 h-8 text-foreground/80" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Let&apos;s Create Something Beautiful Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Ready to capture your special moments? Get in touch and let&apos;s discuss your vision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-10 py-4 text-base font-medium text-background transition-all hover:bg-foreground/90 group"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
