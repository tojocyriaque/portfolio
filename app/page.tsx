'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { projects, posts, skills, stats } from '@/data/content';
import { HeroScene } from '@/components/HeroScene';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function HomePage() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const activeSection = useMemo(() => {
    if (typeof window === 'undefined') return 'home';
    const offsets = sections.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return { id, top: 0 };
      return { id, top: el.getBoundingClientRect().top + window.scrollY - 120 };
    });
    const current = offsets.findLast((item) => item.top <= window.scrollY) ?? offsets[0];
    return current?.id ?? 'home';
  }, []);

  return (
    <main ref={containerRef} className="relative overflow-x-hidden">
      <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-4">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 backdrop-blur-xl">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`rounded-full px-3 py-1.5 text-sm transition ${activeSection === section.id ? 'bg-white text-midnight' : 'text-slate-300 hover:text-white'}`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="home" className="relative flex min-h-screen items-center justify-center px-6 py-24 sm:px-10 lg:px-16">
        <motion.div style={{ y }} className="absolute inset-0 -z-10">
          <HeroScene />
        </motion.div>
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" /> Developer • Data • Creative tech
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="text-5xl font-semibold leading-[0.95] sm:text-6xl lg:text-8xl">
              Building luminous interfaces for complex ideas.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="max-w-xl text-lg text-slate-300">
              I design and ship cinematic digital experiences blending product thinking, data storytelling, and immersive front-end engineering.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-midnight transition hover:scale-105">Explore work</a>
              <a href="#contact" className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:text-cyan-200">Let&apos;s talk</a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="w-full max-w-md rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-neon backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Current focus</p>
            <div className="mt-6 space-y-6">
              {stats.map((item) => (
                <div key={item.label} className="flex items-end justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-3xl font-semibold">{item.value}</p>
                    <p className="text-sm text-slate-400">{item.label}</p>
                  </div>
                  <span className="text-sm text-cyan-300">{item.meta}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24 sm:px-10 lg:px-16">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">About me</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">I translate complex systems into vivid, usable experiences.</h2>
          <p className="text-lg text-slate-300">I&apos;m a builder at the edge of product, data, and design — shaping interfaces that feel alive, with a strong focus on clarity, motion, and narrative.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-neon backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Core stack</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">{skill}</span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Signal</p>
            <p className="mt-4 text-2xl font-semibold leading-relaxed">“Designing systems that feel like future products, not legacy websites.”</p>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Projects</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Selected experiments</h2>
          </div>
          <a href="#contact" className="text-sm text-slate-400 transition hover:text-white">Request a case study</a>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 shadow-neon backdrop-blur-xl">
              <div className="h-44 bg-gradient-to-br from-cyan-500/30 via-transparent to-fuchsia-500/20 p-6">
                <div className="flex h-full items-end justify-between rounded-[1.3rem] border border-white/10 bg-slate-950/60 p-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                  </div>
                  <span className="rounded-full border border-cyan-400/30 px-3 py-1 text-xs text-cyan-200">{project.year}</span>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <p className="text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Blog</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Notes on systems, interfaces, and motion</h2>
          </div>
          <a href="#contact" className="text-sm text-slate-400 transition hover:text-white">Subscribe</a>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <motion.article key={post.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-neon backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{post.date}</p>
              <h3 className="mt-3 text-2xl font-semibold">{post.title}</h3>
              <p className="mt-4 text-slate-300">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-cyan-200">{post.category}</span>
                <span className="text-sm text-slate-400">Read more →</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 to-fuchsia-500/10 p-8 shadow-neon backdrop-blur-xl sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Let&apos;s build something that feels impossible until it ships.</h2>
              <p className="mt-4 text-lg text-slate-300">Open to collaborations, product design, front-end engineering, and data-driven storytelling.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <p className="text-slate-400">Email</p>
                  <a href="mailto:hello@aster.dev" className="text-white transition hover:text-cyan-200">hello@aster.dev</a>
                </div>
                <div>
                  <p className="text-slate-400">Social</p>
                  <div className="flex gap-4">
                    <a href="https://github.com" className="transition hover:text-cyan-200">GitHub</a>
                    <a href="https://linkedin.com" className="transition hover:text-cyan-200">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
