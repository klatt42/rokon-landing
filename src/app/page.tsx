'use client';

import { useState, useEffect } from 'react';

// ROKon Logo Component - Fighter jet with climbing bars
function ROKonLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* F-15 Style Icon */}
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        {/* Jet body */}
        <path
          d="M24 4L28 16H32L38 28H28V36L24 44L20 36V28H10L16 16H20L24 4Z"
          fill="url(#jetGradient)"
          stroke="#00d4ff"
          strokeWidth="1.5"
        />
        {/* Cockpit */}
        <ellipse cx="24" cy="18" rx="3" ry="5" fill="#0a0f1a" stroke="#00d4ff" strokeWidth="1" />
        {/* Exhaust glow */}
        <ellipse cx="24" cy="40" rx="2" ry="4" fill="#ff6b35" opacity="0.8" />
        <defs>
          <linearGradient id="jetGradient" x1="24" y1="4" x2="24" y2="44">
            <stop offset="0%" stopColor="#1a2744" />
            <stop offset="100%" stopColor="#0a0f1a" />
          </linearGradient>
        </defs>
      </svg>
      {/* ROKon Text with climbing bars */}
      <div className="flex flex-col">
        <span className="text-2xl font-black tracking-tight">
          <span className="text-[#00d4ff]">R</span>
          <span className="text-[#ff6b35]">O</span>
          <span className="text-[#00ff88]">K</span>
          <span className="text-white">on</span>
        </span>
        <div className="flex gap-0.5 h-1">
          <div className="w-2 bg-[#00d4ff] rounded-sm" style={{ height: '3px' }} />
          <div className="w-2 bg-[#ff6b35] rounded-sm" style={{ height: '5px' }} />
          <div className="w-2 bg-[#00ff88] rounded-sm" style={{ height: '7px' }} />
        </div>
      </div>
    </div>
  );
}

// Radar HUD Component
function RadarHUD() {
  return (
    <div className="w-64 h-64 xl:w-80 xl:h-80 opacity-60">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Outer glow ring */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="#00d4ff" strokeWidth="0.3" opacity="0.5" />
        {/* Radar circles */}
        <circle cx="100" cy="100" r="90" fill="none" stroke="#00d4ff" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#00d4ff" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="#00d4ff" strokeWidth="0.6" />
        {/* Cross hairs */}
        <line x1="100" y1="5" x2="100" y2="195" stroke="#00d4ff" strokeWidth="0.5" />
        <line x1="5" y1="100" x2="195" y2="100" stroke="#00d4ff" strokeWidth="0.5" />
        {/* Diagonal lines */}
        <line x1="30" y1="30" x2="170" y2="170" stroke="#00d4ff" strokeWidth="0.3" opacity="0.5" />
        <line x1="170" y1="30" x2="30" y2="170" stroke="#00d4ff" strokeWidth="0.3" opacity="0.5" />
        {/* Sweep gradient */}
        <defs>
          <linearGradient id="sweepGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Sweep cone */}
        <path
          d="M100,100 L100,10 A90,90 0 0,1 163,50 Z"
          fill="url(#sweepGradient)"
          className="radar-sweep"
          style={{ transformOrigin: '100px 100px' }}
        />
        {/* Sweep line */}
        <line x1="100" y1="100" x2="100" y2="10" stroke="#00d4ff" strokeWidth="2" className="radar-sweep" style={{ transformOrigin: '100px 100px' }} />
        {/* Center dot */}
        <circle cx="100" cy="100" r="3" fill="#00d4ff" />
        {/* Blips - threats detected */}
        <circle cx="140" cy="60" r="4" fill="#ff3366" className="pulse-glow" />
        <circle cx="55" cy="130" r="4" fill="#ff6b35" className="pulse-glow" />
        <circle cx="160" cy="120" r="3" fill="#00ff88" className="pulse-glow" />
        <circle cx="75" cy="70" r="3" fill="#ffd700" className="pulse-glow" />
        {/* Blip rings */}
        <circle cx="140" cy="60" r="8" fill="none" stroke="#ff3366" strokeWidth="1" opacity="0.5" className="pulse-glow" />
        <circle cx="55" cy="130" r="8" fill="none" stroke="#ff6b35" strokeWidth="1" opacity="0.5" className="pulse-glow" />
      </svg>
    </div>
  );
}

