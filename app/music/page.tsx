"use client";

import { useState } from "react";

const releases = [
  {
    title: "Midnight Protocol",
    gradient: "from-purple-900 via-violet-800 to-indigo-900",
  },
  {
    title: "Neural Drift",
    gradient: "from-violet-900 via-purple-800 to-pink-900",
  },
  {
    title: "Voltage",
    gradient: "from-indigo-900 via-blue-800 to-purple-900",
  },
  {
    title: "Afterglow",
    gradient: "from-pink-900 via-rose-800 to-violet-900",
  },
  {
    title: "Signal Lost",
    gradient: "from-purple-900 via-indigo-800 to-blue-900",
  },
  {
    title: "First Light",
    gradient: "from-violet-900 via-purple-800 to-indigo-900",
  },
];

const socialLinks = [
  { name: "YouTube", href: "#", icon: "▶" },
  { name: "Instagram", href: "#", icon: "📷" },
  { name: "TikTok", href: "#", icon: "🎵" },
  { name: "X", href: "#", icon: "𝕏" },
  { name: "SoundCloud", href: "#", icon: "☁" },
];

const streamingPlatforms = [
  { name: "Spotify", href: "#", icon: "🎧" },
  { name: "Apple Music", href: "#", icon: "🎵" },
  { name: "YouTube Music", href: "#", icon: "▶" },
  { name: "SoundCloud", href: "#", icon: "☁" },
];

export default function MusicPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .gradient-animated {
          background: linear-gradient(-45deg, #a855f7, #ec4899, #3b82f6, #8b5cf6);
          background-size: 400% 400%;
          animation: gradient-shift 8s ease-in-out infinite;
        }
        @keyframes pulse-violet {
          0%, 100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.3);
          }
        }
        .animate-pulse-violet {
          animation: pulse-violet 3s ease-in-out infinite;
        }
        .waveform {
          background: repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 2px,
            rgba(168, 85, 247, 0.3) 2px,
            rgba(168, 85, 247, 0.3) 4px
          );
          height: 2px;
          width: 100%;
        }
        .waveform-animated {
          background: repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 2px,
            rgba(168, 85, 247, 0.6) 2px,
            rgba(168, 85, 247, 0.6) 4px
          );
          height: 3px;
          width: 100%;
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      <nav className="fixed top-0 z-50 w-full border-b border-card-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold tracking-tight">
            <span className="text-violet-500">H.</span>Sounds
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              About
            </a>
            <a
              href="#music"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Music
            </a>
            <a
              href="#identity"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Visual Identity
            </a>
            <a
              href="#connect"
              className="rounded-full bg-violet-500 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-600"
            >
              Connect
            </a>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="gradient-animated absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full opacity-10 blur-3xl" />
          <div className="absolute left-1/4 bottom-1/4 h-64 w-64 rounded-full bg-violet-500/5 blur-2xl" />
          <div className="absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-pink-500/5 blur-2xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="animate-fade-in opacity-0">
            <div className="waveform-animated mb-6" />
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-violet-400">
              Electronic • Cinematic • World Music
            </p>
          </div>
          <h1 className="animate-fade-in stagger-1 mb-6 text-6xl font-bold leading-tight tracking-tight opacity-0 md:text-8xl">
            H.Sounds
          </h1>
          <p className="animate-fade-in stagger-2 mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-zinc-300 opacity-0">
            Where Sound Meets Vision
          </p>
          <div className="animate-fade-in stagger-3 flex flex-wrap justify-center gap-4 opacity-0">
            {streamingPlatforms.map((platform, i) => (
              <a
                key={i}
                href={platform.href}
                className="flex items-center gap-2 rounded-full border border-violet-500/30 bg-card-bg/50 px-6 py-3 text-sm font-medium text-white transition-all hover:border-violet-500/60 hover:bg-violet-500/10 hover:shadow-lg hover:shadow-violet-500/20"
              >
                <span className="text-lg">{platform.icon}</span>
                {platform.name}
              </a>
            ))}
          </div>
          <div className="waveform mt-10" />
        </div>
      </section>

      <section id="about" className="border-y border-card-border bg-card-bg/30 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-400">
            About
          </p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
            The Artist
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-300">
            H.Sounds is the sonic identity of Fernand Havugimana — a producer, composer, and sound designer blending electronic, cinematic, and world music influences. After years of crafting music in the shadows, H.Sounds emerges with a catalog of original productions ready to move you.
          </p>
        </div>
      </section>

      <section id="music" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-400">
              Latest Releases
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Music
            </h2>
            <div className="waveform mx-auto max-w-md" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {releases.map((release, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-card-border bg-card-bg transition-all hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`aspect-square bg-gradient-to-br ${release.gradient} transition-all group-hover:scale-105`}>
                  <div className="flex h-full items-center justify-center">
                    <div className={`h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm transition-all ${hoveredCard === i ? 'animate-pulse-violet' : ''}`}>
                      <div className="flex h-full items-center justify-center text-2xl text-white">
                        ♪
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-lg font-semibold">{release.title}</h3>
                  <button className="rounded-full bg-violet-500 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/20">
                    Listen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="identity" className="border-y border-card-border bg-card-bg/50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-400">
              Evolution
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Visual Identity
            </h2>
          </div>
          <div className="rounded-xl border border-violet-500/20 bg-card-bg p-8">
            <p className="mb-6 text-lg leading-relaxed text-zinc-300">
              H.Sounds represents a new chapter — AI-enhanced visuals, cinematic music videos, and a commitment to pushing the boundaries of what independent music can be.
            </p>
            <p className="text-lg leading-relaxed text-zinc-300">
              Every release paired with AI-generated visual storytelling.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 md:grid-cols-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-lg bg-gradient-to-br ${releases[i % releases.length].gradient} opacity-60 transition-all hover:opacity-100`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="connect" className="px-6 py-24">
        <div className="mx-auto max-w-xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-400">
              Stay Connected
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Connect
            </h2>
            <div className="waveform mx-auto max-w-md" />
          </div>
          
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-5">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="flex flex-col items-center rounded-xl border border-card-border bg-card-bg p-4 text-center transition-all hover:border-violet-500/30 hover:bg-violet-500/5"
              >
                <span className="mb-2 text-2xl">{social.icon}</span>
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            ))}
          </div>
          
          <div className="rounded-xl border border-violet-500/20 bg-card-bg p-6 text-center">
            <p className="mb-2 text-sm text-zinc-400">Email</p>
            <a
              href="mailto:hkdfernand@gmail.com"
              className="text-lg font-semibold text-violet-400 transition-colors hover:text-violet-300"
            >
              hkdfernand@gmail.com
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-card-border px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} H.Sounds. All rights reserved.
          </p>
          <a
            href="/"
            className="text-sm text-zinc-500 transition-colors hover:text-violet-400"
          >
            Powered by Optimal AI
          </a>
        </div>
      </footer>
    </div>
  );
}