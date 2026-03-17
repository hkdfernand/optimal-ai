"use client";

import { useState } from "react";

const releases = [
  {
    title: "Midnight Protocol",
    genre: "Electronic / Cinematic",
    gradient: "from-purple-900 via-violet-800 to-indigo-900",
  },
  {
    title: "Neural Drift",
    genre: "Ambient / Experimental",
    gradient: "from-violet-900 via-purple-800 to-pink-900",
  },
  {
    title: "Voltage",
    genre: "Bass / Electronic",
    gradient: "from-indigo-900 via-blue-800 to-purple-900",
  },
  {
    title: "Afterglow",
    genre: "Chill / Melodic",
    gradient: "from-pink-900 via-rose-800 to-violet-900",
  },
  {
    title: "Signal Lost",
    genre: "Dark Electronic",
    gradient: "from-purple-900 via-indigo-800 to-blue-900",
  },
  {
    title: "First Light",
    genre: "Uplifting / Cinematic",
    gradient: "from-violet-900 via-purple-800 to-indigo-900",
  },
];

const socialLinks = [
  { name: "YouTube", href: "#", icon: "YT" },
  { name: "Instagram", href: "#", icon: "IG" },
  { name: "TikTok", href: "#", icon: "TT" },
  { name: "X", href: "#", icon: "X" },
  { name: "SoundCloud", href: "#", icon: "SC" },
  { name: "Spotify", href: "#", icon: "SP" },
];

const streamingPlatforms = [
  { name: "Listen Now on Spotify", href: "#" },
  { name: "Watch on YouTube", href: "#" },
];

const visualIdentityCards = [
  {
    title: "AI Music Videos",
    description: "Generative visuals that evolve with every beat",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    title: "Generative Album Art",
    description: "Unique artwork for each release using neural networks",
    gradient: "from-violet-600 to-purple-600",
  },
  {
    title: "Immersive Visuals",
    description: "Complete audiovisual experiences beyond traditional music",
    gradient: "from-indigo-600 to-violet-600",
  },
];