// Phase Card Component
function PhaseCard({
  phase,
  name,
  tagline,
  description,
  color
}: {
  phase: number;
  name: string;
  tagline: string;
  description: string;
  color: string;
}) {
  const colorClasses: Record<string, { border: string; text: string; bg: string }> = {
    cyan: { border: 'border-[#00d4ff]', text: 'text-[#00d4ff]', bg: 'bg-[#00d4ff]' },
    orange: { border: 'border-[#ff6b35]', text: 'text-[#ff6b35]', bg: 'bg-[#ff6b35]' },
    green: { border: 'border-[#00ff88]', text: 'text-[#00ff88]', bg: 'bg-[#00ff88]' },
  };

  const colors = colorClasses[color];

  return (
    <div className={`relative p-6 rounded-lg border ${colors.border} bg-[#0a0f1a]/80 backdrop-blur-sm hover:bg-[#0a0f1a] transition-all duration-300 group`}>
      {/* Phase number badge */}
      <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center text-black font-bold text-sm`}>
        {phase}
      </div>

      {/* Content */}
      <h3 className={`text-2xl font-bold ${colors.text} mb-1`}>{name}</h3>
      <p className="text-gray-400 text-sm mb-3 italic">{tagline}</p>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>

      {/* Corner accent */}
      <div className={`absolute bottom-0 right-0 w-12 h-12 ${colors.bg} opacity-5 rounded-tl-full`} />
    </div>
  );
}

// Waitlist Form Component
function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center p-8 rounded-lg border border-[#00ff88] bg-[#00ff88]/5">
        <div className="text-4xl mb-4">&#x2705;</div>
        <h3 className="text-2xl font-bold text-[#00ff88] mb-2">Mission Accepted</h3>
        <p className="text-gray-300">You&apos;re on the list, pilot. We&apos;ll contact you when it&apos;s time to engage.</p>
        <p className="text-sm text-gray-500 mt-4">Check your inbox for confirmation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="w-full px-4 py-3 bg-[#0a0f1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#00d4ff] transition-colors"
        />
      </div>

      <div>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className="w-full px-4 py-3 bg-[#0a0f1a] border border-gray-700 rounded-lg text-white focus:border-[#00d4ff] transition-colors appearance-none cursor-pointer"
        >
          <option value="" disabled>What&apos;s your role?</option>
          <option value="agency-owner">Agency Owner</option>
          <option value="seo-specialist">SEO Specialist</option>
          <option value="marketing-director">Marketing Director</option>
          <option value="freelancer">Freelance Consultant</option>
          <option value="in-house">In-House SEO</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-gradient-to-r from-[#00d4ff] via-[#ff6b35] to-[#00ff88] text-black font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 btn-lift"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing...
          </span>
        ) : (
          'REQUEST EARLY ACCESS'
        )}
      </button>
    </form>
  );
}

// Stat Counter Component
function StatCounter({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-[#00d4ff] mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}

// Testimonial/Quote Component
function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="p-6 rounded-lg border border-gray-700 bg-[#0a0f1a]/50">
      <p className="text-gray-300 italic mb-4">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#00ff88]" />
        <div>
          <div className="font-semibold text-white">{author}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );
}

// Main Page Component
export default function LandingPage() {
  const [spotsLeft, setSpotsLeft] = useState(147);

  // Simulate spots decreasing
  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft(prev => {
        if (prev > 100) return prev - 1;
        return prev;
      });
    }, 30000); // Decrease every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0f1a] tactical-grid overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <ROKonLogo />
          <a
            href="#waitlist"
            className="px-6 py-2 bg-[#00d4ff] text-black font-bold rounded-lg hover:bg-[#00d4ff]/90 transition-colors btn-lift"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Radar positioned in hero, top right area */}
        <div className="absolute top-32 right-10 xl:right-32 hidden lg:block pointer-events-none z-0">
          <RadarHUD />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left: Copy */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff6b35] bg-[#ff6b35]/10">
              <span className="w-2 h-2 rounded-full bg-[#ff6b35] animate-pulse" />
              <span className="text-sm text-[#ff6b35] font-medium">EARLY ACCESS - {spotsLeft} Spots Remaining</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="text-white">Traditional SEO is</span><br />
              <span className="relative inline-block">
                <span className="text-[#ff3366] opacity-40">Dead</span>
                {/* Dramatic X strikethrough */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="#ff3366" strokeWidth="8" strokeLinecap="round" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="#ff3366" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </span>{' '}
              <span className="text-white">Incomplete.</span><br />
              <span className="gradient-text-rok">Total Search Domination</span><br />
              <span className="text-white">Starts Here.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              While your competitors optimize for Google alone, ROKon positions you to <span className="text-[#00d4ff]">get cited by ChatGPT</span>, <span className="text-[#ff6b35]">appear in Claude responses</span>, and <span className="text-[#00ff88]">dominate Perplexity answers</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#waitlist"
                className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#00ff88] text-black font-bold rounded-lg hover:opacity-90 transition-opacity btn-lift text-center text-lg"
              >
                Claim Your Spot Now
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-[#00d4ff] hover:text-[#00d4ff] transition-colors text-center"
              >
                See How It Works
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#00ff88] border-2 border-[#0a0f1a]" />
                ))}
              </div>
              <span className="text-sm text-gray-400">
                <span className="text-white font-semibold">500+</span> SEO pros already on the waitlist
              </span>
            </div>
          </div>

          {/* Right: Visual/Terminal */}
          <div className="relative">

            <div className="rounded-lg border border-gray-700 bg-[#0a0f1a]/95 backdrop-blur-sm p-6 font-mono text-sm relative z-10">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-[#ff3366]" />
                <div className="w-3 h-3 rounded-full bg-[#ffd700]" />
                <div className="w-3 h-3 rounded-full bg-[#00ff88]" />
                <span className="ml-4 text-gray-500">rokon --analyze example.com</span>
              </div>

              {/* Terminal content */}
              <div className="space-y-3">
                <div className="text-[#00d4ff]">&#x25B6; INITIALIZING ROKon THREAT ASSESSMENT...</div>
                <div className="text-gray-400">Scanning 4 search fronts...</div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">SEO (Traditional)</span>
                    <span className="text-[#00ff88]">72/100 &#x2713;</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">AEO (Answer Engine)</span>
                    <span className="text-[#ffd700]">45/100 &#x26A0;</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">GEO (Generative Engine)</span>
                    <span className="text-[#ff3366]">28/100 &#x2717;</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">AISO (AI Search Platforms)</span>
                    <span className="text-[#ff3366]">19/100 &#x2717;</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="text-[#ff6b35]">&#x26A0; THREAT DETECTED:</div>
                  <div className="text-gray-400 mt-1">Your content is INVISIBLE to AI assistants.</div>
                  <div className="text-gray-400">ChatGPT cites your competitor 4.2x more often.</div>
                </div>
                <div className="mt-4">
                  <span className="text-[#00ff88]">&#x25B6; Ready to KONQUER?</span>
                  <span className="cursor-blink text-white ml-1"> </span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 px-3 py-1 rounded-full bg-[#ff6b35] text-black text-xs font-bold animate-bounce">
              NEW
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The <span className="text-[#ff3366]">Uncomfortable Truth</span> About Your SEO
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-lg border border-[#ff3366]/30 bg-[#ff3366]/5">
              <div className="text-4xl mb-4">&#x1F4C9;</div>
              <h3 className="text-xl font-bold text-white mb-2">Organic Traffic is Declining</h3>
              <p className="text-gray-400">AI search is stealing your clicks. Users get answers without visiting your site.</p>
            </div>

            <div className="p-6 rounded-lg border border-[#ff3366]/30 bg-[#ff3366]/5">
              <div className="text-4xl mb-4">&#x1F916;</div>
              <h3 className="text-xl font-bold text-white mb-2">AI Doesn&apos;t Know You Exist</h3>
              <p className="text-gray-400">When users ask ChatGPT for recommendations, they cite your competitors instead.</p>
            </div>

            <div className="p-6 rounded-lg border border-[#ff3366]/30 bg-[#ff3366]/5">
              <div className="text-4xl mb-4">&#x1F4A8;</div>
              <h3 className="text-xl font-bold text-white mb-2">Traditional SEO Tools Miss This</h3>
              <p className="text-gray-400">Your current tools optimize for 2015. The game changed. They didn&apos;t tell you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The <span className="gradient-text-rok">Three-Phase War</span> for Search Dominance
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ROKon doesn&apos;t just audit. It wages a systematic campaign to dominate every search front.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PhaseCard
              phase={1}
              name="REVEAL"
              tagline="Expose All Weaknesses"
              description="Complete battlefield reconnaissance. We analyze your SEO, AEO, GEO, and AISO positions to expose every vulnerability before attack planning."
              color="cyan"
            />

            <PhaseCard
              phase={2}
              name="OPTIMIZE"
              tagline="Execute Tactical Fixes"
              description="Targeted strikes on your weak points. From schema markup to AI-optimized content, we deploy fixes that make AI assistants cite YOU."
              color="orange"
            />

            <PhaseCard
              phase={3}
              name="KONQUER"
              tagline="Total Search Domination"
              description="Pull everything together into a coordinated final assault. Measure victory across all fronts and maintain dominance."
              color="green"
            />
          </div>

          {/* The 4 Fronts */}
          <div className="mt-20 p-8 rounded-lg border border-gray-700 bg-[#0a0f1a]/50">
            <h3 className="text-2xl font-bold text-white text-center mb-8">The Four Fronts of Modern Search</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#00d4ff]/10 flex items-center justify-center mb-3">
                  <span className="text-2xl">&#x1F50D;</span>
                </div>
                <h4 className="font-bold text-[#00d4ff]">SEO</h4>
                <p className="text-sm text-gray-400">Traditional Search</p>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#ff6b35]/10 flex items-center justify-center mb-3">
                  <span className="text-2xl">&#x1F4AC;</span>
                </div>
                <h4 className="font-bold text-[#ff6b35]">AEO</h4>
                <p className="text-sm text-gray-400">Answer Engines</p>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#ffd700]/10 flex items-center justify-center mb-3">
                  <span className="text-2xl">&#x2728;</span>
                </div>
                <h4 className="font-bold text-[#ffd700]">GEO</h4>
                <p className="text-sm text-gray-400">Generative AI</p>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#00ff88]/10 flex items-center justify-center mb-3">
                  <span className="text-2xl">&#x1F9E0;</span>
                </div>
                <h4 className="font-bold text-[#00ff88]">AISO</h4>
                <p className="text-sm text-gray-400">AI Search Platforms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Platforms Section */}
      <section className="py-24 border-t border-gray-800 bg-gradient-to-b from-transparent via-[#00d4ff]/5 to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Optimize for Every AI Assistant
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ROKon&apos;s INFILTRATE system ensures you appear when users ask AI for recommendations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'ChatGPT', code: 'ALPHA-1', color: '#00ff88' },
              { name: 'Claude', code: 'BRAVO-2', color: '#ff6b35' },
              { name: 'Gemini', code: 'CHARLIE-3', color: '#00d4ff' },
              { name: 'Perplexity', code: 'DELTA-4', color: '#ffd700' },
              { name: 'Grok', code: 'ECHO-5', color: '#ff3366' },
              { name: 'Meta AI', code: 'FOXTROT-6', color: '#9b59b6' },
            ].map(platform => (
              <div
                key={platform.code}
                className="p-4 rounded-lg border border-gray-700 bg-[#0a0f1a]/80 text-center hover:border-gray-500 transition-colors"
              >
                <div className="text-xs font-mono mb-2" style={{ color: platform.color }}>{platform.code}</div>
                <div className="font-bold text-white">{platform.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Early Testers Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Finally, a tool that understands SEO isn't just about Google anymore. The AISO scoring alone is worth 10x the price."
              author="Marcus Chen"
              role="Agency Owner, 47 clients"
            />
            <TestimonialCard
              quote="We went from invisible to top-cited in Perplexity for our main keywords. Our organic leads tripled."
              author="Sarah Mitchell"
              role="Director of Marketing"
            />
            <TestimonialCard
              quote="The tactical theme is cheesy. The results are not. This is genuinely the most forward-thinking SEO tool I've used."
              author="James Rodriguez"
              role="SEO Consultant"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-t border-gray-800 bg-gradient-to-b from-transparent via-[#ff6b35]/5 to-transparent">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value="47%" label="of searches now use AI" />
            <StatCounter value="62%" label="less click-through on SERPs" />
            <StatCounter value="4.2x" label="more citations with ROKon" />
            <StatCounter value="100+" label="optimization checkpoints" />
          </div>
        </div>
      </section>

      {/* Main Waitlist Section */}
      <section id="waitlist" className="py-24 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Benefits */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join the <span className="text-[#00d4ff]">Elite Pilot</span> Waitlist
              </h2>

              <div className="space-y-4">
                {[
                  { icon: '&#x1F680;', text: 'First access when we launch' },
                  { icon: '&#x1F4B0;', text: '50% founding member discount' },
                  { icon: '&#x1F3AF;', text: 'Free beta access to AISO analyzer' },
                  { icon: '&#x1F4E7;', text: 'Weekly AI search intelligence reports' },
                  { icon: '&#x1F91D;', text: 'Private community access' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xl" dangerouslySetInnerHTML={{ __html: item.icon }} />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-lg border border-[#ffd700]/30 bg-[#ffd700]/5">
                <div className="flex items-center gap-2">
                  <span className="text-[#ffd700]">&#x26A1;</span>
                  <span className="text-[#ffd700] font-semibold">Only {spotsLeft} spots left at founding price</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-8 rounded-lg border border-gray-700 bg-[#0a0f1a]/80">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Request Early Access</h3>
              <WaitlistForm />

              <p className="text-xs text-gray-500 text-center mt-4">
                No spam. Unsubscribe anytime. We respect your inbox like we respect rankings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternate CTAs Section */}
      <section className="py-24 border-t border-gray-800 bg-gradient-to-b from-[#0a0f1a] to-[#0d1421]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Still on the Fence? Consider This...
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-lg border border-gray-700 bg-[#0a0f1a]/50 text-left">
              <h3 className="text-xl font-bold text-[#ff3366] mb-4">Without ROKon</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff3366]">&#x2717;</span>
                  AI assistants recommend your competitors
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff3366]">&#x2717;</span>
                  Organic traffic continues declining
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff3366]">&#x2717;</span>
                  No visibility into AI search presence
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff3366]">&#x2717;</span>
                  Playing catch-up when it&apos;s too late
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-[#00ff88] bg-[#00ff88]/5 text-left">
              <h3 className="text-xl font-bold text-[#00ff88] mb-4">With ROKon</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff88]">&#x2713;</span>
                  Get cited when users ask AI for recommendations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff88]">&#x2713;</span>
                  Dominate all 4 search fronts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff88]">&#x2713;</span>
                  Real-time AISO visibility scores
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff88]">&#x2713;</span>
                  First-mover advantage while others sleep
                </li>
              </ul>
            </div>
          </div>

          <a
            href="#waitlist"
            className="inline-block px-12 py-5 bg-gradient-to-r from-[#00d4ff] via-[#ff6b35] to-[#00ff88] text-black text-xl font-bold rounded-lg hover:opacity-90 transition-opacity btn-lift"
          >
            Secure Your Spot Before It&apos;s Gone
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Questions Before You Engage
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What exactly is AISO?",
                a: "AI Search Optimization. It's optimizing your content to be cited, recommended, and referenced by AI assistants like ChatGPT, Claude, Gemini, Perplexity, Grok, and Meta AI. Traditional SEO tools completely miss this."
              },
              {
                q: "How is this different from other SEO tools?",
                a: "Other tools optimize for Google circa 2015. ROKon optimizes for where search is going: AI-powered answers. We analyze your visibility across 6 AI platforms and provide specific fixes to get you cited."
              },
              {
                q: "When will ROKon launch?",
                a: "We're targeting Q1 2026 for public launch. Waitlist members get early beta access and founding member pricing locked in for life."
              },
              {
                q: "Is the military theme mandatory?",
                a: "ROKon has both tactical and classic themes. Choose your style. The results are the same: domination."
              },
              {
                q: "What's the founding member price?",
                a: "Waitlist members lock in 50% off our launch pricing. No commitment to stay, but you'll want to."
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-lg border border-gray-700 bg-[#0a0f1a]/50">
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 border-t border-gray-800 relative overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d4ff]/5 via-transparent to-[#00ff88]/5" />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to <span className="text-[#00d4ff]">REVEAL</span>, <span className="text-[#ff6b35]">OPTIMIZE</span>, and <span className="text-[#00ff88]">KONQUER</span>?
          </h2>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            The future of search is AI-first. Your competitors don&apos;t know this yet. That&apos;s your advantage.
          </p>

          <a
            href="#waitlist"
            className="inline-block px-12 py-6 bg-white text-[#0a0f1a] text-xl font-black rounded-lg hover:bg-gray-100 transition-colors btn-lift"
          >
            JOIN THE MISSION
          </a>

          <p className="mt-6 text-sm text-gray-500">
            No credit card required. Join {500 + (147 - spotsLeft)} others already on the waitlist.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <ROKonLogo />

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>&copy; 2025 ROKon</span>
              <a href="#" className="hover:text-[#00d4ff] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#00d4ff] transition-colors">Terms</a>
            </div>

            <div className="text-sm text-gray-500">
              REVEAL &bull; OPTIMIZE &bull; KONQUER
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
