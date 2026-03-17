"use client";

import { useState } from "react";

const services = [
  {
    title: "AI Customer Service Chatbots",
    description:
      "24/7 intelligent chatbots that handle customer inquiries, qualify leads, and route conversations — reducing support costs by up to 80%.",
    price: "From $1,000",
    icon: "💬",
  },
  {
    title: "Lead Scraping & Qualification",
    description:
      "Automated pipelines that find, scrape, and qualify leads from multiple sources — delivering warm prospects straight to your CRM.",
    price: "From $800",
    icon: "🎯",
  },
  {
    title: "CRM Automation",
    description:
      "End-to-end CRM workflows that auto-update contacts, trigger follow-ups, and keep your pipeline moving without manual data entry.",
    price: "From $500",
    icon: "📊",
  },
  {
    title: "Invoice & Billing Automation",
    description:
      "Automated invoice generation, payment tracking, and reminders. Never chase a late payment manually again.",
    price: "From $500",
    icon: "📄",
  },
  {
    title: "Content Auto-Posting",
    description:
      "Create once, publish everywhere. Automated content distribution across social media, email, and your website on autopilot.",
    price: "From $800",
    icon: "📱",
  },
  {
    title: "AI Video Generation",
    description:
      "Automated video creation pipelines for marketing, social media, and product demos using cutting-edge AI models.",
    price: "From $1,500",
    icon: "🎬",
  },
  {
    title: "Job & Task Management",
    description:
      "Custom workflow systems that assign, track, and manage jobs across your team with automated notifications and reporting.",
    price: "From $1,000",
    icon: "⚡",
  },
  {
    title: "Custom AI Automation",
    description:
      "Have a unique workflow challenge? We design and build bespoke automation solutions tailored to your exact business needs.",
    price: "From $500",
    icon: "🔧",
  },
];

const results = [
  { metric: "80%", label: "Reduction in manual tasks" },
  { metric: "24/7", label: "Automated operations" },
  { metric: "10x", label: "Faster lead processing" },
  { metric: "50+", label: "Workflows deployed" },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hkdfernand@gmail.com?subject=Optimal AI Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 z-50 w-full border-b border-card-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold tracking-tight">
            <span className="text-accent">Optimal</span> AI
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Services
            </a>
            <a
              href="#results"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Results
            </a>
            <a
              href="#about"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              About
            </a>
            <a
              href="#contact"
              className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-accent-dark"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="animate-fade-in opacity-0">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              AI-Powered Business Automation
            </p>
          </div>
          <h1 className="animate-fade-in stagger-1 mb-6 text-5xl font-bold leading-tight tracking-tight opacity-0 md:text-7xl">
            Stop doing manually
            <br />
            what AI can{" "}
            <span className="text-accent">automate.</span>
          </h1>
          <p className="animate-fade-in stagger-2 mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 opacity-0">
            We build intelligent n8n workflows, AI chatbots, and automation
            systems that save you 20+ hours per week and scale your business on
            autopilot.
          </p>
          <div className="animate-fade-in stagger-3 flex flex-col items-center gap-4 opacity-0 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="rounded-full bg-accent px-8 py-4 text-base font-semibold text-black transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
            >
              Book a Free Consultation
            </a>
            <a
              href="#services"
              className="rounded-full border border-zinc-700 px-8 py-4 text-base font-medium text-white transition-colors hover:border-zinc-500"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-card-bg/50 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {results.map((r, i) => (
            <div key={i} className="text-center">
              <p className="mb-1 text-3xl font-bold text-accent md:text-4xl">
                {r.metric}
              </p>
              <p className="text-sm text-zinc-400">{r.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              What We Build
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Automation Services
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="group rounded-xl border border-card-border bg-card-bg p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="mb-4 text-3xl">{s.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                  {s.description}
                </p>
                <p className="text-sm font-semibold text-accent">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-card-bg/30 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              How It Works
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              From Chaos to Autopilot in 3 Steps
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "We map your current workflows and identify the biggest automation opportunities.",
              },
              {
                step: "02",
                title: "Build & Test",
                desc: "We design and deploy your custom automation system using n8n and AI tools.",
              },
              {
                step: "03",
                title: "Launch & Scale",
                desc: "Go live with full support. We monitor, optimize, and scale as your business grows.",
              },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 text-sm font-bold text-accent">
                  {s.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              Tech Stack
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Built With Enterprise-Grade Tools
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "n8n",
              "OpenAI",
              "Claude AI",
              "LangChain",
              "Make",
              "Zapier",
              "Stripe",
              "Twilio",
              "Slack",
              "HubSpot",
              "Airtable",
              "Google APIs",
              "REST APIs",
              "Webhooks",
              "PostgreSQL",
              "Supabase",
            ].map((t, i) => (
              <span
                key={i}
                className="rounded-full border border-card-border bg-card-bg px-4 py-2 text-sm text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-card-border bg-card-bg/30 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            About
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            Fernand Havugimana
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-zinc-400">
            Electronics Engineering Technician turned AI Automation Specialist.
            I combine deep technical knowledge with practical business
            understanding to build automation systems that actually work.
          </p>
          <p className="text-lg leading-relaxed text-zinc-400">
            Specialized in n8n workflow automation, AI agent development,
            and building intelligent systems that replace repetitive manual
            processes with scalable, reliable automation.
          </p>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              Get Started
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Let&apos;s Automate Your Business
            </h2>
            <p className="text-zinc-400">
              Tell us about your workflow challenges. Free consultation — no
              commitment.
            </p>
          </div>
          {submitted ? (
            <div className="animate-glow rounded-xl border border-accent/30 bg-card-bg p-8 text-center">
              <p className="text-xl font-semibold text-accent">
                Message ready to send!
              </p>
              <p className="mt-2 text-zinc-400">
                Your email client should have opened. We&apos;ll get back to you
                within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-lg border border-card-border bg-card-bg px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-accent/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-lg border border-card-border bg-card-bg px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-accent/50"
              />
              <textarea
                placeholder="Tell us about your automation needs..."
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full rounded-lg border border-card-border bg-card-bg px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-accent/50"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-accent py-4 text-base font-semibold text-black transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
              >
                Send Message
              </button>
            </form>
          )}
          <p className="mt-6 text-center text-sm text-zinc-500">
            Or email directly:{" "}
            <a
              href="mailto:hkdfernand@gmail.com"
              className="text-accent hover:underline"
            >
              hkdfernand@gmail.com
            </a>
          </p>
        </div>
      </section>

      <footer className="border-t border-card-border px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Optimal AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:hkdfernand@gmail.com"
              className="text-sm text-zinc-500 transition-colors hover:text-accent"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
