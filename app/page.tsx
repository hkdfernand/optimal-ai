"use client";

import { useState } from "react";

const services = [
  {
    title: "Never Lose a Lead Again",
    description: "Capture and qualify every website visitor while you sleep",
    result: "Convert 40% more leads into paying customers",
    price: "From $1,000",
    icon: "💬",
  },
  {
    title: "Fill Your Pipeline Daily", 
    description: "Wake up to a CRM full of pre-qualified prospects",
    result: "Get 50+ new qualified leads per week",
    price: "From $800",
    icon: "🎯",
  },
  {
    title: "Stop Data Entry Forever",
    description: "Your CRM updates itself, follow-ups happen automatically",
    result: "Save 8 hours per week on admin work",
    price: "From $500",
    icon: "📊",
  },
  {
    title: "Get Paid Without Chasing",
    description: "Invoices send themselves, payments tracked automatically",
    result: "Reduce late payments by 70%",
    price: "From $500",
    icon: "📄",
  },
  {
    title: "Post Content While You Sleep",
    description: "Your content appears everywhere without lifting a finger",
    result: "Cut social media time from 2 hours to 15 minutes daily",
    price: "From $800",
    icon: "📱",
  },
  {
    title: "Create Videos Without Recording",
    description: "AI generates your marketing videos automatically",
    result: "Produce 10x more video content in half the time",
    price: "From $1,500",
    icon: "🎬",
  },
  {
    title: "Manage Teams Without Micromanaging",
    description: "Tasks assign themselves, progress tracked automatically",
    result: "Free up 15 hours per week from team coordination",
    price: "From $1,000",
    icon: "⚡",
  },
  {
    title: "Solve Any Workflow Challenge",
    description: "Custom automation for your unique business processes",
    result: "Eliminate your biggest time-wasting task",
    price: "From $500",
    icon: "🔧",
  },
];