export default function MusicPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <style jsx>{`
        @keyframes hero-gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          33% {
            background-position: 100% 25%;
          }
          66% {
            background-position: 0% 75%;
          }
        }
        .hero-bg {
          background: linear-gradient(-45deg, #a855f7, #ec4899, #6366f1, #8b5cf6);
          background-size: 400% 400%;
          animation: hero-gradient 12s ease-in-out infinite;
        }
        @keyframes waveform-1 {
          0%, 100% { height: 20px; }
          50% { height: 60px; }
        }
        @keyframes waveform-2 {
          0%, 100% { height: 40px; }
          50% { height: 30px; }
        }
        @keyframes waveform-3 {
          0%, 100% { height: 30px; }
          50% { height: 80px; }
        }
        @keyframes waveform-4 {
          0%, 100% { height: 50px; }
          50% { height: 25px; }
        }
        @keyframes waveform-5 {
          0%, 100% { height: 25px; }
          50% { height: 70px; }
        }
        .waveform-bar:nth-child(1) {
          animation: waveform-1 2s ease-in-out infinite;
        }
        .waveform-bar:nth-child(2) {
          animation: waveform-2 2.2s ease-in-out infinite;
        }
        .waveform-bar:nth-child(3) {
          animation: waveform-3 1.8s ease-in-out infinite;
        }
        .waveform-bar:nth-child(4) {
          animation: waveform-4 2.4s ease-in-out infinite;
        }
        .waveform-bar:nth-child(5) {
          animation: waveform-5 2.1s ease-in-out infinite;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(168, 85, 247, 0.2);
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.3);
          }
        }
        .glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-bg absolute inset-0 opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/20 to-[#0a0a0a]"></div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="flex justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="waveform-bar w-2 bg-gradient-to-t from-[#a855f7] to-[#ec4899] rounded-full"
              />
            ))}
          </div>

          <h1 className="text-8xl md:text-9xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
              H.Sounds
            </span>
          </h1>

          <h2 className="text-3xl md:text-4xl mb-6 font-light tracking-wide">
            Sound Without Boundaries
          </h2>

          <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Where human creativity collides with artificial intelligence to create worlds that move with the sound
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {streamingPlatforms.map((platform, i) => (
              <a
                key={i}
                href={platform.href}
                className="glass-card px-8 py-4 rounded-full font-semibold transition-all hover:bg-[#a855f7]/20 hover:scale-105 hover:shadow-lg hover:shadow-[#a855f7]/20"
              >
                {platform.name}
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-1">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="w-1 h-0.5 bg-gradient-to-r from-[#a855f7]/30 to-[#ec4899]/30 rounded-full"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#a855f7] mb-4">Latest Release</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Featured Track</h2>
          </div>
          
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 aspect-square rounded-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 float">
                    <span className="text-2xl">▶</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-3">Midnight Protocol</h3>
                <p className="text-[#a855f7] mb-4">Electronic / Cinematic</p>
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  A journey through digital landscapes where neon-lit algorithms dance with human emotion. Midnight Protocol explores the intersection of technology and soul.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="bg-[#a855f7] hover:bg-[#7c3aed] px-6 py-3 rounded-full font-semibold transition-all hover:scale-105">
                    Listen Now on Spotify
                  </a>
                  <a href="#" className="border border-[#a855f7] hover:bg-[#a855f7]/10 px-6 py-3 rounded-full font-semibold transition-all">
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#a855f7] mb-4">Catalog</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Complete Releases</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {releases.map((release, i) => (
              <div
                key={i}
                className="glass-card rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#a855f7]/20 group"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`aspect-square bg-gradient-to-br ${release.gradient} relative`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className={`h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all ${hoveredCard === i ? 'glow' : ''}`}>
                      <span className="text-lg">♪</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{release.title}</h3>
                  <p className="text-[#a855f7] text-sm mb-4">{release.genre}</p>
                  <button className="bg-[#a855f7] hover:bg-[#7c3aed] px-6 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 w-full">
                    Listen Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-[#a855f7] mb-4">The Vision</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Beyond Music</h2>
          
          <div className="glass-card rounded-2xl p-8 md:p-12 text-left">
            <p className="text-xl leading-relaxed mb-6 text-zinc-300">
              H.Sounds is not just music — it's a complete audiovisual experience. Every release is paired with AI-generated visuals, creating worlds that move with the sound.
            </p>
            <p className="text-xl leading-relaxed text-zinc-300">
              Born from years of production as Fernand HKD, H.Sounds represents the next evolution — where human creativity meets artificial intelligence to push the boundaries of what independent music can be.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#a855f7] mb-4">Visual Identity</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">AI-Powered Visuals</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visualIdentityCards.map((card, i) => (
              <div key={i} className="glass-card rounded-xl p-8 text-center hover:scale-105 transition-all">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${card.gradient} flex items-center justify-center`}>
                  <span className="text-2xl font-bold">AI</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-zinc-300">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#a855f7] mb-4">Connect</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Stay Connected</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="glass-card p-6 rounded-xl text-center transition-all hover:bg-[#a855f7]/10 hover:scale-105"
              >
                <div className="text-2xl font-bold mb-2">{social.icon}</div>
                <div className="text-sm">{social.name}</div>
              </a>
            ))}
          </div>

          <div className="glass-card rounded-xl p-8 text-center mb-8">
            <p className="text-sm text-zinc-400 mb-2">Email</p>
            <a
              href="mailto:hkdfernand@gmail.com"
              className="text-xl font-semibold text-[#a855f7] hover:text-[#ec4899] transition-colors"
            >
              hkdfernand@gmail.com
            </a>
          </div>

          <div className="glass-card rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-center">Newsletter</h3>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-[#a855f7]/30 rounded-full px-6 py-3 focus:outline-none focus:border-[#a855f7]"
              />
              <button className="bg-[#a855f7] hover:bg-[#7c3aed] px-8 py-3 rounded-full font-semibold transition-all hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © 2026 H.Sounds
          </p>
          <a
            href="/"
            className="text-sm text-zinc-500 hover:text-[#a855f7] transition-colors"
          >
            Powered by Optimal AI
          </a>
        </div>
      </footer>
    </div>
  );
}