'use client';
import React from "react";
import { motion } from "framer-motion";

const Proof = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-[16px] border border-white/10 p-4">
    <div className="text-xs tracking-widest text-[#00C7E3] uppercase">{label}</div>
    <div className="mt-1 text-sm text-white/90">{value}</div>
  </div>
);

export default function VALISCILanding() {
  return (
    <div className="min-h-screen bg-[#111111] text-white antialiased">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#111111]/70">
        <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#111111] to-[#00C7E3]"/>
            <span className="tracking-[0.2em] text-sm text-gray-200">VALISCI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#doctrine" className="hover:text-white">Doctrine</a>
            <a href="#ethos" className="hover:text-white">Ethos</a>
            <a href="#systems" className="hover:text-white">Systems</a>
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#brief" className="hover:text-white">Brief</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-[16px] bg-[#00C7E3] text-[#111111] font-medium focus-ring active:translate-y-px transition">Initiate</a>
        </div>
      </header>
      <main id="main">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" aria-hidden>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl" style={{ background: "radial-gradient(closest-side, #00C7E3, transparent)" }} />
        </div>
        <div className="mx-auto max-w-[1200px] px-6 pt-28 pb-24">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[49px] md:text-[61px] font-light tracking-tight text-white/95" style={{ letterSpacing: "-0.015em", lineHeight: 1.15 }}>
            Precision through <span className="text-white">Discernment</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.05 }} className="mt-4 max-w-2xl text-white/80">
            VALISCI enables confident decisions in environments defined by complexity. We transform intelligence into clarity, so leadership can act without hesitation.
          </motion.p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="px-5 py-3 rounded-[16px] bg-[#00C7E3] text-[#111111] font-medium focus-ring active:translate-y-px transition">Engage the Office</a>
            <a href="#brief" className="px-5 py-3 rounded-[16px] border border-white/20 text-white/90 hover:bg-white/5 focus-ring active:translate-y-px transition">Download Executive Brief</a>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Proof label="Proof" value="Clarity at speed: 15‑minute executive induction." />
            <Proof label="Model" value="Confidence = Clarity × Consistency × Composure." />
            <Proof label="Assurance" value="Reduced motion, AAA focus states, measurable outcomes." />
          </div>
        </div>
      </section>
      <section id="doctrine" className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-28 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h2 className="text-[31px] font-medium" style={{ letterSpacing: "-0.015em" }}>Doctrine</h2>
            <p className="mt-3 text-white/80">Precision is the geometry of intelligence. Through structure and awareness, we reveal meaning. Discernment is how intelligence becomes human.</p>
            <div className="mt-6"><Proof label="Model" value="Perception → Understanding → Command." /></div>
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-6 md:grid-cols-3">
              {[{title: "Perception", body: "See patterns inside noise."},{title: "Understanding", body: "Structure information into clarity."},{title: "Command", body: "Decide without hesitation."},].map((c, i) => (
                <div key={i} className="rounded-[24px] border border-white/10 p-6">
                  <div className="text-sm text-[#00C7E3] tracking-wider">{c.title}</div>
                  <div className="mt-2 text-sm text-white/80">{c.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="ethos" className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-28 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h2 className="text-[31px] font-medium" style={{ letterSpacing: "-0.015em" }}>Ethos</h2>
            <p className="mt-3 text-white/80">Enabling Confident Decisions. We build systems that create understanding before action—clarity, consistency, composure.</p>
            <div className="mt-6"><Proof label="Proof" value="WCAG 2.2 AA patterns; focus order mirrors DOM." /></div>
          </div>
          <div className="md:col-span-7 grid gap-6">
            <div className="rounded-[24px] border border-white/10 p-6">
              <div className="text-sm text-gray-400">Tone</div>
              <div className="mt-1 text-sm text-white/90">Calm authority. Executive cadence. Silence before signal.</div>
            </div>
            <div className="rounded-[24px] border border-white/10 p-6">
              <div className="text-sm text-gray-400">Color</div>
              <div className="mt-1 text-sm text-white/90">Graphite, Spectral Cyan, Signal White. Color as signal—not decoration.</div>
            </div>
          </div>
        </div>
      </section>
      <section id="systems" className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-28">
          <h2 className="text-[31px] font-medium" style={{ letterSpacing: "-0.015em" }}>Systems</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[{name: "Discernment Engine", copy: "Input → Sensing → Structuring → Synthesis → Command."},{name: "Confidence Index", copy: "Confidence = Clarity × Consistency × Composure."},{name: "Design Language System", copy: "Geometry as Logic. Color as Signal. Motion as Meaning."},].map((s, i) => (
              <div key={i} className="rounded-[24px] border border-white/10 p-6">
                <div className="text-sm text-[#00C7E3] tracking-wider">{s.name}</div>
                <div className="mt-2 text-sm text-white/80">{s.copy}</div>
              </div>
            ))}
          </div>
          <div className="mt-6"><Proof label="Outcome" value="Decisions without hesitation; measurable reduction in time‑to‑clarity." /></div>
        </div>
      </section>
      <section id="industries" className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-28">
          <h2 className="text-[31px] font-medium" style={{ letterSpacing: "-0.015em" }}>Industries</h2>
          <p className="mt-3 text-white/80 max-w-3xl">We partner with leaders where complexity is high and precision compounds outcomes: financial systems, advanced manufacturing, healthcare, critical infrastructure, and sovereign projects.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {['Finance','Manufacturing','Healthcare','Infrastructure','Sovereign'].map((t, i) => (
              <div key={i} className="rounded-[24px] border border-white/10 p-4 text-center text-sm text-white/80">{t}</div>
            ))}
          </div>
        </div>
      </section>
      <section id="brief" className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-28 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <h3 className="text-[25px] md:text-[31px] font-medium" style={{ letterSpacing: "-0.015em" }}>Executive Brief</h3>
            <p className="mt-3 text-white/80 max-w-2xl">A concise public overview—doctrine, identity, systems—in 2–3 pages. Built for decision‑makers who need signal, not volume.</p>
            <div className="mt-6 flex gap-4">
              <a className="px-5 py-3 rounded-[16px] bg-[#00C7E3] text-[#111111] font-medium focus-ring active:translate-y-px transition" href="/valisci-executive-brief-v1.pdf">Download Brief (PDF)</a>
              <a className="px-5 py-3 rounded-[16px] border border-white/20 focus-ring active:translate-y-px transition" href="#contact">Request Briefing</a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-[24px] border border-white/10 p-6">
              <div className="text-sm text-gray-400">Contents</div>
              <div className="mt-2 text-sm text-white/90">1) Doctrine  2) Identity  3) Systems overview  4) Engagement paths</div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-28 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-6">
            <h3 className="text-[25px] md:text-[31px] font-medium" style={{ letterSpacing: "-0.015em" }}>Initiate a Conversation</h3>
            <p className="mt-3 text-white/80">For founders, ministers, and operators leading in complexity. One page, one brief, one decision.</p>
            <form className="mt-6 grid gap-3" onSubmit={(e)=>e.preventDefault()}>
              <input className="rounded-[12px] bg-white/5 border border-white/10 px-4 py-3 placeholder:text-gray-500 focus-ring" placeholder="Name" />
              <input className="rounded-[12px] bg-white/5 border border-white/10 px-4 py-3 placeholder:text-gray-500 focus-ring" placeholder="Email" />
              <input className="rounded-[12px] bg-white/5 border border-white/10 px-4 py-3 placeholder:text-gray-500 focus-ring" placeholder="Organization" />
              <textarea className="rounded-[12px] bg-white/5 border border-white/10 px-4 py-3 placeholder:text-gray-500 focus-ring" rows={4} placeholder="Context / Objective" />
              <button type="submit" className="rounded-[16px] bg-[#00C7E3] text-[#111111] font-medium px-5 py-3 focus-ring active:translate-y-px transition">Request Briefing</button>
            </form>
          </div>
          <div className="md:col-span-6">
            <div className="rounded-[24px] border border-white/10 p-6">
              <div className="text-sm text-gray-400">Signal</div>
              <div className="mt-2 text-sm text-white/90">Subscribe for executive releases: doctrine updates, industry indices, and cinematic briefs.</div>
              <div className="mt-4 flex gap-3">
                <input className="flex-1 rounded-[12px] bg-white/5 border border-white/10 px-4 py-3 placeholder:text-gray-500 focus-ring" placeholder="Email" />
                <button className="rounded-[16px] border border-white/20 px-5 py-3 focus-ring active:translate-y-px transition">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <footer className="border-t border-white/10 pb-10">
        <div className="mx-auto max-w-[1200px] px-6 py-10 grid md:grid-cols-12 gap-8 text-sm text-gray-400">
          <div className="md:col-span-6">© {new Date().getFullYear()} VALISCI. All rights reserved.</div>
          <div className="md:col-span-6 md:text-right space-x-6">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
            <a href="#contact" className="hover:text-white/80">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