const socialProofNumbers = [
  { metric: "20+", label: "Hours saved weekly" },
  { metric: "24/7", label: "Automation running" },
  { metric: "15 min", label: "Setup to live" },
  { metric: "50+", label: "Workflows deployed" },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hkdfernand@gmail.com?subject=Free Automation Audit Request from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="fixed top-0 z-50 w-full border-b border-[#1a1a1a] bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold tracking-tight">
            <span className="text-[#00d4ff]">Optimal</span> AI
          </a>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1 p-1"
          >
            <span className="w-5 h-0.5 bg-white transition-all"></span>
            <span className="w-5 h-0.5 bg-white transition-all"></span>
            <span className="w-5 h-0.5 bg-white transition-all"></span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-zinc-400 transition-colors hover:text-white">
              Services
            </a>
            <a href="#results" className="text-sm text-zinc-400 transition-colors hover:text-white">
              Case Studies
            </a>
            <a href="#faq" className="text-sm text-zinc-400 transition-colors hover:text-white">
              FAQ
            </a>
            <a href="#about" className="text-sm text-zinc-400 transition-colors hover:text-white">
              About
            </a>
            <a href="#contact" className="rounded-full bg-[#00d4ff] px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-[#00b8e6]">
              Get Your Free Audit
            </a>
          </div>

          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-[#0a0a0a]/95 border-b border-[#1a1a1a] md:hidden">
              <div className="flex flex-col gap-4 p-6">
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-sm text-zinc-400">Services</a>
                <a href="#results" onClick={() => setMobileMenuOpen(false)} className="text-sm text-zinc-400">Case Studies</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-sm text-zinc-400">FAQ</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm text-zinc-400">About</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="rounded-full bg-[#00d4ff] px-5 py-2 text-sm font-medium text-black text-center">
                  Get Your Free Audit
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-[#00d4ff]/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Save 20+ hours per week without hiring more staff
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Cut weekly admin from 4 hours to 15 minutes. Stop manually entering leads. Never chase late payments again.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#contact" className="rounded-full bg-[#00d4ff] px-8 py-4 text-base font-semibold text-black transition-all hover:bg-[#00b8e6] hover:shadow-lg hover:shadow-[#00d4ff]/20">
              Get Your Free Automation Audit
            </a>
            <a href="#how" className="rounded-full border border-zinc-700 px-8 py-4 text-base font-medium text-white transition-colors hover:border-zinc-500">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 text-2xl font-bold md:text-3xl">These daily frustrations end now</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6">
              <h3 className="mb-3 text-lg font-semibold text-[#00d4ff]">Drowning in Data Entry</h3>
              <p className="text-zinc-400">Spending hours copying information between systems, updating spreadsheets, and manually tracking every lead and customer interaction.</p>
            </div>
            <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6">
              <h3 className="mb-3 text-lg font-semibold text-[#00d4ff]">Missing Hot Leads</h3>
              <p className="text-zinc-400">Prospects slip through the cracks while you sleep. By the time you respond, they've already found your competitor.</p>
            </div>
            <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6">
              <h3 className="mb-3 text-lg font-semibold text-[#00d4ff]">Buried in Repetitive Tasks</h3>
              <p className="text-zinc-400">Sending the same emails, creating identical reports, and doing the same workflows over and over instead of growing your business.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] bg-[#111111]/50 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-8 text-lg text-zinc-300">Trusted by businesses saving 20+ hours per week</p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {socialProofNumbers.map((r, i) => (
              <div key={i} className="text-center">
                <p className="mb-1 text-3xl font-bold text-[#00d4ff] md:text-4xl">
                  {r.metric}
                </p>
                <p className="text-sm text-zinc-400">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#00d4ff]">
              What You Get
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Transform These Painful Tasks Into Automated Wins
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div key={i} className="group rounded-xl border border-[#1a1a1a] bg-[#111111] p-6 transition-all hover:border-[#00d4ff]/30 hover:shadow-lg hover:shadow-[#00d4ff]/5">
                <div className="mb-4 text-3xl">{s.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-zinc-400">
                  {s.description}
                </p>
                <p className="mb-3 text-sm font-medium text-[#00d4ff]">
                  {s.result}
                </p>
                <p className="text-sm font-semibold text-white">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="border-y border-[#1a1a1a] bg-[#111111]/30 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#00d4ff]">
              How It Works
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Book a Call → We Build It → You Save Hours
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Book Your Free Audit",
                desc: "15-minute call where we identify your biggest time-wasting tasks and map out your automation plan.",
              },
              {
                step: "02",
                title: "We Build Your Solution",
                desc: "Custom automation system deployed within 1-2 weeks. We handle all the technical setup while you focus on your business.",
              },
              {
                step: "03",
                title: "Watch Hours Return",
                desc: "Tasks that took hours now happen automatically. Full training and support included so you never feel lost.",
              },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#00d4ff]/30 text-sm font-bold text-[#00d4ff]">
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
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#00d4ff]">
              Real Results
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Here's What Happens When You Stop Doing Everything Manually
            </h2>
          </div>
          <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-8">
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-[#00d4ff]">Before Automation</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• 4 hours weekly on lead entry and follow-ups</li>
                  <li>• Missing 30% of website inquiries</li>
                  <li>• Chasing late payments manually</li>
                  <li>• 2 hours daily on social media posting</li>
                  <li>• Team asking "what's the status?" constantly</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-[#00d4ff]">After Automation</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>• 15 minutes weekly - everything else automatic</li>
                  <li>• Capturing and qualifying 100% of leads</li>
                  <li>• Invoices and reminders send themselves</li>
                  <li>• Content posts across all channels while sleeping</li>
                  <li>• Real-time project updates for everyone</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#1a1a1a] pt-6 text-center">
              <p className="text-lg font-semibold text-[#00d4ff]">Result: 22 hours returned to your week</p>
              <p className="text-sm text-zinc-400">Time you can spend on strategy, growth, or actually having a life</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-[#1a1a1a] bg-[#111111]/30 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Questions Everyone Asks
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "How long does it take to see results?",
                a: "Most automations go live within 1-2 weeks. You'll start saving time immediately, with the full impact visible within the first month."
              },
              {
                q: "Do I need technical knowledge to use this?",
                a: "Not at all. We build everything for you and provide complete training. If you can use email, you can manage these systems."
              },
              {
                q: "What if something breaks or stops working?",
                a: "We monitor all systems 24/7 and provide ongoing support. Most issues are caught and fixed before you even notice. Plus, we include maintenance in all our packages."
              },
              {
                q: "Is this really worth the investment?",
                a: "If you value your time at $50/hour, saving 20 hours per week equals $4,000 monthly. Our solutions typically pay for themselves within the first month."
              },
              {
                q: "What tools and platforms do you work with?",
                a: "We specialize in n8n, Make, and custom API integrations. We connect with your existing tools - CRM, email, social media, accounting software, and more."
              },
              {
                q: "What's included in the free audit?",
                a: "15-minute call where we review your current processes, identify automation opportunities, and create a custom roadmap. No sales pressure - just valuable insights you can use immediately."
              }
            ].map((faq, i) => (
              <div key={i} className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6">
                <h3 className="mb-3 text-lg font-semibold text-[#00d4ff]">{faq.q}</h3>
                <p className="text-zinc-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#00d4ff]">
            Tech Stack
          </p>
          <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">
            Built With Enterprise-Grade Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "n8n", "OpenAI", "Claude AI", "Make", "Zapier", "Stripe", 
              "Slack", "HubSpot", "Airtable", "Google APIs"
            ].map((t, i) => (
              <span key={i} className="rounded-full border border-[#1a1a1a] bg-[#111111] px-4 py-2 text-sm text-zinc-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-[#1a1a1a] bg-[#111111]/30 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#00d4ff]">
            About
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            Hi, I'm Fernand
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-zinc-400">
            Electronics Engineering Technician who got tired of watching business owners drown in manual tasks that could be automated in minutes.
          </p>
          <p className="text-lg leading-relaxed text-zinc-400">
            I've deployed 50+ automation workflows that have saved businesses thousands of hours. Now I want to give you those hours back too.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Get Your Life Back?
          </h2>
          <p className="mb-8 text-lg text-zinc-400">
            Free audit. No commitment. You'll walk away with a clear automation plan whether you work with us or not.
          </p>
          <a href="#contact" className="inline-block rounded-full bg-[#00d4ff] px-10 py-4 text-lg font-semibold text-black transition-all hover:bg-[#00b8e6] hover:shadow-lg hover:shadow-[#00d4ff]/20">
            Get Your Free Automation Audit
          </a>
        </div>
      </section>

      <section id="contact" className="border-t border-[#1a1a1a] bg-[#111111]/30 px-6 py-24">
        <div className="mx-auto max-w-xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Book Your Free Audit Call
            </h2>
            <p className="text-zinc-400">
              Tell me about your biggest time-wasting task. I'll show you exactly how to automate it.
            </p>
          </div>
          {submitted ? (
            <div className="rounded-xl border border-[#00d4ff]/30 bg-[#111111] p-8 text-center">
              <p className="text-xl font-semibold text-[#00d4ff]">
                Audit request sent successfully
              </p>
              <p className="mt-2 text-zinc-400">
                I'll review your information and get back to you within 24 hours with your custom automation plan.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-[#1a1a1a] bg-[#111111] px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-[#00d4ff]/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-[#1a1a1a] bg-[#111111] px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-[#00d4ff]/50"
              />
              <textarea
                placeholder="What's your biggest time-wasting task? (Example: 'I spend 3 hours weekly copying leads from website forms to my CRM and sending follow-up emails')"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg border border-[#1a1a1a] bg-[#111111] px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-[#00d4ff]/50"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-[#00d4ff] py-4 text-base font-semibold text-black transition-all hover:bg-[#00b8e6] hover:shadow-lg hover:shadow-[#00d4ff]/20"
              >
                Get My Free Automation Audit
              </button>
            </form>
          )}
          <p className="mt-6 text-center text-sm text-zinc-500">
            Or email me directly:{" "}
            <a href="mailto:hkdfernand@gmail.com" className="text-[#00d4ff] hover:underline">
              hkdfernand@gmail.com
            </a>
          </p>
        </div>
      </section>

      <footer className="border-t border-[#1a1a1a] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Optimal AI. Built by Fernand from Optimal AI.
          </p>
          <div className="flex gap-6">
            <a href="mailto:hkdfernand@gmail.com" className="text-sm text-zinc-500 transition-colors hover:text-[#00d4ff]">
              hkdfernand@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
