"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Layers,
  Clock,
  Anchor,
  BookOpen,
  Shield,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { DemoPlayground } from "@/components/DemoPlayground";

/* ─── shared easing ─── */
const ease = [0.22, 1, 0.36, 1] as const;

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease, delay },
});

const heroAnim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

/* ─── marquee items ─── */
const MARQUEE_ITEMS = [
  "Mindful browsing",
  "Intentional focus",
  "No judgment",
  "Quiet nudge",
  "Deep work",
  "Present & productive",
  "No streaks",
  "Time truly yours",
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <main className="min-h-screen relative bg-[#06090f]">

      {/* ── Dot grid layer ── */}
      <div className="fixed inset-0 dot-grid pointer-events-none z-0" />

      {/* ── Ambient orbs ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[5%] w-[1000px] h-[1000px] rounded-full bg-violet-800/10 blur-[160px] animate-pulse-slow" />
        <div className="absolute top-[35%] -right-[10%] w-[800px] h-[800px] rounded-full bg-indigo-700/8 blur-[140px] animate-float" />
        <div className="absolute bottom-[0%] left-[10%] w-[900px] h-[700px] rounded-full bg-violet-900/8 blur-[180px] animate-pulse-slow" style={{ animationDelay: "4s" }} />
      </div>

      {/* ══════════════════════════════════════
          STICKY NAVIGATION
      ══════════════════════════════════════ */}
      <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
        <nav className="nav-pill flex items-center gap-2 px-3 py-2">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 pr-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-violet-500/25 blur-md" />
              <Image
                src="/logo.png"
                alt="Tab Guru"
                width={30}
                height={30}
                className="relative rounded-xl"
              />
            </div>
            <span className="font-outfit font-bold text-[1rem] tracking-tight text-white">
              Tab<span className="text-violet-400">Guru</span>
            </span>
          </a>

          {/* Divider */}
          <span className="hidden md:block w-px h-4 bg-white/10 mx-1" />

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-1">
            {["Features", "Reflection"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 tracking-wide px-3 py-1.5 rounded-full hover:bg-white/5"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Divider */}
          <span className="hidden md:block w-px h-4 bg-white/10 mx-1" />

          {/* GitHub trust link */}
          <a
            href="https://github.com/gosrahul21/TabGuru"
            target="_blank"
            rel="noopener noreferrer"
            title="View source on GitHub"
            className="hidden md:flex items-center gap-1.5 text-slate-500 hover:text-slate-200 transition-colors duration-200 px-2.5 py-1.5 rounded-full hover:bg-white/5 text-xs font-medium"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span>Open source</span>
          </a>

          {/* CTA */}
          <a
            href="#add"
            className="btn-shimmer relative flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-[0_0_20px_rgba(139,92,246,0.45)] ml-1"
          >
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3.5c2.42 0 4.59.99 6.17 2.59L13.5 12H20c0 4.41-3.59 8-8 8s-8-3.59-8-8 3.59-8 8-8z"/></svg>
            Add to Chrome
          </a>
        </nav>
      </header>

      {/* ══════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative z-10 pt-36 lg:pt-48 pb-24 lg:pb-32 px-6 overflow-hidden lg:overflow-visible"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* ── Left Column: Text & CTAs ── */}
          <div className="flex flex-col items-start text-left relative z-20">
            {/* Background glow for text */}
            <div className="absolute -inset-20 bg-violet-900/10 blur-[100px] pointer-events-none rounded-full" />

            {/* Badge */}
            <motion.div {...heroAnim(0)} className="relative">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-[10px] font-bold mb-8 uppercase tracking-[0.2em]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
                </span>
                Mindful browsing
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...heroAnim(0.08)}
              className="font-outfit font-extrabold text-[clamp(2.4rem,5vw,4.2rem)] tracking-[-0.03em] text-white leading-[1.1] mb-6 max-w-2xl"
            >
              You opened that tab{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent">
                  for a reason.
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-violet-500/0 via-fuchsia-500/50 to-violet-500/0 blur-sm" />
              </span>
              <br />
              Come back to it.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              {...heroAnim(0.16)}
              className="text-[1.05rem] lg:text-[1.15rem] text-slate-400 leading-[1.8] max-w-xl mb-10 font-medium"
            >
              Tab Guru gently reminds you why each tab exists — so you can browse
              with purpose, not just habit. No blocking. No judgment. Just a quiet
              nudge back to what matters.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...heroAnim(0.24)}
              className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 w-full sm:w-auto mb-10 relative"
            >
              <a
                id="add"
                href="#"
                className="btn-shimmer group flex items-center justify-center gap-2.5 bg-white text-slate-900 hover:bg-slate-50 px-8 py-3.5 rounded-2xl font-bold text-[0.95rem] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,255,255,0.15),0_2px_20px_rgba(0,0,0,0.4)] w-full sm:w-auto"
              >
                Add to Chrome — it&apos;s free
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <button
                onClick={() => setShowDemo(true)}
                className="group flex items-center justify-center gap-2 text-slate-400 hover:text-white px-6 py-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] hover:border-white/[0.1] font-semibold text-[0.95rem] transition-all duration-300 w-full sm:w-auto"
              >
                Watch Demo
              </button>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              {...heroAnim(0.32)}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-500 text-[0.75rem] font-semibold uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-violet-500/70" />
                No account needed
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/70" />
                Data stays on device
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: Hero Mockup ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.35, 1], delay: 0.4 }}
            className="relative w-full max-w-[480px] mx-auto lg:ml-auto lg:mr-0 z-10"
          >
            {/* Floating animation wrapper */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative"
            >
              {/* Massive glow beneath card */}
              <div className="absolute -inset-10 bg-violet-600/20 blur-[80px] rounded-full pointer-events-none" />

              <div className="card-glow glass relative rounded-[28px] p-7 sm:p-8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] border border-white/[0.08] backdrop-blur-xl bg-[#06090f]/40">
                {/* Window chrome dots */}
                <div className="flex items-center gap-2 mb-8">
                  {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <span key={c} className="w-3 h-3 rounded-full shadow-inner" style={{ background: c, opacity: 0.9 }} />
                  ))}
                  <div className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-inner">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                    <span className="text-slate-400 text-[9px] uppercase font-bold tracking-[0.1em]">tabguru.app</span>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center mb-8">
                  <div className="relative mb-5">
                    <div className="absolute inset-0 rounded-2xl bg-violet-500/30 blur-xl scale-125 animate-pulse-slow" />
                    <Image src="/logo.png" alt="Tab Guru" width={56} height={56} className="relative rounded-2xl shadow-xl" />
                  </div>
                  <p className="text-violet-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Before you open this tab</p>
                  <h3 className="font-outfit font-extrabold text-2xl text-white tracking-tight">What&apos;s your intention?</h3>
                </div>

                <div className="space-y-4">
                  {/* Intention Input */}
                  <div className="flex items-center gap-3 bg-[#06090f]/60 border border-white/10 rounded-2xl px-4 py-3.5 shadow-inner">
                    <BookOpen className="w-4 h-4 text-violet-400 shrink-0" />
                    <span className="text-slate-200 text-[0.95rem] font-medium flex-1 text-left">Research Next.js</span>
                    <span className="w-px h-5 bg-violet-400/80 rounded-full animate-pulse" />
                  </div>

                  {/* Time Selector */}
                  <div className="flex items-center gap-3">
                    <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider shrink-0 w-14">Focus</p>
                    {[15, 30, 60].map((m) => (
                      <button
                        key={m}
                        className={`flex-1 py-3 rounded-xl font-bold text-[0.9rem] border transition-all ${
                          m === 30
                            ? "bg-violet-600 border-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                            : "bg-white/[0.02] border-white/[0.05] text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                        }`}
                      >
                        {m}m
                      </button>
                    ))}
                  </div>

                  <button className="btn-shimmer mt-2 w-full py-3.5 rounded-xl bg-white text-slate-900 font-extrabold text-[0.95rem] flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] group">
                    Begin session
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              
              {/* Decorative floating elements around the mockup */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
                className="absolute -right-6 -bottom-6 glass border border-emerald-500/20 bg-[#06090f]/60 backdrop-blur-xl px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2"
              >
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 text-xs font-bold tracking-wide">30:00 limit set</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Social proof */}
        <motion.div
          {...heroAnim(0.7)}
          className="mt-28 max-w-lg mx-auto"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="section-divider w-24" />
            <blockquote className="text-slate-500 text-sm italic font-medium leading-relaxed text-center max-w-sm">
              &ldquo;I didn&apos;t realise how unconsciously I was browsing until TabGuru showed me.&rdquo;
            </blockquote>
          </div>
        </motion.div>
      </section>

      {/* ── Marquee strip ── */}
      <div className="relative z-10 border-y border-white/[0.05] py-4 overflow-hidden">
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 px-8 text-slate-600 text-[11px] font-semibold uppercase tracking-[0.14em]"
              >
                <span className="w-1 h-1 rounded-full bg-violet-600/60 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          SECTION 2 — SCROLLYTELLING FEATURES
      ══════════════════════════════════════ */}
      <section id="features" className="relative z-10">
        {/* Section header — normal scroll */}
        <div className="py-28 px-6 text-center">
          <motion.p {...inView(0)} className="text-violet-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
            How it works
          </motion.p>
          <motion.h2
            {...inView(0.06)}
            className="font-outfit font-extrabold text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.025em] text-white mb-5"
          >
            Calm by design.
          </motion.h2>
          <motion.p {...inView(0.1)} className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Four quiet tools that work together. Scroll through each one.
          </motion.p>
        </div>

        {/* Scrollytelling features */}
        <ScrollNarrativeFeature
          accent="violet"
          label="Intention before the tab"
          headline="Being aware of your Intention."
          sentences={[
            "Most tabs open on autopilot.",
            "A flicker of curiosity, a half-formed thought — and suddenly you're somewhere you didn't plan to be.",
            "Tab Guru places a single, gentle question before every new tab opens: What's your intention here?",
            "Not to control, But to give just one moment of awareness",
          ]}
          pullQuote="Less clutter. Lighter mind."
          visual="intention"
        />
        <ScrollNarrativeFeature
          accent="emerald"
          label="Tab timers"
          headline="Time that moves with you, not against you."
          sentences={[
            "Each tab carries a timer — not as a punishment, but as a reminder that your time has shape.",
            "When the timer ends, you're simply asked: are you done, or do you need more time?",
            "You choose. Always.",
            "The timer creates a natural rhythm to your work — a soft boundary between focused effort and open-ended drifting.",
            "Add more time whenever you need it. The goal is awareness, not anxiety.",
          ]}
          pullQuote="No pressure. Just presence."
          visual="timer"
        />
        <ScrollNarrativeFeature
          accent="blue"
          label="Tab relationships"
          headline="Tabs that belong together, close together."
          sentences={[
            "A task rarely lives in one tab.",
            "Research, documentation, the issue tracker, the pull request — they're all part of the same thread of thought.",
            "Tab Guru lets you group tabs the way your mind already does: one parent task, with the tabs that support it nested beneath.",
            "With Tab - Sub Tab navigation, you are not offtrack and exausted",
            "Once the task is done, every subtab closes with it — cleanly, quietly.",
          ]}
          pullQuote="Close the task. The rest takes care of itself."
          visual="tree"
        />
        <ScrollNarrativeFeature
          accent="fuchsia"
          label="Floating focus anchor"
          headline="A gentle hand on your shoulder."
          sentences={[
            "It's easy to drift.",
            "You follow one link, then another, and ten minutes later you've forgotten what you came for.",
            "The Tab Guru modal sits quietly on your screen — small, unobtrusive, always visible.",
            "Not a blocker. Not an alarm.",
            "Just a soft reminder of the thread you were following.",
            "Drag it wherever feels right. It's there when you need it, invisible when you don't.",
          ]}
          pullQuote="Awareness doesn't have to be loud to be powerful."
          visual="anchor"
        />
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* ══════════════════════════════════════
          SECTION 3 — DAILY REFLECTION
      ══════════════════════════════════════ */}
      <section id="reflection" className="relative z-10 py-36 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-center">
            {/* Left */}
            <div>
              <motion.p {...inView(0)} className="text-violet-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
                End of day
              </motion.p>
              <motion.h2
                {...inView(0.06)}
                className="font-outfit font-extrabold text-[clamp(2rem,4.5vw,3.2rem)] tracking-[-0.025em] text-white mb-6 leading-[1.1]"
              >
                Where did your attention go today?
              </motion.h2>
              <motion.p {...inView(0.1)} className="text-slate-400 leading-[1.8] mb-5 text-[0.97rem]">
                Not to measure you. Not to score you. Just to show you — honestly
                and gently — what your day actually looked like beneath the
                surface. Tab Guru reflects back the shape of your focus.
              </motion.p>
              <motion.p {...inView(0.14)} className="text-violet-400/70 font-semibold text-sm italic mb-12">
                No streaks. No shame. Just clarity.
              </motion.p>

              {/* Stat glossary */}
              <motion.div {...inView(0.18)} className="grid grid-cols-2 gap-3">
                {[
                  { value: "Windows of intention", sub: "Tabs opened" },
                  { value: "Intentions kept", sub: "Purposes completed" },
                  { value: "Moments of wandering", sub: "Drift events" },
                  { value: "Time truly yours", sub: "Deep work" },
                ].map(({ value, sub }) => (
                  <div
                    key={value}
                    className="card-glow glass rounded-2xl p-4 group cursor-default hover:border-violet-500/20 transition-colors"
                  >
                    <p className="text-white font-semibold text-[0.82rem] font-outfit mb-1 leading-snug">{value}</p>
                    <p className="text-slate-600 text-[11px] uppercase tracking-wider">{sub}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — reflection card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-violet-600/12 blur-3xl rounded-3xl pointer-events-none" />
                <div className="relative glass rounded-[28px] p-9 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)]">

                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-slate-600 text-[10px] uppercase tracking-[0.18em] font-bold mb-1">Your day at a glance</p>
                      <p className="text-slate-400 text-xs font-medium">Thursday, Jun 19</p>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                      <BookOpen className="w-3.5 h-3.5 text-violet-400" />
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-4 mb-7">
                    {[
                      { value: "18 / 24", label: "Intentions kept", color: "text-violet-300" },
                      { value: "3h 20m", label: "Time truly yours", color: "text-emerald-300" },
                      { value: "4", label: "Moments of wandering", color: "text-amber-300" },
                      { value: "75%", label: "Intention rate", color: "text-blue-300" },
                    ].map(({ value, label, color }) => (
                      <div key={label} className="bg-white/[0.03] rounded-2xl p-4 border border-white/[0.05]">
                        <p className={`text-2xl font-extrabold font-outfit ${color} mb-1`}>{value}</p>
                        <p className="text-slate-600 text-[11px] font-medium leading-snug">{label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Arc progress bar */}
                  <div className="mb-7">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-slate-500 text-[11px] font-semibold uppercase tracking-wider">Focus flow</span>
                      <span className="text-violet-400 text-xs font-bold">75%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500"
                      />
                    </div>
                  </div>

                  {/* Reflection prompt */}
                  <div className="rounded-2xl border border-violet-500/18 bg-violet-500/8 p-5">
                    <p className="text-slate-300 text-sm leading-[1.75] font-medium">
                      You completed{" "}
                      <span className="text-violet-300 font-semibold">18 of 24 intentions</span> today.
                      <br />
                      You wandered 4 times.{" "}
                      <span className="text-slate-500">That&apos;s okay.</span>
                      <br />
                      <span className="text-emerald-400 font-semibold">3 hours and 20 minutes</span>{" "}
                      were deeply yours.
                    </p>
                  </div>

                  <p className="text-slate-700 text-[11px] font-medium mt-5 leading-relaxed">
                    Every day is a chance to understand yourself a little better. Tab Guru keeps the record so you don&apos;t have to.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — CLOSING CTA
      ══════════════════════════════════════ */}
      <section className="relative z-10 py-44 px-6">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-700/12 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative">
          <motion.p {...inView(0)} className="text-violet-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-7">
            Join the beta
          </motion.p>

          <motion.h2
            {...inView(0.06)}
            className="font-outfit font-extrabold text-[clamp(2.4rem,6vw,4.5rem)] tracking-[-0.03em] text-white mb-7 leading-[1.05]"
          >
            Your mind deserves a little more{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400 bg-clip-text text-transparent">
              peace.
            </span>
          </motion.h2>

          <motion.p
            {...inView(0.1)}
            className="text-slate-400 text-[1.05rem] leading-[1.8] max-w-xl mx-auto mb-12"
          >
            Browsing doesn&apos;t have to feel scattered and guilty. It can feel
            grounded, purposeful, and yours. Tab Guru won&apos;t transform you
            overnight — but it will give you something rare. A moment of
            awareness, every single time, before the drift begins.
          </motion.p>

          <motion.div
            {...inView(0.14)}
            className="cta-glow flex flex-col items-center gap-5"
          >
            <a
              href="#"
              className="btn-shimmer group flex items-center gap-3 bg-white text-slate-900 hover:bg-slate-50 px-10 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_60px_rgba(255,255,255,0.12),0_4px_40px_rgba(0,0,0,0.5)]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3.5c2.42 0 4.59.99 6.17 2.59L13.5 12H20c0 4.41-3.59 8-8 8s-8-3.59-8-8 3.59-8 8-8z"/></svg>
              Add to Chrome — free, always
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <p className="text-slate-700 text-sm font-medium tracking-wide">
              No account. No tracking. Just you and your intentions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/[0.05] bg-[#04070e] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Tab Guru" width={28} height={28} className="rounded-lg opacity-60" />
            <span className="font-outfit font-bold text-base text-white/50 tracking-tight">TabGuru</span>
          </div>
          <p className="text-slate-700 text-xs font-medium tracking-wide">
            Built for people who want to be a little more present.
          </p>
          <div className="flex gap-7">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a key={link} href="#" className="text-slate-700 hover:text-slate-300 transition-colors text-xs font-medium tracking-wide">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
      {/* ── Demo Playground Overlay ── */}
      {showDemo && <DemoPlayground onClose={() => setShowDemo(false)} />}
    </main>
  );
}

/* ══════════════════════════════════════════════════════════
   SCROLLYTELLING — SCROLL NARRATIVE FEATURE
   Pattern: tall outer wrapper → sticky inner panel → sentences
   reveal sentence-by-sentence driven by scroll progress
══════════════════════════════════════════════════════════ */

type Accent = "violet" | "emerald" | "blue" | "fuchsia";
type Visual = "intention" | "timer" | "tree" | "anchor";

const accentColors: Record<Accent, { text: string; bg: string; border: string; glow: string; highlight: string }> = {
  violet:  { text: "text-violet-400",  bg: "bg-violet-500/10",  border: "border-violet-500/20",  glow: "bg-violet-600/10",  highlight: "text-violet-200"  },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "bg-emerald-600/10", highlight: "text-emerald-100" },
  blue:    { text: "text-blue-400",    bg: "bg-blue-500/10",    border: "border-blue-500/20",    glow: "bg-blue-600/10",    highlight: "text-blue-100"    },
  fuchsia: { text: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20", glow: "bg-fuchsia-600/10", highlight: "text-fuchsia-100" },
};

/**
 * ScrollNarrativeFeature
 * ────────────────────────────────────────────────
 * Creates a tall scroll container so the user scrolls
 * through N sentences. One sentence is highlighted at a
 * time; the visual mockup stays pinned on the right.
 *
 * Scroll math:
 *  - outer height = 100vh + (N * stepVh)vh
 *  - progress 0→1 maps to sentence index 0→N-1
 */
function ScrollNarrativeFeature({
  accent,
  label,
  headline,
  sentences,
  pullQuote,
  visual,
}: {
  accent: Accent;
  label: string;
  headline: string;
  sentences: string[];
  pullQuote: string;
  visual: Visual;
}) {
  const a = accentColors[accent];
  const [activeIndex, setActiveIndex] = useState(0);
  // One ref per sentence sentinel div
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // rootMargin shrinks the observation area to the middle ~20% of the viewport.
    // When a sentinel enters this zone, its sentence becomes active.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(
              entry.target.getAttribute("data-index") ?? "0",
              10
            );
            setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sentinelRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Each sentence gets 100vh of scroll travel. The sticky panel occupies 0 extra space.
  const N = sentences.length;

  return (
    // Outer: tall enough so each sentence step has 100vh to scroll through
    <div style={{ height: `${N * 100}vh` }} className="relative">

      {/* ── Invisible sentinel divs — one per sentence ── */}
      {sentences.map((_, i) => (
        <div
          key={i}
          data-index={i}
          ref={(el) => { sentinelRefs.current[i] = el; }}
          aria-hidden="true"
          className="absolute left-0 right-0 h-screen"
          style={{ top: `${i * 100}vh` }}
        />
      ))}

      {/* ── Sticky panel — stays pinned while sentinels scroll past ── */}
      <div className="sticky top-0 h-screen z-10 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: text panel ── */}
          <div>
            {/* Label badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${a.bg} border ${a.border} mb-6`}>
              <span className={`text-[10px] font-bold uppercase tracking-[0.16em] ${a.text}`}>{label}</span>
            </div>

            {/* Headline */}
            <h3 className="font-outfit font-extrabold text-[clamp(1.7rem,3.5vw,2.4rem)] tracking-[-0.025em] text-white mb-10 leading-[1.15]">
              {headline}
            </h3>

            {/* Sentences — highlight active, dim others */}
            <div className="space-y-5 mb-10">
              {sentences.map((sentence, i) => {
                const isPast   = i < activeIndex;
                const isActive = i === activeIndex;
                const isFuture = i > activeIndex;
                return (
                  <motion.p
                    key={i}
                    animate={{
                      opacity: isActive ? 1 : isPast ? 0.25 : 0.1,
                      scale:   isActive ? 1 : 0.97,
                      y:       isFuture ? 8 : 0,
                      filter:  isActive ? "blur(0px)" : "blur(0.5px)",
                    }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.35, 1] }}
                    className={`text-[1.05rem] leading-[1.8] font-medium cursor-default select-none ${
                      isActive ? `${a.highlight}` : "text-slate-500"
                    }`}
                  >
                    {isActive && (
                      <span
                        className={`inline-block w-1.5 h-1.5 rounded-full mr-3 align-middle ${a.text.replace("text-", "bg-")} opacity-90`}
                      />
                    )}
                    {sentence}
                  </motion.p>
                );
              })}
            </div>

            {/* Pull quote — fades in on last sentence */}
            <motion.div
              animate={{
                opacity: activeIndex === sentences.length - 1 ? 1 : 0,
                y:       activeIndex === sentences.length - 1 ? 0 : 10,
              }}
              transition={{ duration: 0.5 }}
              className={`border-l-2 ${a.border} pl-5`}
            >
              <p className={`text-sm font-semibold italic ${a.text}`}>{pullQuote}</p>
            </motion.div>
          </div>

          {/* ── Right: visual mockup (pinned) ── */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className={`absolute -inset-6 ${a.glow} blur-3xl rounded-3xl pointer-events-none opacity-50`} />
              <div className="card-glow glass rounded-[24px] p-7 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.05)]">
                {visual === "intention" && <IntentionMockup />}
                {visual === "timer"     && <TimerMockup />}
                {visual === "tree"      && <TreeMockup />}
                {visual === "anchor"    && <AnchorMockup />}
              </div>
            </div>
          </div>

        </div>

        {/* Right edge progress dots */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 hidden xl:flex">
          {sentences.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? `w-1.5 h-5 ${a.text.replace("text-", "bg-")}`
                  : i < activeIndex
                  ? "w-1 h-1 bg-white/20"
                  : "w-1 h-1 bg-white/8"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Mockup: Intention input ─────────────────────────── */
function IntentionMockup() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.16em] font-bold">New tab</p>
        <div className="flex gap-1.5">
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <span key={c} className="w-2.5 h-2.5 rounded-full opacity-50" style={{ background: c }} />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-3.5">
        <BookOpen className="w-4 h-4 text-violet-400 shrink-0" />
        <span className="text-slate-300 text-sm flex-1">What are you here to do?</span>
        <span className="w-px h-4 bg-violet-400 animate-pulse" />
      </div>

      <div className="flex gap-2.5">
        {[15, 30, 60].map((m) => (
          <div
            key={m}
            className={`flex-1 text-center py-2.5 rounded-xl font-bold text-xs border ${
              m === 30
                ? "bg-violet-600 border-violet-500 text-white shadow-[0_0_12px_rgba(139,92,246,0.4)]"
                : "bg-white/[0.03] border-white/[0.06] text-slate-500"
            }`}
          >
            {m}m
          </div>
        ))}
      </div>

      <button className="w-full py-3 rounded-xl bg-white text-slate-900 font-bold text-sm flex items-center justify-center gap-2">
        Begin <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

/* ── Mockup: Timer ring ───────────────────────────────── */
function TimerMockup() {
  return (
    <div className="flex flex-col items-center gap-5">
      <p className="text-slate-600 text-[10px] uppercase tracking-[0.16em] font-bold self-start">Active focus</p>

      <div className="relative w-36 h-36">
        {/* SVG arc */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
          <motion.circle
            cx="50" cy="50" r="44"
            fill="none"
            stroke="url(#arcGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="276.46"
            initial={{ strokeDashoffset: 276.46 }}
            whileInView={{ strokeDashoffset: 276.46 * 0.2 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />
          <defs>
            <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#6ee7b7" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-outfit font-extrabold text-2xl text-white leading-none">24:00</span>
          <span className="text-slate-600 text-[9px] uppercase tracking-wider mt-1">remaining</span>
        </div>
      </div>

      <p className="text-slate-400 text-sm font-medium text-center">Research Next.js server actions</p>

      <div className="flex gap-3 w-full">
        <button className="flex-1 py-2.5 rounded-xl border border-white/8 text-slate-400 text-xs font-semibold">
          + More time
        </button>
        <button className="flex-1 py-2.5 rounded-xl bg-emerald-600/18 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
          Done ✓
        </button>
      </div>
    </div>
  );
}

/* ── Mockup: Tab tree ────────────────────────────────── */
function TreeMockup() {
  const tabs = [
    { title: "Ship v2.1 release", depth: 0, color: "violet", done: false },
    { title: "GitHub PR #204", depth: 1, color: "blue", done: true },
    { title: "Docs — release notes", depth: 1, color: "blue", done: false },
    { title: "Issue tracker", depth: 1, color: "blue", done: false },
  ];
  return (
    <div>
      <p className="text-slate-600 text-[10px] uppercase tracking-[0.16em] font-bold mb-5">Task tree</p>
      <div className="space-y-2.5">
        {tabs.map(({ title, depth, color, done }) => (
          <div key={title} className={`flex items-center gap-2.5 ${depth ? "ml-6" : ""}`}>
            {depth > 0 && <div className="w-3 h-px bg-white/10 shrink-0" />}
            <div className={`flex-1 flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 border transition-all ${
              depth === 0
                ? "bg-violet-500/8 border-violet-500/20"
                : "bg-white/[0.03] border-white/[0.05]"
            }`}>
              <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${color === "violet" ? "bg-violet-400" : "bg-blue-400"}`} />
              <span className={`text-sm font-medium flex-1 ${done ? "line-through text-slate-600" : "text-slate-200"}`}>{title}</span>
              {done && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/60 shrink-0" />}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-white/[0.05] flex justify-between items-center">
        <span className="text-slate-700 text-[11px]">3 tabs remaining</span>
        <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-violet-600/15 border border-violet-500/25 text-violet-400 text-xs font-bold">
          Close all <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

/* ── Mockup: Floating anchor ─────────────────────────── */
function AnchorMockup() {
  return (
    <div className="relative h-52 rounded-2xl overflow-hidden bg-[#080e1c] border border-white/[0.04]">
      {/* Simulated page */}
      <div className="absolute inset-0 p-5 space-y-3">
        <div className="h-3 bg-white/[0.04] rounded-full w-4/5" />
        <div className="h-3 bg-white/[0.04] rounded-full w-3/5" />
        <div className="h-3 bg-white/[0.04] rounded-full w-4/5" />
        <div className="h-3 bg-white/[0.03] rounded-full w-2/5 mt-2" />
        <div className="h-3 bg-white/[0.03] rounded-full w-3/4" />
        <div className="h-3 bg-white/[0.03] rounded-full w-1/2" />
      </div>

      {/* Floating anchor widget */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        className="absolute bottom-5 right-5 glass rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center gap-3 border-violet-500/25"
      >
        <div className="w-7 h-7 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
          <Anchor className="w-3.5 h-3.5 text-violet-400" />
        </div>
        <div>
          <p className="text-[9px] uppercase font-bold text-slate-600 tracking-wider">Your intention</p>
          <p className="text-xs font-semibold text-slate-200">Review the PR</p>
        </div>
        <div className="ml-2 text-right">
          <p className="font-mono text-xs font-bold text-emerald-400">18:42</p>
          <p className="text-[9px] text-slate-700">remaining</p>
        </div>
      </motion.div>

      {/* Drift warning */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, ease }}
        className="absolute top-4 left-4 flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-xl px-3 py-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        <span className="text-amber-400/80 text-[10px] font-semibold">You may be drifting</span>
      </motion.div>
    </div>
  );
}
